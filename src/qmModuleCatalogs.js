import {module1Questions} from './qmModule1.js';
import {module2Questions} from './qmModule2.js';
import {module3Questions} from './qmModule3.js';
import {module4Questions} from './qmModule4.js';
import {module5Questions} from './qmModule5.js';
import {module6Questions} from './qmModule6.js';
import {module7Questions} from './qmModule7.js';
import {module8Questions} from './qmModule8.js';
import {module9Questions} from './qmModule9.js';
import {module10Questions} from './qmModule10.js';
import {module11Questions} from './qmModule11.js';
import {module12Questions} from './qmModule12.js';

// Antwortoptionen erhalten pro Frage eine feste, reproduzierbare Reihenfolge.
// Der Lösungsschlüssel wird entsprechend der neuen Position umgesetzt.
export const shuffleQuestion = (question) => {
  const order = [0,1,2,3];
  let seed = 2166136261;
  for (const char of question.id) { seed = Math.imul(seed ^ char.charCodeAt(0), 16777619) >>> 0; }
  for (let i=3;i>0;i--) {
    seed = (Math.imul(seed,1664525)+1013904223) >>> 0;
    const j = seed % (i+1);
    [order[i],order[j]] = [order[j],order[i]];
  }
  return {...question, a: order.map(i=>question.a[i]), correct: order.indexOf(question.correct)};
};

export const moduleCatalogs = [
  {id:'m1',number:1,topic:"Grundlagen",name:"Kapitel 1 · Ziele und Nutzen von QM-Systemen",questions:module1Questions.map(shuffleQuestion)},
  {id:'m2',number:2,topic:"Dokumentation",name:"Kapitel 2 · Systemdokumentation",questions:module2Questions.map(shuffleQuestion)},
  {id:'m3',number:3,topic:"Prozesse",name:"Kapitel 3 · Prozessmanagement",questions:module3Questions.map(shuffleQuestion)},
  {id:'m4',number:4,topic:"Zertifizierung",name:"Kapitel 4 · Zertifizierung",questions:module4Questions.map(shuffleQuestion)},
  {id:'m5',number:5,topic:"Risiko",name:"Kapitel 5 · Risikomanagement",questions:module5Questions.map(shuffleQuestion)},
  {id:'m6',number:6,topic:"Service",name:"Kapitel 6 · Qualitätsmanagement im Service",questions:module6Questions.map(shuffleQuestion)},
  {id:'m7',number:7,topic:"Nachhaltigkeit",name:"Kapitel 7 · Nachhaltige Unternehmensentwicklung",questions:module7Questions.map(shuffleQuestion)},
  {id:'m8',number:8,topic:"Wissen",name:"Kapitel 8 · Wissensmanagement",questions:module8Questions.map(shuffleQuestion)},
  {id:'m9',number:9,topic:"Führung",name:"Kapitel 9 · Motivation und Führung",questions:module9Questions.map(shuffleQuestion)},
  {id:'m10',number:10,topic:"Qualitätskosten",name:"Kapitel 10 · Qualitätsbezogene Kosten",questions:module10Questions.map(shuffleQuestion)},
  {id:'m11',number:11,topic:"Statistik",name:"Kapitel 11 · Statistische Methoden",questions:module11Questions.map(shuffleQuestion)},
  {id:'m12',number:12,topic:"Methoden",name:"Kapitel 12 · Methoden und Werkzeuge",questions:module12Questions.map(shuffleQuestion)},
];
export const chapterQuestions = moduleCatalogs.flatMap(c => c.questions);
