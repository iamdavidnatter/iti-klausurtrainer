# Qualitätsmanagement – Klausurtrainer

React/Vite-Lernapp auf Basis des bisherigen ITI-Trainers, jetzt für alle zwölf Module der Lehrveranstaltung Qualitätsmanagement.

## Fragekataloge

| Katalog | Anzahl | Status |
|---|---:|---|
| Altklausur vom 16.01.2025 | 40 | Fachlich geprüft und korrigiert |
| Altklausur vom 31.01.2025 | 30 | Fachlich geprüft und korrigiert |
| Neue Probeklausur | 40 | Neu erstellt, deckt alle 12 Module ab |
| **Gesamt** | **110** | Je vier Optionen und ein richtiger Lösungsindex |

Die Altklausuren wurden inhaltlich überarbeitet, sind also keine unveränderten Abschriften. Mehrdeutige Antwortmöglichkeiten und fehlerhafte Markierungen wurden berichtigt. Ein offizieller Lösungsschlüssel wurde nicht bereitgestellt. Details stehen in KORREKTUREN.md.

## Funktionen

- Lernmodus: Sofortiges Feedback mit Musterlösung, kurzer Erklärung und Modulbezug.
- Prüfungsmodus: Erst nach der Abgabe werden Lösungen angezeigt. Antworten bleiben bis zur Abgabe veränderbar, fehlende Antworten sind falsch.
- Drei getrennte Kataloge plus Gesamtmodus, Themenfilter und Fehlerfilter.
- Lokaler Lernfortschritt im Browser, getrennt von alten ITI-Daten.
- Bestehensgrenze aus den Vorlesungsfolien: **über 50 %**, d. h. mindestens 21/40 bzw. 16/30.

## Befehle

    npm install
    npm run test
    npm run dev
    npm run build

## Deployment

Die bisherige Render-Konfiguration kann unverändert weiterbenutzt werden: statisches Vite-Build, Veröffentlichung aus dist. Ein vorhandener Render-Dienst wird dadurch nicht automatisch umbenannt. Änderungen können zuerst über einen Pull-Request-Preview getestet werden.

## Wichtige Dateien

- src/qmHkQuestions.js: Altklausur 16.01.2025
- src/qmJanQuestions.js: Altklausur 31.01.2025
- src/qmNewQuestions.js: neue Probeklausur
- src/main.jsx: Trainer-Oberfläche mit Lern- und Prüfungsmodus
- src/qm.css: responsive Anpassungen
- scripts/validate-questions.mjs: automatische Validierung
- .github/workflows/qm-check.yml: CI für Tests und Vite-Build
- KORREKTUREN.md: fachliche Korrekturen der Altklausuren

Die älteren ITI-Quelldateien sind weiterhin im Repository, werden aber von der QM-Oberfläche nicht importiert. Automatische Tests belegen Struktur und Konsistenz, nicht die amtliche Richtigkeit von Antworten.
