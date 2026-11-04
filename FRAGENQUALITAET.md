# Qualitätsregeln für Single-Choice-Fragen (QM)

Die drei Altklausur-/Probeklausurkataloge werden unverändert belassen. Diese Regeln gelten für die 180 Kapitelfragen in `src/qmModule1.js` bis `src/qmModule12.js`.

1. **Fachnahe Optionen:** Alle vier Antworten müssen zum Begriff, Modell oder Anwendungsfall passen. Fehler sollen durch Verwechslungen zwischen fachlich verwandten Konzepten entstehen, nicht durch fachfremde Nonsensantworten.
2. **Eine richtige Antwort:** Die Frage muss so präzise gestellt sein, dass nur eine der vier Aussagen im Kontext der Vorlesungsunterlagen zutrifft. Besonders bei Normen, Auditarten und EFQM-Kriterien auf Mehrdeutigkeit achten.
3. **Gleiches Antwortformat:** Richtige und falsche Optionen sollen vergleichbar lang und grammatikalisch parallel sein. Ein einzelner Fachbegriff darf nicht drei langen Erläuterungen gegenüberstehen.
4. **Keine verräterischen Signalwörter:** Optionen wie 'immer', 'nie' oder 'ausschließlich' nur verwenden, wenn diese Absolutheit fachlich wirklich geprüft werden soll; nicht drei offensichtliche Absoluta gegen eine vorsichtige richtige Aussage stellen.
5. **Plausible Rechenfehler:** Alternative Ergebnisse durch typische Verwechslungen von %, ppm, σ, Mittelwert, Cpk, NPS und RPZ bilden. Ergebniswerte konsistent als Zahl mit gleicher Einheit darstellen.
6. **Konkreter Folienbezug:** Die bestehenden Quellenangaben `M<number>, Folie <number>` und kurze Lösungen erhalten. Keine erfundenen Normvorgaben oder Grenzwerte hinzufügen.
7. **Vorlesungsspezifische Konflikte:** Die 8D-Folie M12/56 zeigt D1 als Problembeschreibung und D2 als Teambildung. Fragen nach der konkreten Folie müssen dies transparent benennen; die verbreitete andere Reihenfolge nicht verheimlichen.
8. **Technische Prüfung:** `npm run test` überprüft 290 eindeutige Fragen, Antwortindizes, Antwort-Shuffle und grobe formale Hinweise auf auffällige Distraktoren. Der Vite-Build wird separat über `npm run build` geprüft.

**Grenze der Tests:** Programmatische Prüfungen können nicht feststellen, ob ein Distraktor in einem bestimmten Sachverhalt versehentlich ebenfalls wahr ist. Dafür ist eine fachliche Einzelprüfung erforderlich.
