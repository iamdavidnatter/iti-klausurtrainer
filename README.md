# IT-Infrastructure-Management Klausurtrainer

Deploybare React/Vite-Lernapp mit 47 Originalfragen (als unveränderte Screenshot-Ausschnitte), 33 neuen Übungsfragen, lokalem Lernfortschritt, Lernmodus, Prüfungssimulation und Fehlerfilter.

## Herkunft der Originalfragen
Die bereitgestellte PDF `HK_ITI-2025.pdf` enthält Original-Screenshots zu den Klausurfragen **2 bis 48**. Frage 1 war in der Datei nicht enthalten und wurde nicht nachgebaut. Die Texte und Antwortmöglichkeiten der Originalfragen werden **als Bild** angezeigt, damit keine irrtümliche Umformulierung passiert.

Die PDF enthält **keinen offiziellen Lösungsschlüssel**. Die hinterlegten Lösungen zu 35 Originalfragen sind aus dem Lehrstoff abgeleitet und ausdrücklich als nicht offiziell markiert; die übrigen 12 werden ohne automatische Richtig/Falsch-Bewertung angezeigt. Die 33 zusätzlichen Übungsfragen sind eigens formuliert.

## Lokal starten
```bash
npm install
npm run dev
```

## Auf Render.com veröffentlichen
1. Dieses Projekt als GitHub-Repository hochladen (alle Dateien aus dem Ordner).
2. Render öffnen → **New → Static Site** (oder `New → Blueprint` für `render.yaml`).
3. GitHub-Repository auswählen.
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Deploy durchführen.

Die App benötigt **keine Datenbank**, **keinen API-Key** und **kein kostenpflichtiges Backend**. Lernfortschritt wird im Browser per localStorage gespeichert, nicht geräteübergreifend synchronisiert.

## Aufbau
- `src/questions.js` — Lösungen (als erschlossene Hinweise gekennzeichnet) und neue Übungsfragen
- `public/exam/` — Original-Screenshot-Ausschnitte von Frage 2–48
- `src/main.jsx` — Interaktive Lernoberfläche
- `render.yaml` — Render Static Site Blueprint


## Stand: 80 Fragen
47 Original-Altklausurfragen als unveränderte Bildausschnitte (Nr. 2–48; Nr. 1 fehlt in der bereitgestellten PDF) und 33 neue Lernfragen aus den vier Modulen. Es liegt kein offizieller Lösungsschlüssel zur Altklausur bei; die automatisch bewertbaren Altklausurantworten sind als aus den Lernfolien erschlossen zu verstehen.
