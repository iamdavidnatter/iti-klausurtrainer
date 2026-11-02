import assert from 'node:assert/strict';
import {hkQuestions} from '../src/qmHkQuestions.js';
import {janQuestions} from '../src/qmJanQuestions.js';
import {newQuestions} from '../src/qmNewQuestions.js';

const catalogs = [
  ['Altklausur 16.01.2025',hkQuestions,40],
  ['Altklausur 31.01.2025',janQuestions,30],
  ['Neue Probeklausur',newQuestions,40],
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
assert.equal(ids.size,110);
const covered = new Set(newQuestions.map(q=>q.topic));
assert.equal(covered.size,12,'Neue Probeklausur muss alle zwölf Themen abdecken');
console.log('OK: 110 gültige Fragen, eindeutige IDs, vier Optionen, genau ein Lösungsschlüssel je Frage.');
