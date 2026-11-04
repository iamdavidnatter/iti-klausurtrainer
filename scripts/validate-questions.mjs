import assert from 'node:assert/strict';
import {hkQuestions} from '../src/qmHkQuestions.js';
import {janQuestions} from '../src/qmJanQuestions.js';
import {newQuestions} from '../src/qmNewQuestions.js';
import {moduleCatalogs,chapterQuestions} from '../src/qmModuleCatalogs.js';
import {module1Questions} from '../src/qmModule1.js';
import {module2Questions} from '../src/qmModule2.js';
import {module3Questions} from '../src/qmModule3.js';
import {module4Questions} from '../src/qmModule4.js';
import {module5Questions} from '../src/qmModule5.js';
import {module6Questions} from '../src/qmModule6.js';
import {module7Questions} from '../src/qmModule7.js';
import {module8Questions} from '../src/qmModule8.js';
import {module9Questions} from '../src/qmModule9.js';
import {module10Questions} from '../src/qmModule10.js';
import {module11Questions} from '../src/qmModule11.js';
import {module12Questions} from '../src/qmModule12.js';


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
const rawModules = [module1Questions,module2Questions,module3Questions,module4Questions,module5Questions,module6Questions,module7Questions,module8Questions,module9Questions,module10Questions,module11Questions,module12Questions];
// Der Lösungsschlüssel muss bei jeder Kapitel-Frage nach der Antwortdurchmischung erhalten bleiben.
for (const [chapterIndex, original] of rawModules.entries()) {
  const mixed = moduleCatalogs[chapterIndex].questions;
  assert.equal(original.length,mixed.length,'Kapitelmenge geändert');
  for (let i=0;i<original.length;i++) {
    const raw=original[i], question=mixed[i];
    assert.equal(question.id,raw.id,'Frage verwechselt');
    assert.equal(question.a[question.correct],raw.a[raw.correct],raw.id+': korrekte Antwort nach Shuffle verändert');
    assert.deepEqual([...question.a].sort(),[...raw.a].sort(),raw.id+': Optionen nach Shuffle verändert');
    // Eine formal auffällige Antwortlänge kann die Lösung durch Ausschluss verraten.
    const rightLength = raw.a[raw.correct].length;
    const otherLengths = raw.a.filter((_,j)=>j!==raw.correct).map(a=>a.length);
    const ratio = (otherLengths.reduce((a,b)=>a+b,0)/3+5)/(rightLength+5);
    assert.ok(ratio>0.36&&ratio<2.7,raw.id+': verräterischer Unterschied in der Antwortlänge ('+ratio.toFixed(2)+')');
    const absoluteWords = /\b(?:nur|ausschließlich|immer|nie|grundsätzlich|automatisch|zwingend|vollständig|sämtlich)\b/i;
    const absoluteDistractors=raw.a.filter((_,j)=>j!==raw.correct).filter(a=>absoluteWords.test(a)).length;
    assert.ok(absoluteDistractors<2,raw.id+': mehrere leicht ausschließbare absolute Formulierungen');
  }
}
const covered = new Set(newQuestions.map(q=>q.topic));
assert.equal(covered.size,12,'Neue Probeklausur muss alle zwölf Themen abdecken');
console.log('OK: 290 Fragen, 180 Kapitelaufgaben mit balancierten Optionen, stabile Lösungsschlüssel und 12 geprüfte Kapitelkataloge.');
