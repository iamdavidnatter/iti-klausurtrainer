import {originalAlternativeDetails} from './originalDetails.js';
import {theoryDetails12} from './theoryDetails12.js';
import {theoryDetails34} from './theoryDetails34.js';
import {practicalDetails} from './practicalDetails.js';

// Originalfragen werden über den tatsächlichen Antwortindex angesprochen.
// Bei den neuen und den Praxisfragen sind die drei falschen Alternativen
// in der Reihenfolge ihres Erscheinens hinterlegt, unabhängig von A/B/C/D.
const allDetails = {...originalAlternativeDetails,...theoryDetails12,...theoryDetails34,...practicalDetails};

export function getIncorrectExplanation(question, answerIndex) {
  if (!question || answerIndex === question.correct) return null;
  const record = allDetails[question.id];
  const wrongIndices = question.a.map((_,i)=>i).filter(i=>i!==question.correct);
  const detail = Array.isArray(record)
    ? record[wrongIndices.indexOf(answerIndex)]
    : record?.[answerIndex];
  if (!detail || detail.length !== 2) {
    return {why:'Für diese Alternative fehlt eine geprüfte Erklärung.',when:'Bitte die fachliche Zuordnung prüfen.'};
  }
  return {why:detail[0],when:detail[1]};
}
