# Qualitätsmanagement – Klausurtrainer

React/Vite-Lernapp auf Basis des bisherigen ITI-Trainers, jetzt für alle zwölf Module der Lehrveranstaltung Qualitätsmanagement.

## Fragekataloge

| Katalog | Anzahl | Status |
|---|---:|---|
| Altklausur vom 16.01.2025 | 40 | Fachlich geprüft und korrigiert |
| Altklausur vom 31.01.2025 | 30 | Fachlich geprüft und korrigiert |
| Neue Probeklausur | 40 | Neu erstellt, deckt alle 12 Module ab |
| Kapitel 1–10 | 116 | Zehn eigene Lernkataloge (8–16 Fragen je Kapitel) |
| Kapitel 11 – Statistik | 28 | Begriffe, Wahrscheinlichkeiten, Regelkarten, Rechnungen |
| Kapitel 12 – Werkzeuge | 36 | FMEA, Poka-Yoke, Kreativitätstechniken, Audits |
| **Gesamt** | **290** | Je vier Optionen und eine richtige Antwort |

Die Altklausuren wurden inhaltlich überarbeitet, sind also keine unveränderten Abschriften. Mehrdeutige Antwortmöglichkeiten und fehlerhafte Markierungen wurden berichtigt. Ein offizieller Lösungsschlüssel wurde nicht bereitgestellt. Details stehen in KORREKTUREN.md.

## Funktionen

- Lernmodus: Sofortiges Feedback mit Musterlösung, kurzer Erklärung und Modulbezug.
- Prüfungsmodus: Erst nach der Abgabe werden Lösungen angezeigt. Antworten bleiben bis zur Abgabe veränderbar, fehlende Antworten sind falsch.
- Drei Prüfungskataloge, **zwölf eigene Kapitelkataloge** und Gesamtmodus.
- Kapitelkataloge mit insgesamt **180 neuen, quellenbezogenen Fragen**; Antwortpositionen werden stabil und reproduzierbar gemischt.
- Themenfilter für gemischte Kataloge und Fehlerfilter nach Beantwortung.
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
- src/qmModule1.js bis src/qmModule12.js: kapitelweise Fragen mit Folienbezug
- src/qmModuleCatalogs.js: Kapitel-Metadaten, aggregierter Katalog und Antwortdurchmischung
- src/main.jsx: Trainer-Oberfläche mit Lern- und Prüfungsmodus
- src/qm.css: responsive Anpassungen
- scripts/validate-questions.mjs: automatische Validierung
- .github/workflows/qm-check.yml: CI für Tests und Vite-Build
- KORREKTUREN.md: fachliche Korrekturen der Altklausuren

Die älteren ITI-Quelldateien sind weiterhin im Repository, werden aber von der QM-Oberfläche nicht importiert. Automatische Tests belegen Struktur und Konsistenz, nicht die amtliche Richtigkeit von Antworten.
