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

export const moduleCatalogs = [
  {id:'m1',number:1,topic:"Grundlagen",name:"Kapitel 1 · Ziele und Nutzen von QM-Systemen",questions:module1Questions},
  {id:'m2',number:2,topic:"Dokumentation",name:"Kapitel 2 · Systemdokumentation",questions:module2Questions},
  {id:'m3',number:3,topic:"Prozesse",name:"Kapitel 3 · Prozessmanagement",questions:module3Questions},
  {id:'m4',number:4,topic:"Zertifizierung",name:"Kapitel 4 · Zertifizierung",questions:module4Questions},
  {id:'m5',number:5,topic:"Risiko",name:"Kapitel 5 · Risikomanagement",questions:module5Questions},
  {id:'m6',number:6,topic:"Service",name:"Kapitel 6 · Qualitätsmanagement im Service",questions:module6Questions},
  {id:'m7',number:7,topic:"Nachhaltigkeit",name:"Kapitel 7 · Nachhaltige Unternehmensentwicklung",questions:module7Questions},
  {id:'m8',number:8,topic:"Wissen",name:"Kapitel 8 · Wissensmanagement",questions:module8Questions},
  {id:'m9',number:9,topic:"Führung",name:"Kapitel 9 · Motivation und Führung",questions:module9Questions},
  {id:'m10',number:10,topic:"Qualitätskosten",name:"Kapitel 10 · Qualitätsbezogene Kosten",questions:module10Questions},
  {id:'m11',number:11,topic:"Statistik",name:"Kapitel 11 · Statistische Methoden",questions:module11Questions},
  {id:'m12',number:12,topic:"Methoden",name:"Kapitel 12 · Methoden und Werkzeuge",questions:module12Questions},
];
export const chapterQuestions = moduleCatalogs.flatMap(c => c.questions);
