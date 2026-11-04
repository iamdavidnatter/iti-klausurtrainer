import assert from 'node:assert/strict';
import {hkQuestions} from '../src/qmHkQuestions.js';
import {janQuestions} from '../src/qmJanQuestions.js';
import {newQuestions} from '../src/qmNewQuestions.js';
import {moduleCatalogs,chapterQuestions} from '../src/qmModuleCatalogs.js';
import {module1Questions} from '../src/qmModule1.js';

const catalogs = [
  ['Altklausur 16.01.2025',hkQuestions,40],
  ['Altklausur 31.01.2025',janQuestions,30],
  ['Neue Probeklausur',newQuestions,40],
  ...moduleCatalogs.map(c => [c.name,c.questions,[12,12,10,8,10,14,16,12,10,12,28,36][c.number-1]]),
];
const ids = new Set();
for (const [title,questions,expected] of catalogs) {
  assert.equal(questions.length,expected,title+' hat eine unerwartete Fragenzahl');
  for (const q of questions) {
    assert.equal(typeof q.id,'string');
    assert.ok(!ids.has(q.id),'Doppelte ID: '+q.id);
    ids.add(q.id);
    assert.ok(Number.isInteger(q.number) && q.number>0,q.id+': ungültige Nummer');
    assert.ok(q.q.trim().length>10,q.id+': Fragetext fehlt');
    assert.ok(Array.isArray(q.a) && q.a.length===4,q.id+': genau vier Optionen benötigt');
    assert.ok(q.a.every(a=>typeof a==='string' && a.trim().length>0),q.id+': leere Antwort');
    assert.equal(new Set(q.a.map(s=>s.toLocaleLowerCase('de'))).size,4,q.id+': Antwort doppelt');
    assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.id+': es muss genau ein korrekter Index 0..3 existieren');
    assert.ok(typeof q.why==='string'&&q.why.length>15,q.id+': fachliche Begründung fehlt');
    assert.ok(typeof q.source==='string'&&q.source.startsWith('M'),q.id+': Modulbezug fehlt');
  }
  console.log(title+': '+questions.length+' Fragen geprüft');
}
assert.equal(moduleCatalogs.length,12);
assert.equal(chapterQuestions.length,180);
assert.equal(ids.size,290);
for (const c of moduleCatalogs) {
  assert.equal(c.questions.length,c.number===11?28:c.number===12?36:[12,12,10,8,10,14,16,12,10,12][c.number-1]);
  for (const q of c.questions) {
    assert.equal(q.chapter,c.number,q.id+': Kapitelnummer stimmt nicht');
    assert.equal(q.type,'chapter',q.id+': Typ stimmt nicht');
    assert.equal(q.topic,c.topic,q.id+': Thema stimmt nicht');
    assert.ok(q.source.startsWith('M'+c.number+', Folie '),q.id+': Quellenangabe zum falschen Modul');
  }
}
assert.equal(module1Questions.length,moduleCatalogs[0].questions.length);
// Beim Mischen müssen Antwortmenge und korrekter Antworttext erhalten bleiben.
for (let i=0;i<module1Questions.length;i++) {
  const raw=module1Questions[i], mixed=moduleCatalogs[0].questions[i];
  assert.equal(mixed.a[mixed.correct],raw.a[raw.correct]);
  assert.deepEqual([...mixed.a].sort(),[...raw.a].sort());
}
const covered = new Set(newQuestions.map(q=>q.topic));
assert.equal(covered.size,12,'Neue Probeklausur muss alle zwölf Themen abdecken');
console.log('OK: 290 gültige Fragen in 15 Fachkatalogen + Gesamtmodus, 12 Kapitel und richtige Antwortzuordnung nach Durchmischung.');
