import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
 import {BookOpen, GraduationCap, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Filter, ShieldCheck, Clock, Menu, ClipboardCheck, ChartNoAxesColumn, Info} from 'lucide-react';
import {hkQuestions} from './qmHkQuestions.js';
import {janQuestions} from './qmJanQuestions.js';
import {newQuestions} from './qmNewQuestions.js';
import './style.css';
import './qm.css';

const allQuestions = [...hkQuestions, ...janQuestions, ...newQuestions];
const storageKey = 'qualitaetsmanagement-trainer-v1';
const load = () => { try { return JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { return {}; } };
const catalogs = [
 {id:'hk', name:'Altklausur 16.01.2025', questions:hkQuestions, icon:ClipboardCheck},
 {id:'jan', name:'Altklausur 31.01.2025', questions:janQuestions, icon:ClipboardCheck},
 {id:'new', name:'Neue Probeklausur', questions:newQuestions, icon:GraduationCap},
 {id:'all', name:'Alle Fragen', questions:allQuestions, icon:ChartNoAxesColumn},
];
const letter = i => 'ABCD'[i] || '–';

function App() {
 const [catalog,setCatalog] = useState('hk');
 const [exam,setExam] = useState(false);
 const [topic,setTopic] = useState('Alle');
 const [answers,setAnswers] = useState(load);
 const [index,setIndex] = useState(0);
 const [onlyErrors,setOnlyErrors] = useState(false);
 const [submitted,setSubmitted] = useState(false);
 const [resultView,setResultView] = useState(false);
 const [navOpen,setNavOpen] = useState(false);

 useEffect(() => { try { localStorage.setItem(storageKey, JSON.stringify(answers)); } catch {} }, [answers]);
 const base = catalogs.find(c => c.id === catalog)?.questions || hkQuestions;
 const topics = useMemo(() => [...new Set(base.map(q => q.topic))].sort((a,b) => a.localeCompare(b,'de')), [base]);
 const pool = useMemo(() => base.filter(q => topic === 'Alle' || q.topic === topic).filter(q => !onlyErrors || (answers[q.id]?.checked && answers[q.id]?.choice !== q.correct)), [base,topic,onlyErrors,answers]);
 const safeIndex = Math.min(index, Math.max(0,pool.length-1));
 const current = pool[safeIndex];
 const entry = current ? (answers[current.id] || {}) : {};
 const evaluated = base.filter(q => answers[q.id]?.checked);
 const correct = evaluated.filter(q => answers[q.id]?.choice === q.correct).length;
 const answered = pool.filter(q => Number.isInteger(answers[q.id]?.choice)).length;
 const isRevealed = current && (entry.checked || submitted);
 const score = base.length ? Math.round(correct/base.length*100) : 0;

 const resetView = () => {setIndex(0);setOnlyErrors(false);setSubmitted(false);setResultView(false);};
 const switchCatalog = id => {setCatalog(id);setTopic('Alle');resetView();setNavOpen(false);};
 const newAttempt = (nextExam=exam) => {
   setAnswers(previous => {
     const next = {...previous};
     base.forEach(q => delete next[q.id]);
     return next;
   });
   setExam(nextExam);resetView();
 };
 const select = option => {
   if (!current || isRevealed) return;
   setAnswers(previous => ({...previous,[current.id]:{choice:option,checked:!exam}}));
 };
 const finish = () => {
   if (exam) {
     setAnswers(previous => {
       const next = {...previous};
       base.forEach(q => {next[q.id]={choice:next[q.id]?.choice,checked:true};});
       return next;
     });
     setSubmitted(true);
   }
   setResultView(true);
 };
 const resultsVisible = !exam || submitted;
 const resetAll = () => {
   if (!window.confirm('Gesamten gespeicherten QM-Lernfortschritt wirklich löschen?')) return;
   setAnswers({});resetView();
 };

 return <div className="shell">
  <header className="topbar"><div className="brand"><div className="brandmark"><GraduationCap size={22}/></div><span>QM<span className="brandmuted">TRAINER</span></span></div><div className="headerRight"><span className="desktopLabel">QUALITÄTSMANAGEMENT · 12 MODULE</span><span className="tag">110 FRAGEN</span></div></header>
  <div className="layout">
   <aside className={'sidebar '+(navOpen?'visible':'')}>
    <div className="asideTitle">KLAUSURKATALOGE</div>
    {catalogs.map(c => <button key={c.id} className={'sidebutton '+(catalog===c.id?'active':'')} onClick={() => switchCatalog(c.id)}><c.icon size={18}/><span>{c.name}</span><b>{c.questions.length}</b></button>)}
    <div className="asideTitle second">DEIN FORTSCHRITT</div>
    <div className="stat"><span>Im Katalog bewertet</span><strong>{evaluated.length}/{base.length}</strong></div>
    <div className="stat"><span>Richtig beantwortet</span><strong>{correct}</strong></div>
    <div className="stat"><span>Quote (bewertete)</span><strong>{evaluated.length?Math.round(correct/evaluated.length*100)+' %':'–'}</strong></div>
    <button className="reset" onClick={resetAll}><RotateCcw size={16}/> Alles zurücksetzen</button>
    <div className="asideHint"><ShieldCheck size={18}/><span>Die Altklausuren wurden fachlich überprüft. Offensichtliche Fehler und mehrdeutige Antwortkombinationen sind korrigiert. Das ist kein offizieller Lösungsschlüssel.</span></div>
   </aside>
   <main className="content">
    <button className="mobileNav" onClick={() => setNavOpen(x => !x)}><Menu size={18}/> Kataloge auswählen</button>
    <div className="eyebrow"><span className="pulse"/> LERNEN · VERSTEHEN · BESTEHEN</div>
    <h1>Bereit für die <em>QM-Klausur?</em></h1>
    <p className="intro">Zwei fachlich überprüfte Altklausuren und eine <b>neue Prüfung mit 40 Fragen</b>. Jede Frage hat genau eine richtige Antwort. Falschbeantwortete Fragen kannst du gezielt wiederholen.</p>
    <section className="dashboard">
     <div className="metric"><small>FRAGEN IM FILTER</small><strong>{pool.length}</strong><span>Single Choice</span></div>
     <div className="metric"><small>BEANTWORTET</small><strong>{answered}<span className="smallUnit"> / {pool.length}</span></strong><span>Dein Fortschritt</span></div>
     <div className="metric"><small>RICHTIG</small><strong>{evaluated.length?Math.round(correct/evaluated.length*100)+' %':'–'}</strong><span>{evaluated.length} Antworten bewertet</span></div>
    </section>
    <section className="controlPanel">
      <div className="switches">
       <button className={!exam?'selected':''} onClick={() => {if(exam)newAttempt(false);}}><BookOpen size={16}/> Lernmodus</button>
       <button className={exam?'selected':''} onClick={() => {if(!exam)newAttempt(true);}}><Clock size={16}/> Prüfungsmodus</button>
      </div>
      <div className="controlRight">
       <select aria-label="Thema" value={topic} onChange={e => {setTopic(e.target.value);setIndex(0);setResultView(false);setOnlyErrors(false);}}>
        <option>Alle</option>{topics.map(t => <option key={t}>{t}</option>)}
       </select>
       <button className={'subtle '+(onlyErrors?'selectedSmall':'')} onClick={() => {setOnlyErrors(x=>!x);setIndex(0);setResultView(false);}}><Filter size={16}/> {onlyErrors?'Fehlerfilter an':'Fehler üben'}</button>
      </div>
    </section>
    {exam && !submitted && <p className="qmNotice"><Clock size={17}/> Prüfungsmodus: Es gibt vor Abgabe kein Feedback. Du kannst Antworten bis zur Abgabe ändern. Unbeantwortete Fragen zählen bei der Auswertung als falsch.</p>}
    {resultView ? <section className="questionCard finish">
      <div className="finishIcon"><CheckCircle2 size={44}/></div>
      <h2>{exam?'Prüfung ausgewertet':'Lernfortschritt'}</h2>
      <p><b>{correct} von {base.length}</b> Fragen richtig ({score} % bezogen auf den ganzen Katalog). {exam ? (correct/base.length>0.5?'Die in den Folien genannte Schwelle von über 50 % ist erreicht.':'Die in den Folien genannte Schwelle von über 50 % ist noch nicht erreicht.') : 'Offene Fragen sind noch nicht bewertet.'}</p>
      <div className="qmResultActions"><button className="primary" onClick={() => {setResultView(false);setIndex(0);}}><BookOpen size={17}/> Antworten ansehen</button><button className="outline" onClick={() => newAttempt()}><RotateCcw size={17}/> Neuer Durchgang</button></div>
    </section> : current ? <section className="questionCard">
      <div className="questionHeader"><div className="chips"><span className="chip mainchip">{catalog==='hk'?'ALT · 16.01.2025':catalog==='jan'?'ALT · 31.01.2025':catalog==='new'?'NEUE PROBEKLAUSUR':current.type==='hk'?'ALT · 16.01.2025':current.type==='jan'?'ALT · 31.01.2025':'NEU'}</span><span className="chip">{current.topic}</span></div><span className="questionCounter">{safeIndex+1} <span>/ {pool.length}</span></span></div>
      <div className="progress"><div style={{width:(pool.length?((safeIndex+1)/pool.length*100):0)+'%'}}/></div>
      <h2>Frage {current.number}</h2><h3>{current.q}</h3>
      <div className="options" role="group" aria-label="Antwortmöglichkeiten">
       {current.a.map((answer,n) => <button key={n} className={'answer '+(entry.choice===n?'picked ':'')+(isRevealed && current.correct===n?'right ':'')+(isRevealed && entry.choice===n && n!==current.correct?'wrong ':'')} disabled={Boolean(isRevealed)} onClick={() => select(n)}>
        <span className="letter">{letter(n)}</span><span className="answerText">{answer}</span>
        {isRevealed&&current.correct===n&&<CheckCircle2 className="yes" size={19}/>}
        {isRevealed&&entry.choice===n&&entry.choice!==current.correct&&<XCircle className="no" size={19}/>}
       </button>)}
      </div>
      {isRevealed && <div className={'feedback '+(entry.choice===current.correct?'success':'error')}>
       <div className="feedbackTitle">{entry.choice===current.correct?'Richtig beantwortet':'Nicht richtig beantwortet'}</div>
       <p><b>Richtig ist {letter(current.correct)}:</b> {current.a[current.correct]}</p>
       <p><strong>Begründung:</strong> {current.why}</p><p className="qmSource"><Info size={14}/> Grundlage: Vorlesungsunterlagen {current.source}</p>
      </div>}
      <div className="actions"><button className="outline" disabled={safeIndex===0} onClick={() => setIndex(n => Math.max(0,n-1))}><ArrowLeft size={17}/> Zurück</button>
       <div className="actionRight">{exam&&!submitted&&<button className="outline" onClick={finish}><CheckCircle2 size={17}/> Prüfung abgeben</button>}
        <button className="primary" onClick={() => safeIndex<pool.length-1?setIndex(n=>n+1):finish()}>{safeIndex<pool.length-1?'Nächste Frage':'Auswertung'} <ArrowRight size={17}/></button></div>
      </div>
    </section> : <section className="questionCard finish"><h2>Keine passenden Fragen</h2><p>Ändere den Themen- oder Fehlerfilter.</p><button className="primary" onClick={() => {setOnlyErrors(false);setTopic('Alle');}}>Alle Fragen anzeigen</button></section>}
    <section className="navigator"><div className="navHead"><strong>Fragenübersicht</strong><span>Nummer auswählen, um zur Frage zu springen.</span></div>
     <div className="numberGrid">{pool.map((q,i) => <button key={q.id} title={q.topic+' · Frage '+q.number} className={(safeIndex===i?'current ':'')+(answers[q.id]?.checked?'done ':'')+(Number.isInteger(answers[q.id]?.choice)&&!answers[q.id]?.checked?'answered ':'')} onClick={() => {setIndex(i);setResultView(false);}}>{catalog==='all'?(q.type==='hk'?'H':q.type==='jan'?'J':'N')+q.number:q.number}</button>)}</div>
    </section>
    <footer>Qualitätsmanagement · 12 Module · 2 überarbeitete Altklausuren + 40 neue Fragen · Single Choice · Speicherung nur in deinem Browser · Keine offiziellen Klausurlösungen</footer>
   </main>
  </div>
 </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
