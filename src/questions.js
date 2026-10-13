// Altklausur: Fragen 2–48 aus den Screenshots transkribiert; keine offiziell bestätigte Musterlösung.
// Antwortentscheidungen und Begründungen sind anhand der Vortragsfolien selbst hergeleitet.
export const oldQuestions = [
  {
    "id": "old-2",
    "number": 2,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Nachteil von \"Software Defined Networking\":",
    "a": [
      "Höhere Abhängigkeit von Hardware-Herstellern",
      "Höhere Hardware- und Betriebskosten",
      "Erzeugung eines Single Point of Failure durch die Control Plane",
      "Steigender Wartungs- und Verwaltungsaufwand für das gesamte Netzwerk"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die zentralisierte Control Plane kann ohne redundante Controller einen Single Point of Failure bilden.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-3",
    "number": 3,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die RAID-Level bei denen zumindest 4 Disken benötigt werden:",
    "a": [
      "RAID 5 und RAID 6",
      "RAID 5 und RAID 10",
      "RAID 0 und RAID 1",
      "RAID 6 und RAID 10"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "RAID 6 benötigt mindestens vier Datenträger; RAID 10 benötigt mindestens zwei Spiegelpaare, also vier Datenträger.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-4",
    "number": 4,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie das Protokoll, welches als Basis von SAS genutzt wird:",
    "a": [
      "Integrated Disc Electronics",
      "Fibre Channel",
      "Advanced Technology Attachement",
      "Small Computer System Interface"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "SAS steht für Serial Attached SCSI und verwendet das SCSI-Protokoll.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-5",
    "number": 5,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die FALSCHE Aussage für die Kühlung mittels vertikaler Unterbodenverteilung:",
    "a": [
      "Gekühlte Zuluft wird via Doppelboden in die Kaltgänge eingeblasen",
      "Einheitliche Temperaturgradienten innerhalb der Racks",
      "Warme Luft steigt auf und wird von der Kühlung angesaugt",
      "Konstruktion nach dem Warm- und Kaltgangkonzept nötig"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Einheitliche Temperaturgradienten in allen Racks sind durch die reine vertikale Unterbodenverteilung nicht gewährleistet.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-6",
    "number": 6,
    "type": "old",
    "topic": "Altklausur",
    "q": "In einem Serversystem wurden 7 Festplatten eingebaut. Um die Verfügbarkeit der Daten zu gewähren, wird ein Disksubsystem konfiguriert. Relevante Kriterien dabei sind die Herstellung eines sehr hohen Sicherheitsniveaus, die Wiederherstellung nach Ausfall von bis zu zwei Festplatten. Die Performance-Anforderungen an das Disksubsystem sind als moderat anzusehen. Wählen Sie das ideale RAID Level:",
    "a": [
      "RAID 1",
      "RAID 5",
      "RAID 6",
      "RAID 0"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "RAID 6 kann den gleichzeitigen Ausfall von zwei Festplatten tolerieren.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-7",
    "number": 7,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die FALSCHE Begründung für den Einsatz von Applikationsvirtualisierung:",
    "a": [
      "Nahtlose Integration von Software Rollout Tools (wie System Center)",
      "Betrieb inkompatibler Softwarestände in einer Umgebung",
      "Komplexes Fallback-Szenario bei Softwarefehlern",
      "Effizientes Lifecycle-Management von 24x7 Applikationen"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Komplexe Fallback-Szenarien sind kein Vorteil beziehungsweise keine sinnvolle Begründung für Applikationsvirtualisierung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-8",
    "number": 8,
    "type": "old",
    "topic": "Altklausur",
    "q": "Sie wurden von der Unternehmensleitung beauftragt eine cloud-basierte Lösung zu finden mit der es Ihnen möglich ist, eine schnelle Bereitstellung von Applikationen zu gewährleisten. Der Betrieb bis zur Virtualisierungsebene soll durch den Cloud-Anbieter erfolgen. Wählen Sie das für die Anforderung geeignete Cloud Servicemodell:",
    "a": [
      "Software as a Service",
      "Platform as a Service",
      "Infrastructure as a Service",
      "Hosting"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "PaaS ermöglicht die Bereitstellung eigener Applikationen; die zugrunde liegende Plattform wird vom Anbieter betrieben.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-9",
    "number": 9,
    "type": "old",
    "topic": "Altklausur",
    "q": "Eine IT-Abteilung legt besonderen Wert auf den Einsatz von vielen Sicherheitsfeatures in deren virtueller Umgebung. Ein Administrator erklärt den aktuellen Prozess eines Ihrer wichtigsten Features: \"Wir legen besonderen Wert auf Green-IT. Das bedeutet für uns, dass wir Energie sparen möchten. Zu diesem Zweck werden Nachts nicht benötigte Server abgeschaltet und zuvor die virtuellen Maschinen entsprechend auf andere virtuelle Hosts verschoben.\" Wählen die das entsprechende Sicherheitsfeature:",
    "a": [
      "Storage vMotion",
      "High Availability",
      "Dynamic Ressource Sheduler",
      "Distributed Power Management"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "DPM reduziert den Energieverbrauch durch Konsolidierung von VMs und Abschalten nicht benötigter Hosts.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-10",
    "number": 10,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Kennzahl, die die durchschnittliche Zeit zwischen zwei Fehlern einer Komponente darstellt:",
    "a": [
      "MTBR",
      "MTTR",
      "MTBF",
      "MTTF"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "MTBF ist die durchschnittliche Zeit zwischen zwei Ausfällen.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-11",
    "number": 11,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Microsoft Lizenzberater diskutiert mit einem Kunden über die Dokumentation der Nutzungsrechte von Einzelplatzlizenzierung und Volumenlizenzen. Wählen Sie das Dokument in dem die Nutzungsrechte von Volumenlizenzprogrammen enthalten sind:",
    "a": [
      "Products and Services Agreement",
      "Enterprise Agreement",
      "Produktbestimmungen",
      "Lizenzbestimmungen"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Bei Microsoft-Volumenlizenzverträgen regeln die Produktbestimmungen die konkreten Nutzungsrechte.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-12",
    "number": 12,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die NetApp Redundanztechnologie bei der die Recovery Point Objective und die Recovery Point Objective gleich Null sind:",
    "a": [
      "MetroCluster",
      "SnapMirror",
      "Snapshot",
      "SnapVault"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "MetroCluster wird in den Vortragsfolien als standortübergreifende Redundanzlösung mit synchroner Spiegelung und sehr kurzen Wiederanlaufzielen behandelt. Die Frage nennt versehentlich zweimal RPO.",
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau"
  },
  {
    "id": "old-13",
    "number": 13,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Bildungsanbieter stellt eine virtuelle IT-Umgebung bereit, in der sich alle Studierenden von zu Hause aus auf eine Windows Desktop-Oberfläche verbinden können und damit jegliche Programme der Bildungseinrichtung nutzen können, ohne diese auf ihren privaten Endgeräten installieren zu müssen. Wählen Sie nur die betrachtete Virtualisierungsebene:",
    "a": [
      "Betriebssystemvirtualisierung",
      "Applikationsvirtualisierung",
      "Sessionvirtualisierung",
      "Hardwarevirtualisierung"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein zentral bereitgestellter Windows-Desktop, auf den Nutzer über eine Sitzung zugreifen, ist Sessionvirtualisierung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-14",
    "number": 14,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Unternehmen mit 25 Arbeitsplätzen möchte mit Microsoft einen Volumenlizenzvertrag abschließen. Dabei wird von der IT eine Vollstandardisierung und eine Softwarewartung gewünscht. Wählen Sie den optimalen anwendbaren Lizenzvertrag:",
    "a": [
      "Open License",
      "Open Value",
      "Enterprise Agreement",
      "Open Value Companywide"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Open Value Companywide ist das in den Folien passende Modell für kleine Unternehmen mit Vollstandardisierung und Softwarewartung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-15",
    "number": 15,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Kunde wünscht den Einsatz von Deduplizierung bei der Sicherung aller virtuellen Maschinen. Dies begründet sich in der Annahme, dass alle auf Windows Server Betriebssystem basieren und daher viele gleiche Daten beinhalten. Die Netzwerkverbindungen zum Backupserver ist mit 100 Mbit/s unterdimensioniert. Wählen Sie die ideale Deduplizierungsvariante:",
    "a": [
      "Dateibasiert, Server-Side",
      "Dateibasiert, Client-Side",
      "Blockbasiert, Server-Side",
      "Blockbasiert, Client-Side"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Blockbasierte Client-Side-Deduplizierung erkennt gleiche Blöcke vor dem Transfer und entlastet die langsame Netzwerkverbindung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-16",
    "number": 16,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die optimale Definition eines Rechenzentrums:",
    "a": [
      "Ein Rechenzentrum ist eine technische Einheit, die Rechen- und Serviceleistungen verteilt anbietet und über leistungsfähige IT-Systeme verfügt.",
      "Ein Rechenzentrum ist eine organisatorische Einheit, die Rechen- und Serviceleistungen zentralisiert anbietet und über leistungsfähige IT-Systeme verfügt.",
      "Ein Rechenzentrum ist eine technische Einheit, die Rechen- und Serviceleistungen zentralisiert anbietet und über leistungsfähige IT-Systeme verfügt.",
      "Ein Rechenzentrum ist eine organisatorische Einheit, die Rechen- und Serviceleistungen verteilt anbietet und über leistungsfähige IT-Systeme verfügt."
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein Rechenzentrum ist laut Modul 1 eine organisatorische Einheit mit zentraler Bereitstellung von Rechen- und Serviceleistungen.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-17",
    "number": 17,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Hersteller eines Hypervisors propagiert in einer Werbeveranstaltung die Sicherheitsfeatures, welche im virtuellen Betrieb verfügbar sind. Insbesondere wird auf hochverfügbare Betriebsführung eingegangen. Als nachteilig wird dabei jedoch der doppelte Arbeitsspeicherbedarf jeweils einer virtuellen Maschine auf verschiedenen virtuellen Hosts herausgestrichen. Wählen die das Sicherheitsfeature des Herstellers:",
    "a": [
      "Distributed Resources Scheduler",
      "Fault Tolerance",
      "vMotion",
      "High Availability"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Fault Tolerance hält eine zweite laufende Instanz bereit und verursacht damit einen zusätzlichen Ressourcenbedarf.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-18",
    "number": 18,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein neues Hochleistungsserversystem muss mit lokalen Festplatten ausgestattet werden. Dazu werden zwei Festplatten mit je 1 TB Kapazität benötigt, welche einen schnellen Zugriff des Serversystems ermöglichen. Wählen Sie die entsprechende Übertragungstechnik:",
    "a": [
      "SATA",
      "SAS",
      "SCSI",
      "ATA"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "SAS ist laut Modul 2 für performante lokale Serverlaufwerke ausgelegt.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-19",
    "number": 19,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Storagetyp, der kostengünstig angeschafft und durch die kurze Distanz zum Host auch ideal um Caching eingesetzt werden kann:",
    "a": [
      "Storage Area Network",
      "Network Attached Storage",
      "Direct Attached Storage"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "DAS bietet kurze Zugriffswege, niedrige Kosten und ist für lokales Caching geeignet.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-20",
    "number": 20,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Faktor, der für eine physische Umgebung spricht:",
    "a": [
      "Viele Sicherheitsfeatures",
      "Dynamische Optimierung im Betrieb",
      "Einfachere Lizensierung",
      "Plattformunabhängiger Betrieb"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Eine physische Umgebung kann hinsichtlich bestimmter Lizenzierungsmodelle einfacher sein; die anderen Optionen sprechen eher für Virtualisierung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-21",
    "number": 21,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die FALSCHE Aussage zu \"Software Defined Storage\":",
    "a": [
      "SDS abstrahiert die Storage Hardware",
      "SDS ist eine Storagearchitektur",
      "SDS bedeutet Storagevirtualisierung",
      "SDS bedeutet Unabhängigkeit von der Hardware"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die Folien stellen ausdrücklich klar: SDS ist nicht dasselbe wie Storage-Virtualisierung; letztere ist die Grundlage dafür.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-22",
    "number": 22,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Nachteil einer Hyperconverged Infrastruktur:",
    "a": [
      "Hohe Kosten aufgrund des konsolidierten Betriebs",
      "Geringere Agilität bei der Reaktion auf neue Anforderungen",
      "Komplexerer Betrieb",
      "Kein Mischbetrieb möglich"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Bei Hyperconverged Infrastructure wird eingeschränkter Mischbetrieb ausdrücklich als Nachteil genannt.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-23",
    "number": 23,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Komponenten, welche die Servicemodelle \"IaaS\" und \"PaaS\" differenzieren:",
    "a": [
      "Virtualization, Operating System",
      "Databases, Application",
      "Operating System, Databases",
      "Physical Servers, Virtualization"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Im dargestellten Servicemodell unterscheiden sich IaaS und PaaS vor allem bei Betriebssystem und verwalteten Datenbankdiensten. Die exakte Grenze hängt vom Dienst ab.",
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau"
  },
  {
    "id": "old-24",
    "number": 24,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Vorteil einer Multi-Cloud Lösung:",
    "a": [
      "Einheitliches Datenschutz- und Datensicherheitskonzept",
      "Einfache Verwaltung und Abrechnung",
      "Kein Lock-In Effekt",
      "Geringe Komplexität"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Multi-Cloud kann die Bindung an einen einzigen Anbieter reduzieren; vollständig ausgeschlossen ist Lock-in in der Praxis nicht.",
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau"
  },
  {
    "id": "old-25",
    "number": 25,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Vorteil einer differenziellen Sicherung:",
    "a": [
      "Medienset beinhaltet die vollständige Datenmenge",
      "Geringer Datenzuwachs, da nur Differenzen zur letzten Sicherung gespeichert werden",
      "Schnelle Wiederherstellung, da nur 2 Mediensets benötigt werden",
      "Kurze Laufzeiten, da nur Differenzen zur letzten Sicherung gespeichert werden"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Bei differenziellen Sicherungen genügen die letzte Vollsicherung und das letzte Differenzial-Backup für einen Restore.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-26",
    "number": 26,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den FALSCHEN Faktor für die allgemeine Kategorisierung von Rechenzentren:",
    "a": [
      "Energieverbrauch",
      "Raumfläche",
      "Anzahl der Systeme",
      "Geografische Lage"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die grundlegende Rechenzentrumskategorisierung erfolgt unter anderem nach Fläche, Systemanzahl und Energiebedarf, nicht primär nach geografischer Lage.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-27",
    "number": 27,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Definition von Fibre Channel:",
    "a": [
      "Fibre Channel ist ein optischer Übertragungskanal",
      "Fibre Channel ist ein auf dem ISO/OSI Modell basierendes Protokoll",
      "Fibre Channel ist ein Standardprotokoll für Speichernetze",
      "Fibre Channel ist ein Datenkanal für Lichtwellenleiter"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Fibre Channel ist ein standardisiertes Protokoll für Speichernetzwerke.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-28",
    "number": 28,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den größten Vorteil eines Tower-Servers:",
    "a": [
      "Verdichtete Bauweise",
      "Redundante Lüfter",
      "Einheitliches Remote-Management",
      "Einfache Aufstellung"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Towerserver können meist ohne speziellen Serverschrank unkompliziert aufgestellt werden.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-29",
    "number": 29,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Ebene in der Speicherpyramide in der typischerweise Tape-Medien eingesetzt werden:",
    "a": [
      "Performance Ebene",
      "Kapazitäts Ebene",
      "Archiv Ebene"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Tape ist aufgrund seines Kosten-/Kapazitätsverhältnisses für die Archivebene geeignet.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-30",
    "number": 30,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Rechenzentrum muss in einer bestehenden, ehemaligen Lagerhalle neu errichtet werden. Im Zuge der Planungsphase wird festgestellt, dass die Raumhöhe für die vorhandenen Racks und entsprechende Kabelführungen an der Decke nur knapp bemessen ist. Daher entschließt sich der Planer keinen Doppelboden zu errichten. Wählen Sie das dafür geeignete optimale Kühlkonzept:",
    "a": [
      "Optimierte vertikale Unterbodenverteilung",
      "Vertikale Unterbodenverteilung",
      "Kühlung durch geöffnete Fenster",
      "Vertikaler Deckenkanal"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein Deckenkanal erlaubt Luftführung ohne Doppelboden.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-31",
    "number": 31,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Unternehmen mit 810 Arbeitsplätzen möchte mit Microsoft einen Volumenlizenzvertrag abschließen. Dabei wird von der IT eine Vollstandardisierung und eine Softwarewartung gewünscht. Wählen Sie den optimalen anwendbaren Lizenzvertrag:",
    "a": [
      "Products and Services Agreement",
      "Open License",
      "Enterprise Agreement",
      "Open Value Companywide"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Für große Unternehmen mit Vollstandardisierung und Software Assurance nennt die Unterlage das Enterprise Agreement.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-32",
    "number": 32,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die \"strategische\" Chance der Cloud Nutzung:",
    "a": [
      "Zugang zu State of the Art Technologie",
      "Reduktion der Investitionskosten in eigene IT-Infrastruktur",
      "Reduzierter Administrations- und Wartungsaufwand",
      "Schnelle Skalierung der IT-Infrastruktur"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Zugang zu modernen Technologien ist eine strategische Cloud-Chance; die anderen Antworten betreffen finanzielle und operative Aspekte.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-33",
    "number": 33,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Bildungsunternehmen plant sein Backup neu zu konzipieren. Die zu sichernden Datenmengen sind sehr hoch. Die Sicherung soll 4-mal täglich durchgeführt werden und der Datenzuwachs soll so gering wie möglich gehalten werden. Eine vollständige Sicherung benötigt ein Backupfenster von 11 Stunden. Wählen Sie die ideale regelmäßige Sicherungsart:",
    "a": [
      "Vollständig",
      "Synthetisch",
      "Inkrementell",
      "Differenziell"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Mehrmals täglich erforderliche kleine Änderungsbackups sprechen für inkrementelle Sicherung.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-34",
    "number": 34,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Pharmakonzern betreibt seine IT-Infrastruktur aus Compliance Gründen in einer Private Cloud in den internen Rechenzentren. Um Lastspitzen auszugleichen, greift das Unternehmen für sehr rechenintensive Big Data Analysen auf Services einer Public Cloud zurück. Wählen Sie das Cloud Bereitstellungmodell, das das Unternehmen dadurch verwendet:",
    "a": [
      "Hybrid Cloud",
      "Multi Cloud",
      "Selective Cloud",
      "Community Cloud"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die Kombination aus interner Private Cloud und externer Public Cloud ist Hybrid Cloud.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-35",
    "number": 35,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Bauunternehmen beschließt die Storage Systeme zu erneuern. Die Anforderungen der Geschäftsführung sind eine einfache Datenablage mit geringen Kosten. Aufgrund des Ausfalls eines bestehenden Storage-Controllers wurde gebeten diesen jedoch redundant auszuführen. Die Verkabelung innerhalb der Storagekomponenten kann so einfach wie möglich erfolgen. Wählen Sie die ideale Redundanzform des Storagesystems:",
    "a": [
      "Double Loop",
      "Standard Cluster",
      "Metro Cluster",
      "Single Loop"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein Standard Cluster kombiniert zwei Controller für Redundanz ohne die standortübergreifende Komplexität eines MetroClusters.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-36",
    "number": 36,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Kennzahl, die den Zeitraum des Datenverlustes rückblickend von einem Desaster repräsentiert:",
    "a": [
      "Recovery Time Objective",
      "Mean-Time to Recovery",
      "Recovery Point Objective",
      "Mean-Time to Desaster"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "RPO ist die zeitliche Grenze des tolerierbaren Datenverlusts rückblickend vom Ausfall.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-37",
    "number": 37,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Infrastructure Ansatz, bei dem die Komponenten (Computing, Storage und Netzwerk) in kombinierter Form ausgestaltet sind:",
    "a": [
      "Hyperconverged Infrastructure",
      "Traditional Infrastructure",
      "Cloud Infrastructure",
      "Converged Infrastructure"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Converged Infrastructure fasst Computing-, Storage- und Netzwerkkomponenten in einer kombinierten Infrastruktur zusammen.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-38",
    "number": 38,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die richtige Aussage zu \"Software Defined Networking\":",
    "a": [
      "Control Plane ist für den ordnungsgemäßen Datenverkehr zuständig",
      "Abstraktion der in der Hardware implementierten Datenschicht",
      "Fusion von Infrastruktur und deren Konfiguration",
      "Paketweiterleitung findet Destination-Based statt"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die Control Plane ist für Entscheidungen über die Steuerung des Datenverkehrs zuständig; die Data Plane leitet Pakete weiter.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-39",
    "number": 39,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie den Nachteil eines Direct Attached Storages:",
    "a": [
      "Hoher Hardwareaufwand",
      "Lange Laufzeiten",
      "Nur Scale-Up realisierbar",
      "Zusätzlicher Protokollaufwand"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "DAS ist typischerweise auf Scale-up-Erweiterungen begrenzt.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-40",
    "number": 40,
    "type": "old",
    "topic": "Altklausur",
    "q": "Die automatisierte, schnelle und bedarfsgerechte Auslieferung von Kapazitäten ist im Cloud Computing von großer Relevanz. Wählen Sie die beschriebene Eigenschaft:",
    "a": [
      "Measured Service",
      "Rapid Elasticity",
      "On-Demand Self Service",
      "Broad Network Access"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Rapid Elasticity bedeutet schnelles bedarfsgerechtes Hoch- und Herunterskalieren von Ressourcen.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-41",
    "number": 41,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie das Equipment eines Rechenzentrums, welches primär zum Zwischenspeichern von Kälteenergie dient:",
    "a": [
      "Kaltwassertank",
      "Notstromaggregat",
      "Kältemaschine",
      "Batterien"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein Kaltwassertank speichert Kälteenergie; eine Kältemaschine erzeugt Kälte.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-42",
    "number": 42,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Funktionalität von RAID 0:",
    "a": [
      "Vollständige Redundanz",
      "Hohe Performance",
      "Hohe Write Penalty",
      "Doppelte Festplattenkapazität"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "RAID 0 verteilt Datenblöcke über mehrere Disks und kann dadurch die Performance erhöhen, bietet aber keine Redundanz.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-43",
    "number": 43,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein Forschungsunternehmen setzt besonderen Wert auf Sicherheit und möchte diesbezüglich eine Videoüberwachung mittels TCP/IP einführen. Die IT-Abteilung hat entschieden dafür ein preiswertes Tier 2/3 Storage einzusetzen, um die Überwachungsdaten ein Monat aufzubewahren und von mehreren Computern aus direkt zugänglich zu machen. Wählen Sie den idealen Storagetyp:",
    "a": [
      "Direct Attached Storage",
      "Storage Area Network",
      "Network Attached Storage"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "NAS ist für gemeinsame Dateizugriffe von mehreren Clients über ein LAN geeignet.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-44",
    "number": 44,
    "type": "old",
    "topic": "Altklausur",
    "q": "Zwei IT-Administratoren diskutieren über die Aufteilung von physischen Ressourcen bei einer Betriebssystem-Virtualisierung. Am Ende sind Sie sich einig, dass eine explizite Zuordnung von Teilen der Hardware (z.B. Prozessor oder Arbeitsspeicher) des Hosts durch den Hypervisor erfolgt. Wählen Sie die besprochene Funktion von virtuellen Maschinen:",
    "a": [
      "Hardwareunabhängigkeit",
      "Isolierung",
      "Einkapselung",
      "Partitionierung"
    ],
    "correct": 3,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Partitionierung bezeichnet die Aufteilung physischer Ressourcen eines Hosts auf mehrere VMs.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-45",
    "number": 45,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Softwarekomponente, die mittels Applikationsvirtualisierung implementierbar ist:",
    "a": [
      "Endpoint Protection",
      "Microsoft Office Plug-Ins",
      "Druckertreiber",
      "Windows Hotfixes"
    ],
    "correct": 1,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Office-Plug-ins können im Kontext der dargestellten Applikationsvirtualisierung paketiert werden; Treiber und Windows-Hotfixes nicht.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-46",
    "number": 46,
    "type": "old",
    "topic": "Altklausur",
    "q": "Ein IT-Berater erstellt eine Backupstrategie für seinen Kunden. Die Anforderungen dabei sind die Erstellung von täglichen Backupsets. Die täglichen Backups müssen eine Woche, die wöchentlichen ein Monat und die monatlichen ein Jahr aufbewahrt werden. Wählen Sie die Sicherungsstrategie:",
    "a": [
      "First In - Last Out",
      "First In - First Out",
      "Grandfather - Father - Son",
      "Türme von Hanoi"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Grandfather-Father-Son rotiert tägliche, wöchentliche und monatliche Backupgenerationen.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  },
  {
    "id": "old-47",
    "number": 47,
    "type": "old",
    "topic": "Altklausur",
    "q": "Wählen Sie die Sicherungsart, die auch als \"Incremental Forever\" bezeichnet wird:",
    "a": [
      "Differenziell",
      "Vollständig",
      "Synthetisch",
      "Inkrementell"
    ],
    "correct": 2,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Die Folien bezeichnen synthetische Sicherung ausdrücklich als Incremental Forever beziehungsweise Reverse-Deltas-Variante. Die Wortwahl ist etwas unscharf, da Incremental Forever auch eine inkrementelle Strategie bezeichnet.",
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau"
  },
  {
    "id": "old-48",
    "number": 48,
    "type": "old",
    "topic": "Altklausur",
    "q": "Die IT-Strategie eines Unternehmens besagt die vollständige Nutzung von Cloud-Services und keiner lokalen IT-Infrastruktur. Während der Umsetzung wird jedoch festgestellt, dass zumindest ein Druckserver (für die Abwicklung von Druckaufträgen) lokal in einem vorhandenen 19 Zoll Netzwerkschrank zu installieren ist. Wählen Sie dafür den optimalen Serverformfaktor:",
    "a": [
      "Rackserver",
      "Desktopserver",
      "Towerserver",
      "Bladeserver"
    ],
    "correct": 0,
    "source": "Schriftliche Klausur (1. Termin), 24.10.2025",
    "why": "Ein Rackserver passt in den vorhandenen 19-Zoll-Schrank.",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt"
  }
];

export const newQuestions = [
  {
    "id": "mod1-1",
    "number": 1,
    "type": "new",
    "topic": "Computing",
    "q": "Welche Aufgabe übernimmt eine USV in einem Rechenzentrum?",
    "a": [
      "Dauerhafte Stromerzeugung",
      "Regelung der Internetbandbreite",
      "Verschlüsselung sämtlicher Festplatten",
      "Überbrückung kurzfristiger Stromausfälle"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Überbrückung kurzfristiger Stromausfälle."
  },
  {
    "id": "mod1-2",
    "number": 2,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Schutzziel beschreibt die Zugriffsmöglichkeit nur für berechtigte Personen?",
    "a": [
      "Vertraulichkeit",
      "Integrität",
      "Verfügbarkeit",
      "Skalierbarkeit"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vertraulichkeit."
  },
  {
    "id": "mod1-3",
    "number": 3,
    "type": "new",
    "topic": "Computing",
    "q": "Was bezeichnet das Schutzziel Integrität?",
    "a": [
      "Hardware wird möglichst günstig beschafft",
      "Daten sind korrekt und vor unerlaubten Veränderungen geschützt",
      "Server sind jederzeit eingeschaltet",
      "Nur autorisierte Nutzer melden sich an"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Daten sind korrekt und vor unerlaubten Veränderungen geschützt."
  },
  {
    "id": "mod1-4",
    "number": 4,
    "type": "new",
    "topic": "Computing",
    "q": "Wozu dient ein Kaltgang in einem Rechenzentrum?",
    "a": [
      "Unterbringung der USV-Batterien",
      "Trennung des Internetzugangs",
      "Gezielte Versorgung der Servervorderseiten mit gekühlter Luft",
      "Ableitung warmer Luft über Servervorderseiten"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Gezielte Versorgung der Servervorderseiten mit gekühlter Luft."
  },
  {
    "id": "mod1-5",
    "number": 5,
    "type": "new",
    "topic": "Computing",
    "q": "Weshalb verwendet man Blindblenden in Racks?",
    "a": [
      "Um mehr Steckdosen zu erhalten",
      "Um die RAID-Kapazität zu erhöhen",
      "Um Softwarelizenzen zu sparen",
      "Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren."
  },
  {
    "id": "mod1-6",
    "number": 6,
    "type": "new",
    "topic": "Computing",
    "q": "Was kennzeichnet einen Rackserver?",
    "a": [
      "Montage in einem standardisierten Serverschrank",
      "Ausschließlich privater Desktop-Einsatz",
      "Betrieb ohne Stromversorgung",
      "Nur ein einzelner Prozessorkern"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Montage in einem standardisierten Serverschrank."
  },
  {
    "id": "mod1-7",
    "number": 7,
    "type": "new",
    "topic": "Computing",
    "q": "Was ist ein wesentlicher Vorteil eines Bladeservers?",
    "a": [
      "Keine zentrale Verwaltung möglich",
      "Hohe Packdichte und gemeinschaftlich nutzbare Infrastruktur",
      "Vollständige Unabhängigkeit von einem Chassis",
      "Immer niedrigste Anschaffungskosten"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Hohe Packdichte und gemeinschaftlich nutzbare Infrastruktur."
  },
  {
    "id": "mod1-8",
    "number": 8,
    "type": "new",
    "topic": "Computing",
    "q": "Welche Maßeinheit beschreibt die Einbauhöhe in einem Rack?",
    "a": [
      "Hertz (Hz)",
      "Gigabit pro Sekunde",
      "Höheneinheit (HE)",
      "Terabyte (TB)"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Höheneinheit (HE)."
  },
  {
    "id": "mod1-9",
    "number": 9,
    "type": "new",
    "topic": "Computing",
    "q": "Welcher Wert entspricht einer Höheneinheit?",
    "a": [
      "19 mm",
      "100 mm",
      "10 cm",
      "44,45 mm"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: 44,45 mm."
  },
  {
    "id": "mod1-10",
    "number": 10,
    "type": "new",
    "topic": "Computing",
    "q": "Wozu dient ein Hypervisor?",
    "a": [
      "Bereitstellung und Verwaltung virtueller Maschinen",
      "Archivierung abgelaufener Verträge",
      "Physische Gebäudekühlung",
      "Umsetzung von DNS-Namen"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Bereitstellung und Verwaltung virtueller Maschinen."
  },
  {
    "id": "mod1-11",
    "number": 11,
    "type": "new",
    "topic": "Computing",
    "q": "Welcher Vorteil kann durch Servervirtualisierung entstehen?",
    "a": [
      "Die physischen Stromkosten werden immer null",
      "Höhere Auslastung physischer Server",
      "Jede Anwendung benötigt zwingend neue Hardware",
      "Alle Backups entfallen"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Höhere Auslastung physischer Server."
  },
  {
    "id": "mod1-12",
    "number": 12,
    "type": "new",
    "topic": "Computing",
    "q": "Was bedeutet Partitionierung virtueller Maschinen?",
    "a": [
      "Jede VM benötigt eigenes Rechenzentrum",
      "Löschen aller Hardwaretreiber",
      "Mehrere virtuelle Systeme nutzen Ressourcen eines physischen Servers",
      "Daten werden immer auf Magnetband gespeichert"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Mehrere virtuelle Systeme nutzen Ressourcen eines physischen Servers."
  },
  {
    "id": "mod1-13",
    "number": 13,
    "type": "new",
    "topic": "Computing",
    "q": "Was bedeutet Isolierung in der Virtualisierung?",
    "a": [
      "Alle VMs verwenden zwingend dasselbe Betriebssystem",
      "Alle Gastdaten sind öffentlich",
      "Keine VM darf das Netzwerk verwenden",
      "Virtuelle Maschinen sind logisch voneinander getrennt"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Virtuelle Maschinen sind logisch voneinander getrennt."
  },
  {
    "id": "mod1-14",
    "number": 14,
    "type": "new",
    "topic": "Computing",
    "q": "Was beschreibt Einkapselung einer virtuellen Maschine?",
    "a": [
      "Der Zustand einer VM lässt sich als zusammengehörige virtuelle Einheit handhaben",
      "Die CPU wird physisch versiegelt",
      "Das LAN wird abgeschaltet",
      "Das Betriebssystem ist unlizenzierbar"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Der Zustand einer VM lässt sich als zusammengehörige virtuelle Einheit handhaben."
  },
  {
    "id": "mod1-15",
    "number": 15,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Feature ermöglicht das Verschieben einer laufenden VM zwischen Hosts?",
    "a": [
      "Open License",
      "vMotion",
      "RAID 0",
      "SnapVault"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: vMotion."
  },
  {
    "id": "mod1-16",
    "number": 16,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Feature verteilt virtuelle Maschinen anhand verfügbarer Ressourcen?",
    "a": [
      "Direct Attached Storage",
      "Disaster Recovery Point",
      "Distributed Resource Scheduler (DRS)",
      "Data Center Infrastructure Efficiency"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Distributed Resource Scheduler (DRS)."
  },
  {
    "id": "mod1-17",
    "number": 17,
    "type": "new",
    "topic": "Computing",
    "q": "Welche Aufgabe übernimmt VMware HA?",
    "a": [
      "Ausschließlich laufende Verschlüsselung der VM",
      "Automatische Lizenzkündigung",
      "Jede VM dauerhaft auszuschalten",
      "Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall."
  },
  {
    "id": "mod1-18",
    "number": 18,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Feature verfolgt das Ziel, Hosts bei geringer Last stromsparend abzuschalten?",
    "a": [
      "Distributed Power Management (DPM)",
      "Storage vMotion",
      "Software Assurance",
      "Fibre Channel"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Distributed Power Management (DPM)."
  },
  {
    "id": "mod1-19",
    "number": 19,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Feature verschiebt virtuelle Datenträger zwischen Speichersystemen im laufenden Betrieb?",
    "a": [
      "RAID 1",
      "Storage vMotion",
      "vCenter Single Sign On",
      "Open Value"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Storage vMotion."
  },
  {
    "id": "mod1-20",
    "number": 20,
    "type": "new",
    "topic": "Computing",
    "q": "Was ist ein typischer Anwendungsfall der Sessionvirtualisierung?",
    "a": [
      "Erstellen einer RAID-Parität",
      "Austausch eines Serverlüfters",
      "Zugriff auf eine zentral bereitgestellte Desktopsitzung",
      "Aufrüsten einer lokalen Festplatte"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zugriff auf eine zentral bereitgestellte Desktopsitzung."
  },
  {
    "id": "mod1-21",
    "number": 21,
    "type": "new",
    "topic": "Computing",
    "q": "Was ist ein typischer Vorteil der Applikationsvirtualisierung?",
    "a": [
      "Notwendigkeit eines physischen PCs für jede Softwareversion",
      "Ersetzung der Netzwerkverkabelung",
      "Verbot von Softwareupdates",
      "Getrennte Bereitstellung unterschiedlicher Anwendungsversionen"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Getrennte Bereitstellung unterschiedlicher Anwendungsversionen."
  },
  {
    "id": "mod1-22",
    "number": 22,
    "type": "new",
    "topic": "Computing",
    "q": "Welches Programmier- oder Bereitstellungskonzept passt zur Applikationsvirtualisierung?",
    "a": [
      "Paketierung einer Anwendung auf einem sauberen Referenzsystem",
      "Installation aller Programme ausschließlich auf Routern",
      "Ausschließlich mechanische Festplattenspiegelung",
      "Einrichtung einer Luftschleuse"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Paketierung einer Anwendung auf einem sauberen Referenzsystem."
  },
  {
    "id": "mod1-23",
    "number": 23,
    "type": "new",
    "topic": "Computing",
    "q": "Welche Aufgabe haben Redundanzkonzepte bei Serverhardware?",
    "a": [
      "Verhinderung von Softwarevirtualisierung",
      "Ausfall einzelner Komponenten abfangen",
      "Aufzeichnung aller Benutzergespräche",
      "Abschaffung jedes Sicherheitskonzepts"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Ausfall einzelner Komponenten abfangen."
  },
  {
    "id": "mod1-24",
    "number": 24,
    "type": "new",
    "topic": "Computing",
    "q": "Was ist der Hauptzweck der physischen Sicherheit im Rechenzentrum?",
    "a": [
      "Verringerung der Bildschirmauflösung",
      "Nur Optimierung von Datenbankabfragen",
      "Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden",
      "Automatische Zuordnung von Softwarelizenzen"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden."
  },
  {
    "id": "mod1-25",
    "number": 25,
    "type": "new",
    "topic": "Computing",
    "q": "Was versteht man unter Software Assurance in den dargestellten Microsoft-Lizenzprogrammen?",
    "a": [
      "Eine Art RAID-Controller",
      "Eine Kühltechnik für Rackserver",
      "Ein Netzwerkprotokoll für Storage",
      "Zusätzliche Leistungen und Versionsrechte gemäß Vertrag"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zusätzliche Leistungen und Versionsrechte gemäß Vertrag."
  },
  {
    "id": "mod1-26",
    "number": 26,
    "type": "new",
    "topic": "Computing",
    "q": "Was unterscheidet eine Subscription von einer unbefristeten Nutzungslizenz?",
    "a": [
      "Das Nutzungsrecht ist bei Subscription an eine Laufzeit gebunden",
      "Subscription erlaubt immer unbegrenzte Installationen ohne Kosten",
      "Subscription bezeichnet ausschließlich Hardwaremiete",
      "Eine Nutzungslizenz läuft immer täglich ab"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Das Nutzungsrecht ist bei Subscription an eine Laufzeit gebunden."
  },
  {
    "id": "mod1-27",
    "number": 27,
    "type": "new",
    "topic": "Computing",
    "q": "Welcher Lizenzvertrag ist in den Folien für Vollstandardisierung kleinerer Unternehmen vorgesehen?",
    "a": [
      "RAID Enterprise Subscription",
      "Open Value Companywide",
      "Enterprise Agreement nur für Einzelpersonen",
      "Fibre Channel Agreement"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Open Value Companywide."
  },
  {
    "id": "mod1-28",
    "number": 28,
    "type": "new",
    "topic": "Computing",
    "q": "Was meint True-up bei einem Enterprise Agreement?",
    "a": [
      "Löschen aller VMs nach drei Tagen",
      "Verteilung der Paritätsblöcke",
      "Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs",
      "Tägliche Überprüfung der Servertemperatur"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs."
  },
  {
    "id": "mod2-1",
    "number": 1,
    "type": "new",
    "topic": "Storage",
    "q": "Welcher Ursprung gehört zur Schnittstelle SAS?",
    "a": [
      "Serial Advanced Technology Attachment",
      "Integrated Drive Electronics",
      "Fibre Channel",
      "Serial Attached SCSI"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Serial Attached SCSI."
  },
  {
    "id": "mod2-2",
    "number": 2,
    "type": "new",
    "topic": "Storage",
    "q": "Wofür wird SATA in den Folien vor allem eingesetzt?",
    "a": [
      "Kostengünstige Speicher und Archivsysteme",
      "Ausschließlich extrem latenzkritische HPC-Cluster",
      "Nur Glasfaserverbindungen",
      "Softwarelizenzverwaltung"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Kostengünstige Speicher und Archivsysteme."
  },
  {
    "id": "mod2-3",
    "number": 3,
    "type": "new",
    "topic": "Storage",
    "q": "Welche Besonderheit unterstützt SAS für höhere Verfügbarkeit?",
    "a": [
      "Verzicht auf Speichercontroller",
      "Zwei Schnittstellen pro Disk",
      "Nur eine maximale Kabellänge von 1 cm",
      "Ausschließlich einzelne Schreibwarteschlangen"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zwei Schnittstellen pro Disk."
  },
  {
    "id": "mod2-4",
    "number": 4,
    "type": "new",
    "topic": "Storage",
    "q": "Weshalb eignet sich NVMe für moderne SSDs?",
    "a": [
      "Nur sequentielle Magnetbandzugriffe",
      "Es benötigt zwingend einen optischen Datenträger",
      "Viele parallele Befehlswarteschlangen und kurze Zugriffszeiten",
      "Ausschließlich parallele 40-polige Kabel"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Viele parallele Befehlswarteschlangen und kurze Zugriffszeiten."
  },
  {
    "id": "mod2-5",
    "number": 5,
    "type": "new",
    "topic": "Storage",
    "q": "Wofür wird Fibre Channel typischerweise verwendet?",
    "a": [
      "Lizenzschlüsselverwaltung",
      "HTTP-Webseitenanzeige",
      "CPU-Kühlung",
      "Speichernetzwerke (SAN)"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Speichernetzwerke (SAN)."
  },
  {
    "id": "mod2-6",
    "number": 6,
    "type": "new",
    "topic": "Storage",
    "q": "Was bedeutet JBOD?",
    "a": [
      "Just a Bunch of Disks ohne eingebaute RAID-Redundanz",
      "Daten werden auf zwei Platten gespiegelt",
      "Eine Variante von RAID 6",
      "Ein spezielles Cloud-Service-Modell"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Just a Bunch of Disks ohne eingebaute RAID-Redundanz."
  },
  {
    "id": "mod2-7",
    "number": 7,
    "type": "new",
    "topic": "Storage",
    "q": "Welches RAID-Level besitzt keine Redundanz?",
    "a": [
      "RAID 6",
      "RAID 0",
      "RAID 1",
      "RAID 5"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: RAID 0."
  },
  {
    "id": "mod2-8",
    "number": 8,
    "type": "new",
    "topic": "Storage",
    "q": "Welches Verfahren verwendet RAID 0?",
    "a": [
      "Spiegelung jedes Datenträgers",
      "Standortübergreifende Replikation",
      "Blockweises Striping",
      "Doppelte Parität"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Blockweises Striping."
  },
  {
    "id": "mod2-9",
    "number": 9,
    "type": "new",
    "topic": "Storage",
    "q": "Welches Verfahren verwendet RAID 1?",
    "a": [
      "Distributed Parity",
      "Double Parity",
      "Deduplizierung",
      "Mirroring (Spiegelung)"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Mirroring (Spiegelung)."
  },
  {
    "id": "mod2-10",
    "number": 10,
    "type": "new",
    "topic": "Storage",
    "q": "Wie viele Festplatten dürfen bei RAID 5 mindestens ausfallen, ohne dass sofort Daten verloren gehen?",
    "a": [
      "Eine Festplatte",
      "Zwei beliebige Festplatten",
      "Drei beliebige Festplatten",
      "Keine einzige Festplatte"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Eine Festplatte."
  },
  {
    "id": "mod2-11",
    "number": 11,
    "type": "new",
    "topic": "Storage",
    "q": "Welcher Begriff beschreibt den zusätzlichen Schreibaufwand bei RAID 5?",
    "a": [
      "Vendor Lock-in",
      "Write Penalty",
      "Rapid Elasticity",
      "Hot Aisle"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Write Penalty."
  },
  {
    "id": "mod2-12",
    "number": 12,
    "type": "new",
    "topic": "Storage",
    "q": "Wie viele gleichzeitige Festplattenausfälle toleriert RAID 6 typischerweise?",
    "a": [
      "Beliebig viele Festplatten",
      "Keinen einzigen",
      "Zwei Festplatten",
      "Nur eine Festplatte"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zwei Festplatten."
  },
  {
    "id": "mod2-13",
    "number": 13,
    "type": "new",
    "topic": "Storage",
    "q": "Wie wird RAID 10 technisch aufgebaut?",
    "a": [
      "Nur doppelte Parität ohne Spiegelung",
      "Eine einzelne Festplatte ohne Backup",
      "Daten ausschließlich über das LAN",
      "Striping über gespiegelte Festplattenpaare"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Striping über gespiegelte Festplattenpaare."
  },
  {
    "id": "mod2-14",
    "number": 14,
    "type": "new",
    "topic": "Storage",
    "q": "Was ist ein Nachteil von RAID 10?",
    "a": [
      "Hoher Bedarf an physischer Festplattenkapazität",
      "Grundsätzlich keine Redundanz",
      "Immer langsamer als ein einzelner Datenträger",
      "Erfordert ausschließlich Magnetband"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Hoher Bedarf an physischer Festplattenkapazität."
  },
  {
    "id": "mod2-15",
    "number": 15,
    "type": "new",
    "topic": "Storage",
    "q": "Weshalb ersetzt RAID kein Backup?",
    "a": [
      "Weil RAID nur auf Druckern funktioniert",
      "Löschungen und logische Fehler können auch den RAID-Verbund betreffen",
      "Weil RAID keine Daten speichert",
      "Weil RAID immer nach Sekunden deaktiviert wird"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Löschungen und logische Fehler können auch den RAID-Verbund betreffen."
  },
  {
    "id": "mod2-16",
    "number": 16,
    "type": "new",
    "topic": "Storage",
    "q": "Wofür steht DAS?",
    "a": [
      "Data Access Subscription",
      "Digital Archive Service",
      "Direct Attached Storage",
      "Distributed Application Software"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Direct Attached Storage."
  },
  {
    "id": "mod2-17",
    "number": 17,
    "type": "new",
    "topic": "Storage",
    "q": "Welcher Nachteil ist für DAS typisch?",
    "a": [
      "Ausschließlich Dateizugriff über alle Standorte",
      "Erfordert immer eigenes Fibre-Channel-SAN",
      "Kein direkter Zugriff möglich",
      "Begrenzte Skalierbarkeit und Bindung an einen Host"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Begrenzte Skalierbarkeit und Bindung an einen Host."
  },
  {
    "id": "mod2-18",
    "number": 18,
    "type": "new",
    "topic": "Storage",
    "q": "Welches Merkmal trifft typischerweise auf NAS zu?",
    "a": [
      "Dateizugriff über ein vorhandenes Netzwerk mit SMB oder NFS",
      "Nur direkter Anschluss einer Festplatte an einen einzelnen Host",
      "Ausschließlich GPU-Computing",
      "Nur analoges Magnetband"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Dateizugriff über ein vorhandenes Netzwerk mit SMB oder NFS."
  },
  {
    "id": "mod2-19",
    "number": 19,
    "type": "new",
    "topic": "Storage",
    "q": "Welche Protokolle werden häufig für NAS-Dateifreigaben eingesetzt?",
    "a": [
      "USB und PCIe",
      "SMB und NFS",
      "SATA und IDE",
      "HTTP und HDMI"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: SMB und NFS."
  },
  {
    "id": "mod2-20",
    "number": 20,
    "type": "new",
    "topic": "Storage",
    "q": "Was ist ein zentraler Vorteil eines SAN?",
    "a": [
      "Kein Administrationsaufwand unter allen Umständen",
      "Keine Netzwerkswitches erforderlich",
      "Zentrales blockbasiertes Storage über ein separates Speichernetzwerk",
      "Nur lokale USB-Sticks"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zentrales blockbasiertes Storage über ein separates Speichernetzwerk."
  },
  {
    "id": "mod2-21",
    "number": 21,
    "type": "new",
    "topic": "Storage",
    "q": "Welche Schwierigkeit ist bei Fibre-Channel-SANs typisch?",
    "a": [
      "Ausschließlich Nutzung auf einem Laptop",
      "Unmöglichkeit mehrerer Pfade",
      "Fehlende Speicherkonsolidierung",
      "Kostenintensive Infrastruktur und komplexe Konfiguration"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Kostenintensive Infrastruktur und komplexe Konfiguration."
  },
  {
    "id": "mod2-22",
    "number": 22,
    "type": "new",
    "topic": "Storage",
    "q": "Welcher Storagetyp eignet sich laut Folien für zentrale blockbasierte Speicher in Virtualisierungsclustern?",
    "a": [
      "SAN",
      "Lokaler USB-Stick",
      "DVD-Laufwerk",
      "Nur Offline Tape"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: SAN."
  },
  {
    "id": "mod2-23",
    "number": 23,
    "type": "new",
    "topic": "Storage",
    "q": "Was versteht man unter Unified Storage?",
    "a": [
      "Ein exklusiv optisches Netzwerk",
      "Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform",
      "Alle Daten müssen auf einem einzigen USB-Stick liegen",
      "Nur magnetische Archivierung"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform."
  },
  {
    "id": "mod2-24",
    "number": 24,
    "type": "new",
    "topic": "Storage",
    "q": "Was beschreibt die Funktion Deduplizierung bei Storage?",
    "a": [
      "Unwiderruflich alle Versionen löschen",
      "Physische Lüfter redundant ausführen",
      "Redundante Daten nur einmal speichern",
      "Daten bewusst mehrfach ohne Zeiger ablegen"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Redundante Daten nur einmal speichern."
  },
  {
    "id": "mod2-25",
    "number": 25,
    "type": "new",
    "topic": "Storage",
    "q": "Was bedeutet Thin Provisioning?",
    "a": [
      "Doppelte physische Kapazität muss immer reserviert sein",
      "Verbot virtueller Datenträger",
      "Nur Backup auf Blu-ray",
      "Logische Bereitstellung von Kapazität ohne sofortige vollständige physische Belegung"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Logische Bereitstellung von Kapazität ohne sofortige vollständige physische Belegung."
  },
  {
    "id": "mod2-26",
    "number": 26,
    "type": "new",
    "topic": "Storage",
    "q": "Was misst die Kennzahl RPO?",
    "a": [
      "Maximal angestrebten tolerierbaren Datenverlust in Zeit",
      "Zeit bis zum nächsten Hardwarekauf",
      "Gesamtpreis eines Cloud-Vertrags",
      "Anzahl physischer Speichercontroller"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Maximal angestrebten tolerierbaren Datenverlust in Zeit."
  },
  {
    "id": "mod2-27",
    "number": 27,
    "type": "new",
    "topic": "Storage",
    "q": "Was misst RTO?",
    "a": [
      "Monatliche Speicherkosten",
      "Angestrebte maximale Wiederherstellungsdauer",
      "Die Anzahl an RAID-Disks",
      "Die Taktfrequenz einer SAS-Schnittstelle"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Angestrebte maximale Wiederherstellungsdauer."
  },
  {
    "id": "mod2-28",
    "number": 28,
    "type": "new",
    "topic": "Storage",
    "q": "Was unterscheidet einen Metro Cluster vom Standard Cluster?",
    "a": [
      "Standard Cluster hat stets mehr Standorte",
      "Nur der Standard Cluster unterstützt Festplatten",
      "Standortübergreifende Spiegelung und Verfügbarkeit",
      "Metro Cluster besitzt grundsätzlich keine Controller"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Standortübergreifende Spiegelung und Verfügbarkeit."
  },
  {
    "id": "mod3-1",
    "number": 1,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Wozu dient ein Backup primär?",
    "a": [
      "Langfristige unveränderliche Archivierung als einziges Ziel",
      "Ausschließlich laufende Lastverteilung",
      "Ersetzen der Nutzerverwaltung",
      "Wiederherstellung verlorener Produktionsdaten"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Wiederherstellung verlorener Produktionsdaten."
  },
  {
    "id": "mod3-2",
    "number": 2,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Wozu dient eine Archivierung hauptsächlich?",
    "a": [
      "Langfristige, nachvollziehbare Aufbewahrung von Daten",
      "Nur sofortige Wiederherstellung der letzten fünf Sekunden",
      "Automatische Lastverteilung zwischen Cloud-Regionen",
      "Serverkühlung"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Langfristige, nachvollziehbare Aufbewahrung von Daten."
  },
  {
    "id": "mod3-3",
    "number": 3,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Warum ersetzt Replikation kein Backup?",
    "a": [
      "Weil Replikation immer offline ist",
      "Versehentliches Löschen kann auf das replizierte System übertragen werden",
      "Weil Replikation keine Kopien erzeugt",
      "Weil Replikation nur auf optischen Medien funktioniert"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Versehentliches Löschen kann auf das replizierte System übertragen werden."
  },
  {
    "id": "mod3-4",
    "number": 4,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Wie viel Ausfallzeit pro Jahr entspricht laut Folien ungefähr 99,9 Prozent Verfügbarkeit?",
    "a": [
      "87 Stunden",
      "52 Minuten",
      "8 Stunden und 45 Minuten",
      "5 Minuten"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: 8 Stunden und 45 Minuten."
  },
  {
    "id": "mod3-5",
    "number": 5,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was bezeichnet MTBF?",
    "a": [
      "Maximale Datenmenge in Terabyte",
      "Zugriffsrecht eines Backup-Administrators",
      "Sicherungsintervall eines Cloud-Speichers",
      "Durchschnittliche Zeit zwischen zwei Ausfällen"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Durchschnittliche Zeit zwischen zwei Ausfällen."
  },
  {
    "id": "mod3-6",
    "number": 6,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Wofür steht MTTR?",
    "a": [
      "Mean Time To Repair",
      "Maximum Time To Replicate",
      "Measured Transfer Rate",
      "Managed Tape Recovery"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Mean Time To Repair."
  },
  {
    "id": "mod3-7",
    "number": 7,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was beschreibt RPO?",
    "a": [
      "Den Stromverbrauch des Rechenzentrums",
      "Maximal tolerierbaren Datenverlust als Zeitspanne",
      "Die monatlichen Backup-Kosten",
      "Dauer eines Lizenzvertrags"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Maximal tolerierbaren Datenverlust als Zeitspanne."
  },
  {
    "id": "mod3-8",
    "number": 8,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was beschreibt RTO?",
    "a": [
      "Anzahl gesicherter Generationen",
      "Verfügbare Speicherkapazität",
      "Zielzeit für die Wiederherstellung des Systems",
      "Durchschnittliche Nutzungsdauer einer Festplatte"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zielzeit für die Wiederherstellung des Systems."
  },
  {
    "id": "mod3-9",
    "number": 9,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was ist ein SLR?",
    "a": [
      "Externer Lizenzvertrag",
      "Protokoll für eine Datensicherung",
      "Hardware für Redundanz",
      "Vom Kunden formulierte Service Level Requirements"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vom Kunden formulierte Service Level Requirements."
  },
  {
    "id": "mod3-10",
    "number": 10,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was ist ein SLA?",
    "a": [
      "Vereinbarung über zugesicherte Serviceleistungen",
      "Interner Backup-Datenträger",
      "RAID-Level mit Parität",
      "Ein Storage-Protokoll"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vereinbarung über zugesicherte Serviceleistungen."
  },
  {
    "id": "mod3-11",
    "number": 11,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was bezeichnet ein OLA?",
    "a": [
      "Ein Backup auf einem USB-Stick",
      "Interne Vereinbarung zur Unterstützung eines SLA",
      "Vereinbarung ausschließlich mit externem Provider",
      "Eine unverschlüsselte Cloud-Datei"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Interne Vereinbarung zur Unterstützung eines SLA."
  },
  {
    "id": "mod3-12",
    "number": 12,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was bezeichnet ein Underpinning Contract?",
    "a": [
      "Ein Snapshotspeicher",
      "Eine Form der Datendeduplizierung",
      "Externe Vereinbarung zur Unterstützung eines SLA",
      "Interne Schichtplanung ohne Vertrag"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Externe Vereinbarung zur Unterstützung eines SLA."
  },
  {
    "id": "mod3-13",
    "number": 13,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welches Medium eignet sich laut Folien für kostengünstige langfristige Offline-Sicherungen?",
    "a": [
      "Reiner RAM-Cache",
      "Nur CPU-Register",
      "Ein einzelner SSD-Snapshot",
      "LTO-Magnetband"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: LTO-Magnetband."
  },
  {
    "id": "mod3-14",
    "number": 14,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welches Medium eignet sich besonders für Hot-Backups mit schneller Wiederherstellung?",
    "a": [
      "SSD",
      "Papierarchiv",
      "Ausschließlich Magnetband",
      "Lochkarte"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: SSD."
  },
  {
    "id": "mod3-15",
    "number": 15,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was ist ein Vorteil von Cloud-Backup?",
    "a": [
      "Keine Verantwortung für Datenschutz",
      "Skalierbarkeit, Automatisierung und Georedundanz",
      "Vollständige Unabhängigkeit vom Internet",
      "Grundsätzlich keine laufenden Kosten"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Skalierbarkeit, Automatisierung und Georedundanz."
  },
  {
    "id": "mod3-16",
    "number": 16,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was kennzeichnet einen physischen Air-Gap?",
    "a": [
      "Alle Systeme nutzen dieselbe Administratoranmeldung",
      "Ein RAID 0 als einziges Backup",
      "Backup-Medium ist vom Netzwerk physisch getrennt",
      "Jede Kopie liegt im gleichen Netzwerksegment"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Backup-Medium ist vom Netzwerk physisch getrennt."
  },
  {
    "id": "mod3-17",
    "number": 17,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Sicherungsart speichert bei jedem Lauf alle ausgewählten Daten?",
    "a": [
      "Inkrementelle Sicherung",
      "Differenzielle Sicherung",
      "Replikation ohne Historie",
      "Vollsicherung"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vollsicherung."
  },
  {
    "id": "mod3-18",
    "number": 18,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Sicherungsart speichert nur Änderungen seit der letzten Sicherung?",
    "a": [
      "Inkrementelle Sicherung",
      "Vollsicherung",
      "Differenzielle Sicherung",
      "Langzeitarchivierung"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Inkrementelle Sicherung."
  },
  {
    "id": "mod3-19",
    "number": 19,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Sicherungsart speichert Änderungen seit der letzten Vollsicherung?",
    "a": [
      "Storage vMotion",
      "Differenzielle Sicherung",
      "Inkrementelle Sicherung",
      "Vollsicherung"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Differenzielle Sicherung."
  },
  {
    "id": "mod3-20",
    "number": 20,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Sicherungen braucht man üblicherweise zur Wiederherstellung einer inkrementellen Kette?",
    "a": [
      "Nur das nächste geplante Backup",
      "Keine einzige Sicherung",
      "Vollsicherung und sämtliche benötigten Folgeinkremente",
      "Ausschließlich das letzte Inkrement"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vollsicherung und sämtliche benötigten Folgeinkremente."
  },
  {
    "id": "mod3-21",
    "number": 21,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Sicherungen benötigt man für eine differenzielle Wiederherstellung?",
    "a": [
      "Alle seit Beginn erstellten differenziellen Sicherungen",
      "Nur die älteste differenzielle Sicherung",
      "Zwingend ein weiteres Betriebssystem",
      "Vollsicherung und letzte differenzielle Sicherung"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vollsicherung und letzte differenzielle Sicherung."
  },
  {
    "id": "mod3-22",
    "number": 22,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was beschreibt Reverse Deltas?",
    "a": [
      "Aktuelle Vollsicherung wird fortgeschrieben und ältere Änderungen werden rückwärts gespeichert",
      "Vollsicherung bleibt immer unverändert",
      "Alle Sicherungen werden ausschließlich auf Tape geschrieben",
      "Zunächst wird jeder Server formatiert"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Aktuelle Vollsicherung wird fortgeschrieben und ältere Änderungen werden rückwärts gespeichert."
  },
  {
    "id": "mod3-23",
    "number": 23,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was ist eine synthetische Vollsicherung?",
    "a": [
      "Ein vollständiges Neu-Lesen aller Produktivdaten bei jedem Lauf",
      "Konsolidierte Vollsicherung aus bereits vorhandenen Sicherungssätzen",
      "Physische Spiegelung zweier Netzwerkrouter",
      "Ausschließlich das letzte kleine Inkrement"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Konsolidierte Vollsicherung aus bereits vorhandenen Sicherungssätzen."
  },
  {
    "id": "mod3-24",
    "number": 24,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was ist das Hauptziel der Deduplizierung?",
    "a": [
      "Jede Datei unverschlüsselt ins Internet laden",
      "Automatisch RAID 6 konfigurieren",
      "Gleiche Daten nicht mehrfach vollständig speichern",
      "Gezielt alle Datensätze vervierfachen"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Gleiche Daten nicht mehrfach vollständig speichern."
  },
  {
    "id": "mod3-25",
    "number": 25,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Wo reduziert Client-Side-Deduplizierung typischerweise Datenverkehr?",
    "a": [
      "Erst nach jeder Wiederherstellung",
      "Ausschließlich beim Speichern im Offline-Archiv",
      "Nur am Netzwerkrouter",
      "Vor Übertragung an den Backup-Server"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vor Übertragung an den Backup-Server."
  },
  {
    "id": "mod3-26",
    "number": 26,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was bedeutet Grandfather-Father-Son?",
    "a": [
      "Rotationsprinzip mit täglichen, wöchentlichen und monatlichen Sicherungsständen",
      "Eine Methode zur Serverkühlung",
      "Ein Verfahren für Festplattenparität",
      "Ein Cloud-Vertragsmodell"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Rotationsprinzip mit täglichen, wöchentlichen und monatlichen Sicherungsständen."
  },
  {
    "id": "mod3-27",
    "number": 27,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Was passiert bei einer FIFO-Sicherungsstrategie?",
    "a": [
      "Sicherungen dürfen nie automatisch laufen",
      "Älteste Sicherungen werden zuerst überschrieben oder gelöscht",
      "Neueste Sicherung wird immer zuerst gelöscht",
      "Alle Sicherungen bleiben zwingend ewig bestehen"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Älteste Sicherungen werden zuerst überschrieben oder gelöscht."
  },
  {
    "id": "mod3-28",
    "number": 28,
    "type": "new",
    "topic": "Backup & Restore",
    "q": "Welche Reihenfolge beschreibt die Entwicklung einer Backup-Strategie?",
    "a": [
      "Kaufen, Vergessen und Wiederholen",
      "Nur Geräte bestellen",
      "Analyse, Planung und Test",
      "Löschen, Verschlüsseln und Ignorieren"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Analyse, Planung und Test."
  },
  {
    "id": "mod4-1",
    "number": 1,
    "type": "new",
    "topic": "Cloud",
    "q": "Welche drei Cloud-Servicemodelle nennt das Modul?",
    "a": [
      "RAID, SAN und NAS",
      "MTTR, MTBF und MTTF",
      "VPN, HDMI und USB",
      "IaaS, PaaS und SaaS"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: IaaS, PaaS und SaaS."
  },
  {
    "id": "mod4-2",
    "number": 2,
    "type": "new",
    "topic": "Cloud",
    "q": "Wofür steht IaaS?",
    "a": [
      "Infrastructure as a Service",
      "Integrity as a Storage",
      "Internet as a Software",
      "Identity as a Subscription"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Infrastructure as a Service."
  },
  {
    "id": "mod4-3",
    "number": 3,
    "type": "new",
    "topic": "Cloud",
    "q": "Welches Modell liefert eine fertige Softwareanwendung?",
    "a": [
      "Direct Attached Storage",
      "Software as a Service (SaaS)",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Software as a Service (SaaS)."
  },
  {
    "id": "mod4-4",
    "number": 4,
    "type": "new",
    "topic": "Cloud",
    "q": "Welches Modell bietet eine Plattform zur Ausführung eigener Anwendungen?",
    "a": [
      "Network Attached Storage",
      "RAID 10",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Platform as a Service (PaaS)."
  },
  {
    "id": "mod4-5",
    "number": 5,
    "type": "new",
    "topic": "Cloud",
    "q": "Welche Cloud-Eigenschaft ermöglicht die eigenständige Ressourcenanforderung durch Nutzer?",
    "a": [
      "Mirroring",
      "Cold Storage",
      "Single Loop",
      "On-Demand Self-Service"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: On-Demand Self-Service."
  },
  {
    "id": "mod4-6",
    "number": 6,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bezeichnet Resource Pooling?",
    "a": [
      "Gemeinsame bedarfsgerechte Nutzung zusammengefasster Ressourcen",
      "Jeder Cloud-Kunde erhält zwingend eigene physische Server",
      "Automatisches Löschen sämtlicher Backups",
      "Abschaltung sämtlicher Netzwerkknoten"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Gemeinsame bedarfsgerechte Nutzung zusammengefasster Ressourcen."
  },
  {
    "id": "mod4-7",
    "number": 7,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist Rapid Elasticity?",
    "a": [
      "Sicherung auf offline gelagertem Magnetband",
      "Schnelles Anpassen der Cloud-Kapazität an den tatsächlichen Bedarf",
      "Langfristige unveränderliche Archivierung",
      "Manuelle Konfiguration jedes Routers"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Schnelles Anpassen der Cloud-Kapazität an den tatsächlichen Bedarf."
  },
  {
    "id": "mod4-8",
    "number": 8,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bedeutet Measured Service?",
    "a": [
      "Cloud-Zugang ist nur offline möglich",
      "Ein RAID wird gespiegelt",
      "Nutzung der Cloud-Ressourcen wird gemessen und überwacht",
      "Leistung kann niemals abgerechnet werden"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Nutzung der Cloud-Ressourcen wird gemessen und überwacht."
  },
  {
    "id": "mod4-9",
    "number": 9,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bedeutet Broad Network Access?",
    "a": [
      "Nur lokaler Zugriff an einem physischen Server",
      "Keine Nutzung durch mobile Endgeräte",
      "Zugriff ausschließlich über SATA",
      "Cloud-Dienste sind über standardisierte Netzwerke erreichbar"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Cloud-Dienste sind über standardisierte Netzwerke erreichbar."
  },
  {
    "id": "mod4-10",
    "number": 10,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist eine Private Cloud?",
    "a": [
      "Cloud-Infrastruktur zur exklusiven Nutzung durch eine Organisation",
      "Öffentliche Plattform für alle Nutzer ohne Anmeldung",
      "Ausschließlich Magnetband-Backup",
      "Eine Kombination aus vier RAID-Leveln"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Cloud-Infrastruktur zur exklusiven Nutzung durch eine Organisation."
  },
  {
    "id": "mod4-11",
    "number": 11,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist eine Public Cloud?",
    "a": [
      "Nur ein dedizierter Fibre-Channel-Switch",
      "Cloud-Dienste eines Anbieters für mehrere Kunden",
      "Ausschließlich ein internes Rechenzentrum ohne externe Nutzer",
      "Die Kopie eines privaten USB-Sticks"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Cloud-Dienste eines Anbieters für mehrere Kunden."
  },
  {
    "id": "mod4-12",
    "number": 12,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist eine Hybrid Cloud?",
    "a": [
      "Automatische Löschung aller öffentlichen Daten",
      "Eine Cloud ohne Internetverbindung",
      "Verknüpfung unterschiedlicher Cloud-Umgebungen etwa Private und Public",
      "Ausschließlich RAID 1"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Verknüpfung unterschiedlicher Cloud-Umgebungen etwa Private und Public."
  },
  {
    "id": "mod4-13",
    "number": 13,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bedeutet Multi Cloud?",
    "a": [
      "Mehrere Nutzer auf einem einzigen Betriebssystemkonto",
      "Ausschließlich private Hardwareserver",
      "Ein Backup pro Monat",
      "Parallele Nutzung verschiedener Cloud-Anbieter"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Parallele Nutzung verschiedener Cloud-Anbieter."
  },
  {
    "id": "mod4-14",
    "number": 14,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist ein typisches Risiko von Vendor Lock-in?",
    "a": [
      "Schwieriger oder teurer Wechsel des Cloud-Anbieters",
      "Automatisch unbegrenzte Anbieterunabhängigkeit",
      "Daten können grundsätzlich nie gespeichert werden",
      "Jede Anwendung wird kostenfrei"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Schwieriger oder teurer Wechsel des Cloud-Anbieters."
  },
  {
    "id": "mod4-15",
    "number": 15,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist der Kern von Software Defined Networking?",
    "a": [
      "Alle Server erhalten ein eigenes RAID",
      "Trennung von Steuerungs- und Weiterleitungsebene",
      "Jeder Switch muss manuell isoliert gesteuert werden",
      "Cloud-Daten werden ausschließlich archiviert"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Trennung von Steuerungs- und Weiterleitungsebene."
  },
  {
    "id": "mod4-16",
    "number": 16,
    "type": "new",
    "topic": "Cloud",
    "q": "Welche Ebene leitet in SDN die Datenpakete weiter?",
    "a": [
      "Contract Plane",
      "Backup Plane",
      "Data Plane",
      "Control Plane"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Data Plane."
  },
  {
    "id": "mod4-17",
    "number": 17,
    "type": "new",
    "topic": "Cloud",
    "q": "Welche Ebene legt in SDN Weiterleitungsregeln fest?",
    "a": [
      "Data Plane",
      "Storage Plane",
      "Cooling Plane",
      "Control Plane"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Control Plane."
  },
  {
    "id": "mod4-18",
    "number": 18,
    "type": "new",
    "topic": "Cloud",
    "q": "Welches Protokoll wird in den Folien für die Kommunikation mit SDN-Geräten genannt?",
    "a": [
      "OpenFlow",
      "SATA",
      "NFS als einziges SDN-Protokoll",
      "LTO"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: OpenFlow."
  },
  {
    "id": "mod4-19",
    "number": 19,
    "type": "new",
    "topic": "Cloud",
    "q": "Was ist ein mögliches SDN-Risiko?",
    "a": [
      "Es wird zwingend mehr Hardware pro Nutzer benötigt",
      "Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden",
      "Dynamische Konfiguration ist grundsätzlich unmöglich",
      "Netzwerkgeräte können niemals weiterleiten"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden."
  },
  {
    "id": "mod4-20",
    "number": 20,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bedeutet Software Defined Storage?",
    "a": [
      "Ein RAID ohne Speicherkapazität",
      "Eine neue Art Softwarelizenz",
      "Trennung der Speichersteuerung von der physischen Speicherhardware",
      "Ausschließlich ein lokales DVD-Laufwerk"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Trennung der Speichersteuerung von der physischen Speicherhardware."
  },
  {
    "id": "mod4-21",
    "number": 21,
    "type": "new",
    "topic": "Cloud",
    "q": "Wozu dient ein Software Defined Datacenter?",
    "a": [
      "Ausschließlich mechanische Serverkühlung",
      "Nur langfristige Magnetbandlagerung",
      "Ein weiterer Office-Abonnementtyp",
      "Weitgehend softwarebasierte Verwaltung und Automatisierung von Computing, Storage und Network"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Weitgehend softwarebasierte Verwaltung und Automatisierung von Computing, Storage und Network."
  },
  {
    "id": "mod4-22",
    "number": 22,
    "type": "new",
    "topic": "Cloud",
    "q": "Welche Sicherheitsziele stellt das BSI in den Mittelpunkt?",
    "a": [
      "Vertraulichkeit, Integrität und Verfügbarkeit",
      "Nur Kosten und Skalierung",
      "Nur Softwarelizenzen und Produktdesign",
      "Ausschließlich Stromverbrauch"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Vertraulichkeit, Integrität und Verfügbarkeit."
  },
  {
    "id": "mod4-23",
    "number": 23,
    "type": "new",
    "topic": "Cloud",
    "q": "Was sollte laut BSI am Beginn einer Cloud-Einführung stehen?",
    "a": [
      "Kauf möglichst vieler Festplatten",
      "Cloud-Strategie mit Zielen und Risikoanalyse",
      "Ungeprüfter Vertragsabschluss",
      "Sofortige Löschung lokaler Daten"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Cloud-Strategie mit Zielen und Risikoanalyse."
  },
  {
    "id": "mod4-24",
    "number": 24,
    "type": "new",
    "topic": "Cloud",
    "q": "Was sollte ein Sicherheitskonzept für Cloud-Nutzung enthalten?",
    "a": [
      "Ausschließlich Zahl der Mitarbeitenden",
      "Nur die Domain-Endung",
      "Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen",
      "Nur Farbe der Benutzeroberfläche"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen."
  },
  {
    "id": "mod4-25",
    "number": 25,
    "type": "new",
    "topic": "Cloud",
    "q": "Worauf ist bei der Auswahl eines Cloud-Anbieters zu achten?",
    "a": [
      "Ausschließlich Logo und Werbeslogan",
      "Nur Anzahl verfügbarer Schriftarten",
      "Allein die Farbe der Serverräume",
      "Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten"
    ],
    "correct": 3,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten."
  },
  {
    "id": "mod4-26",
    "number": 26,
    "type": "new",
    "topic": "Cloud",
    "q": "Welches Risiko berücksichtigt das BSI bereits vor Vertragsabschluss?",
    "a": [
      "Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten",
      "Ausschließlich lokale Druckertreiber",
      "Nur die Anzahl der Firmenautos",
      "Optische Darstellung einer Startseite"
    ],
    "correct": 0,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten."
  },
  {
    "id": "mod4-27",
    "number": 27,
    "type": "new",
    "topic": "Cloud",
    "q": "Wozu dient der BSI-C5-Kriterienkatalog?",
    "a": [
      "Messung des Stromverbrauchs von Desktops",
      "Strukturierte Beurteilung und Prüfung der Informationssicherheit von Cloud-Diensten",
      "Festlegung eines weltweit einheitlichen Cloud-Preises",
      "Definition eines neuen RAID-Levels"
    ],
    "correct": 1,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Strukturierte Beurteilung und Prüfung der Informationssicherheit von Cloud-Diensten."
  },
  {
    "id": "mod4-28",
    "number": 28,
    "type": "new",
    "topic": "Cloud",
    "q": "Was bedeutet gemeinsame Sicherheitsverantwortung bei Cloud-Diensten?",
    "a": [
      "Cloud-Nutzer müssen keine Zugriffsrechte verwalten",
      "Alle Sicherheitsmaßnahmen entfallen beim Wechsel zu SaaS",
      "Anbieter und Kunde erfüllen jeweils unterschiedliche Sicherheitsaufgaben",
      "Nur der Anbieter trägt unter allen Umständen jede Pflicht"
    ],
    "correct": 2,
    "source": "Neu aus Vortragsfolien Module 1–4 und zugehörigen E-Learning-Unterlagen abgeleitet",
    "why": "Richtig ist: Anbieter und Kunde erfüllen jeweils unterschiedliche Sicherheitsaufgaben."
  }
];

// Praxispool: zehn Entscheidungsszenarien je Modul; genau eine Antwort richtig.
export const practicalQuestions = [
  {
    "id": "practical-1-1",
    "number": 1,
    "type": "practical",
    "topic": "Computing",
    "q": "In einem kleinen Büro soll ein einzelner Dateiserver ohne Serverschrank aufgestellt werden. Welche Bauform wählen Sie?",
    "a": [
      "Bladeserver",
      "Vier Rackserver",
      "Ein Fibre-Channel-Switch",
      "Towerserver"
    ],
    "correct": 3,
    "why": "Ein Tower benötigt keinen Rackschrank und lässt sich einfach aufstellen.",
    "wrongReasons": [
      "„Bladeserver“ erfüllt die geschilderte Anforderung nicht. Ein Tower benötigt keinen Rackschrank und lässt sich einfach aufstellen.",
      "„Vier Rackserver“ erfüllt die geschilderte Anforderung nicht. Ein Tower benötigt keinen Rackschrank und lässt sich einfach aufstellen.",
      "„Ein Fibre-Channel-Switch“ erfüllt die geschilderte Anforderung nicht. Ein Tower benötigt keinen Rackschrank und lässt sich einfach aufstellen.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-2",
    "number": 2,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Rechenzentrum hat häufig Probleme durch Vermischung warmer Abluft mit Kaltluft. Was ist zuerst sinnvoll?",
    "a": [
      "USV entfernen",
      "Mehr Datenbanklizenzen kaufen",
      "Warm- und Kaltgänge trennen und freie Rackplätze verblenden",
      "Alle Server dauerhaft bei Höchstleistung betreiben"
    ],
    "correct": 2,
    "why": "Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz.",
    "wrongReasons": [
      "„USV entfernen“ erfüllt die geschilderte Anforderung nicht. Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz.",
      "„Mehr Datenbanklizenzen kaufen“ erfüllt die geschilderte Anforderung nicht. Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz.",
      "",
      "„Alle Server dauerhaft bei Höchstleistung betreiben“ erfüllt die geschilderte Anforderung nicht. Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-3",
    "number": 3,
    "type": "practical",
    "topic": "Computing",
    "q": "Vier kaum ausgelastete physische Server sollen konsolidiert werden. Welche Maßnahme passt?",
    "a": [
      "Abschalten der Netzwerküberwachung",
      "Virtualisierung auf leistungsfähigen Hosts",
      "Vier weitere physische Server",
      "Wechsel auf Magnetband als Arbeitslaufwerk"
    ],
    "correct": 1,
    "why": "Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen.",
    "wrongReasons": [
      "„Abschalten der Netzwerküberwachung“ erfüllt die geschilderte Anforderung nicht. Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen.",
      "",
      "„Vier weitere physische Server“ erfüllt die geschilderte Anforderung nicht. Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen.",
      "„Wechsel auf Magnetband als Arbeitslaufwerk“ erfüllt die geschilderte Anforderung nicht. Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-4",
    "number": 4,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Host muss wegen Wartung abgeschaltet werden; die VM soll weiterlaufen. Welches Feature verwenden Sie?",
    "a": [
      "vMotion",
      "RAID 0",
      "Snapshot als einziges Mittel",
      "Open Value Companywide"
    ],
    "correct": 0,
    "why": "vMotion verschiebt laufende virtuelle Maschinen zu anderen Hosts.",
    "wrongReasons": [
      "",
      "„RAID 0“ erfüllt die geschilderte Anforderung nicht. vMotion verschiebt laufende virtuelle Maschinen zu anderen Hosts.",
      "„Snapshot als einziges Mittel“ erfüllt die geschilderte Anforderung nicht. vMotion verschiebt laufende virtuelle Maschinen zu anderen Hosts.",
      "„Open Value Companywide“ erfüllt die geschilderte Anforderung nicht. vMotion verschiebt laufende virtuelle Maschinen zu anderen Hosts."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-5",
    "number": 5,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Host fällt plötzlich aus und VMs sollen auf einem zweiten Host neu starten. Was hilft?",
    "a": [
      "Storage vMotion",
      "Application Sequencer",
      "Software Assurance",
      "High Availability (HA)"
    ],
    "correct": 3,
    "why": "HA startet betroffene virtuelle Maschinen auf verbleibenden Hosts neu.",
    "wrongReasons": [
      "„Storage vMotion“ erfüllt die geschilderte Anforderung nicht. HA startet betroffene virtuelle Maschinen auf verbleibenden Hosts neu.",
      "„Application Sequencer“ erfüllt die geschilderte Anforderung nicht. HA startet betroffene virtuelle Maschinen auf verbleibenden Hosts neu.",
      "„Software Assurance“ erfüllt die geschilderte Anforderung nicht. HA startet betroffene virtuelle Maschinen auf verbleibenden Hosts neu.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-6",
    "number": 6,
    "type": "practical",
    "topic": "Computing",
    "q": "Zwei laufende VM-Instanzen sollen einen Host-Ausfall ohne regulären Neustart abfangen. Was passt?",
    "a": [
      "Differenzielles Backup",
      "Direct Attached Storage",
      "Fault Tolerance",
      "Distributed Power Management"
    ],
    "correct": 2,
    "why": "Fault Tolerance arbeitet mit parallel bereitgestellten Instanzen, benötigt aber zusätzliche Ressourcen.",
    "wrongReasons": [
      "„Differenzielles Backup“ erfüllt die geschilderte Anforderung nicht. Fault Tolerance arbeitet mit parallel bereitgestellten Instanzen, benötigt aber zusätzliche Ressourcen.",
      "„Direct Attached Storage“ erfüllt die geschilderte Anforderung nicht. Fault Tolerance arbeitet mit parallel bereitgestellten Instanzen, benötigt aber zusätzliche Ressourcen.",
      "",
      "„Distributed Power Management“ erfüllt die geschilderte Anforderung nicht. Fault Tolerance arbeitet mit parallel bereitgestellten Instanzen, benötigt aber zusätzliche Ressourcen."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-7",
    "number": 7,
    "type": "practical",
    "topic": "Computing",
    "q": "Eine Schule möchte Programme zentral als Desktopsitzungen bereitstellen. Welches Verfahren ist geeignet?",
    "a": [
      "Kaltgang-Einhausung",
      "Sessionvirtualisierung",
      "RAID 6",
      "Nur SAS-Festplatten"
    ],
    "correct": 1,
    "why": "Bei Sessionvirtualisierung laufen die Benutzer-Sitzungen auf zentraler Infrastruktur.",
    "wrongReasons": [
      "„Kaltgang-Einhausung“ erfüllt die geschilderte Anforderung nicht. Bei Sessionvirtualisierung laufen die Benutzer-Sitzungen auf zentraler Infrastruktur.",
      "",
      "„RAID 6“ erfüllt die geschilderte Anforderung nicht. Bei Sessionvirtualisierung laufen die Benutzer-Sitzungen auf zentraler Infrastruktur.",
      "„Nur SAS-Festplatten“ erfüllt die geschilderte Anforderung nicht. Bei Sessionvirtualisierung laufen die Benutzer-Sitzungen auf zentraler Infrastruktur."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-8",
    "number": 8,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Unternehmen will unterschiedliche inkompatible Anwendungsstände besser voneinander trennen. Was hilft?",
    "a": [
      "Applikationsvirtualisierung",
      "Doppelter Datenbankserver ohne Trennung",
      "Single Loop",
      "LTO-Bandrobotik"
    ],
    "correct": 0,
    "why": "Applikationsvirtualisierung entkoppelt Anwendungen von der üblichen lokalen Installation.",
    "wrongReasons": [
      "",
      "„Doppelter Datenbankserver ohne Trennung“ erfüllt die geschilderte Anforderung nicht. Applikationsvirtualisierung entkoppelt Anwendungen von der üblichen lokalen Installation.",
      "„Single Loop“ erfüllt die geschilderte Anforderung nicht. Applikationsvirtualisierung entkoppelt Anwendungen von der üblichen lokalen Installation.",
      "„LTO-Bandrobotik“ erfüllt die geschilderte Anforderung nicht. Applikationsvirtualisierung entkoppelt Anwendungen von der üblichen lokalen Installation."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-9",
    "number": 9,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Unternehmen mit 25 Arbeitsplätzen wünscht standardisierte Microsoft-Lizenzen samt Wartung. Welches historische Programm passt zu den Folien?",
    "a": [
      "Enterprise Agreement ab 250 Arbeitsplätzen",
      "Fibre Channel",
      "Software Defined Storage",
      "Open Value Companywide"
    ],
    "correct": 3,
    "why": "Die Vortragsfolien ordnen diese Anforderungen dem Open-Value-Companywide-Modell zu.",
    "wrongReasons": [
      "„Enterprise Agreement ab 250 Arbeitsplätzen“ erfüllt die geschilderte Anforderung nicht. Die Vortragsfolien ordnen diese Anforderungen dem Open-Value-Companywide-Modell zu.",
      "„Fibre Channel“ erfüllt die geschilderte Anforderung nicht. Die Vortragsfolien ordnen diese Anforderungen dem Open-Value-Companywide-Modell zu.",
      "„Software Defined Storage“ erfüllt die geschilderte Anforderung nicht. Die Vortragsfolien ordnen diese Anforderungen dem Open-Value-Companywide-Modell zu.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-1-10",
    "number": 10,
    "type": "practical",
    "topic": "Computing",
    "q": "Ein Unternehmen möchte die Server im Leerlauf über Nacht abschalten, aber vorher VMs verlagern. Was passt?",
    "a": [
      "Direct Attached Storage",
      "Software Defined Networking allein",
      "Distributed Power Management",
      "RAID 1"
    ],
    "correct": 2,
    "why": "DPM konsolidiert VMs und spart durch Abschaltung leerer Hosts Energie.",
    "wrongReasons": [
      "„Direct Attached Storage“ erfüllt die geschilderte Anforderung nicht. DPM konsolidiert VMs und spart durch Abschaltung leerer Hosts Energie.",
      "„Software Defined Networking allein“ erfüllt die geschilderte Anforderung nicht. DPM konsolidiert VMs und spart durch Abschaltung leerer Hosts Energie.",
      "",
      "„RAID 1“ erfüllt die geschilderte Anforderung nicht. DPM konsolidiert VMs und spart durch Abschaltung leerer Hosts Energie."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-1",
    "number": 1,
    "type": "practical",
    "topic": "Storage",
    "q": "Eine Datenbank benötigt schnellen lokalen Speicher und nur einen Host. Was wählen Sie?",
    "a": [
      "Ein ausschließliches Tape-Archiv",
      "Ein Blu-ray-Laufwerk",
      "Public-Cloud-Office-Software",
      "DAS über SAS oder NVMe"
    ],
    "correct": 3,
    "why": "DAS bietet kurze lokale Zugriffswege und eignet sich für performantes Caching und Datenbanken.",
    "wrongReasons": [
      "„Ein ausschließliches Tape-Archiv“ erfüllt die geschilderte Anforderung nicht. DAS bietet kurze lokale Zugriffswege und eignet sich für performantes Caching und Datenbanken.",
      "„Ein Blu-ray-Laufwerk“ erfüllt die geschilderte Anforderung nicht. DAS bietet kurze lokale Zugriffswege und eignet sich für performantes Caching und Datenbanken.",
      "„Public-Cloud-Office-Software“ erfüllt die geschilderte Anforderung nicht. DAS bietet kurze lokale Zugriffswege und eignet sich für performantes Caching und Datenbanken.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-2",
    "number": 2,
    "type": "practical",
    "topic": "Storage",
    "q": "Eine Abteilung braucht günstige gemeinsame Dateiablagen über das vorhandene LAN. Was passt?",
    "a": [
      "DAS nur am Einzelserver",
      "RAID 0 ohne Netzwerk",
      "NAS mit SMB-Freigaben",
      "Separates Fibre-Channel-SAN zwingend"
    ],
    "correct": 2,
    "why": "NAS stellt Dateien mehreren Clients über das Netzwerk bereit.",
    "wrongReasons": [
      "„DAS nur am Einzelserver“ erfüllt die geschilderte Anforderung nicht. NAS stellt Dateien mehreren Clients über das Netzwerk bereit.",
      "„RAID 0 ohne Netzwerk“ erfüllt die geschilderte Anforderung nicht. NAS stellt Dateien mehreren Clients über das Netzwerk bereit.",
      "",
      "„Separates Fibre-Channel-SAN zwingend“ erfüllt die geschilderte Anforderung nicht. NAS stellt Dateien mehreren Clients über das Netzwerk bereit."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-3",
    "number": 3,
    "type": "practical",
    "topic": "Storage",
    "q": "Ein Virtualisierungscluster braucht zentralen Blockspeicher über separates Speichernetzwerk. Was wählen Sie?",
    "a": [
      "Ein einzelnes NAS ohne Blockprotokoll",
      "Fibre-Channel-SAN",
      "Ein USB-Stick an einem Host",
      "Nur lokale DVDs"
    ],
    "correct": 1,
    "why": "Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit.",
    "wrongReasons": [
      "„Ein einzelnes NAS ohne Blockprotokoll“ erfüllt die geschilderte Anforderung nicht. Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit.",
      "",
      "„Ein USB-Stick an einem Host“ erfüllt die geschilderte Anforderung nicht. Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit.",
      "„Nur lokale DVDs“ erfüllt die geschilderte Anforderung nicht. Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-4",
    "number": 4,
    "type": "practical",
    "topic": "Storage",
    "q": "Sie haben vier Platten. Zwei davon dürfen gleichzeitig ausfallen, ohne dass Daten verloren gehen. Welches RAID wählen Sie?",
    "a": [
      "RAID 6",
      "RAID 0",
      "RAID 5",
      "Ein einfaches JBOD"
    ],
    "correct": 0,
    "why": "RAID 6 kann durch doppelte Parität zwei Plattenausfälle tolerieren.",
    "wrongReasons": [
      "",
      "„RAID 0“ erfüllt die geschilderte Anforderung nicht. RAID 6 kann durch doppelte Parität zwei Plattenausfälle tolerieren.",
      "„RAID 5“ erfüllt die geschilderte Anforderung nicht. RAID 6 kann durch doppelte Parität zwei Plattenausfälle tolerieren.",
      "„Ein einfaches JBOD“ erfüllt die geschilderte Anforderung nicht. RAID 6 kann durch doppelte Parität zwei Plattenausfälle tolerieren."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-5",
    "number": 5,
    "type": "practical",
    "topic": "Storage",
    "q": "Zwei Festplatten sollen identische Daten enthalten. Was konfigurieren Sie?",
    "a": [
      "RAID 0",
      "JBOD",
      "Nur ein externes Cloud-Archiv",
      "RAID 1"
    ],
    "correct": 3,
    "why": "RAID 1 spiegelt Daten auf mehrere Platten.",
    "wrongReasons": [
      "„RAID 0“ erfüllt die geschilderte Anforderung nicht. RAID 1 spiegelt Daten auf mehrere Platten.",
      "„JBOD“ erfüllt die geschilderte Anforderung nicht. RAID 1 spiegelt Daten auf mehrere Platten.",
      "„Nur ein externes Cloud-Archiv“ erfüllt die geschilderte Anforderung nicht. RAID 1 spiegelt Daten auf mehrere Platten.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-6",
    "number": 6,
    "type": "practical",
    "topic": "Storage",
    "q": "Hohe I/O-Leistung und Redundanz sind wichtig; Kapazitätskosten sind weniger entscheidend. Was passt?",
    "a": [
      "JBOD",
      "Einzelne SATA-Disk ohne Redundanz",
      "RAID 10",
      "RAID 0"
    ],
    "correct": 2,
    "why": "RAID 10 kombiniert Striping mit Spiegelung und hoher Leistung.",
    "wrongReasons": [
      "„JBOD“ erfüllt die geschilderte Anforderung nicht. RAID 10 kombiniert Striping mit Spiegelung und hoher Leistung.",
      "„Einzelne SATA-Disk ohne Redundanz“ erfüllt die geschilderte Anforderung nicht. RAID 10 kombiniert Striping mit Spiegelung und hoher Leistung.",
      "",
      "„RAID 0“ erfüllt die geschilderte Anforderung nicht. RAID 10 kombiniert Striping mit Spiegelung und hoher Leistung."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-7",
    "number": 7,
    "type": "practical",
    "topic": "Storage",
    "q": "Die Storage-Hardware eines Controllers soll ausfalltolerant werden, ohne zwei Standorte zu betreiben. Welche NetApp-Architektur passt?",
    "a": [
      "Nur eine physische Platte",
      "Standard Cluster",
      "Single Loop",
      "Nur Double Loop"
    ],
    "correct": 1,
    "why": "Der Standard Cluster verbindet redundante Controller mit Failover.",
    "wrongReasons": [
      "„Nur eine physische Platte“ erfüllt die geschilderte Anforderung nicht. Der Standard Cluster verbindet redundante Controller mit Failover.",
      "",
      "„Single Loop“ erfüllt die geschilderte Anforderung nicht. Der Standard Cluster verbindet redundante Controller mit Failover.",
      "„Nur Double Loop“ erfüllt die geschilderte Anforderung nicht. Der Standard Cluster verbindet redundante Controller mit Failover."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-8",
    "number": 8,
    "type": "practical",
    "topic": "Storage",
    "q": "Ein Unternehmen möchte sich auch gegen den Ausfall eines gesamten Storage-Standorts absichern. Was ist geeignet?",
    "a": [
      "Metro Cluster",
      "Single Loop",
      "Ein einzelner DAS-Server",
      "RAID 0"
    ],
    "correct": 0,
    "why": "Metro Cluster spiegelt Daten standortübergreifend und ermöglicht Weiterbetrieb am zweiten Standort.",
    "wrongReasons": [
      "",
      "„Single Loop“ erfüllt die geschilderte Anforderung nicht. Metro Cluster spiegelt Daten standortübergreifend und ermöglicht Weiterbetrieb am zweiten Standort.",
      "„Ein einzelner DAS-Server“ erfüllt die geschilderte Anforderung nicht. Metro Cluster spiegelt Daten standortübergreifend und ermöglicht Weiterbetrieb am zweiten Standort.",
      "„RAID 0“ erfüllt die geschilderte Anforderung nicht. Metro Cluster spiegelt Daten standortübergreifend und ermöglicht Weiterbetrieb am zweiten Standort."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-9",
    "number": 9,
    "type": "practical",
    "topic": "Storage",
    "q": "Dieselben Storage-Systeme sollen SMB-Freigaben und iSCSI-LUNs bereitstellen. Was benötigen Sie?",
    "a": [
      "Ausschließlich einen einzelnen DVD-Brenner",
      "RAID 0 ohne Protokoll",
      "Nur Ethernet-Verkabelung ohne Storage-System",
      "Unified Storage"
    ],
    "correct": 3,
    "why": "Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
    "wrongReasons": [
      "„Ausschließlich einen einzelnen DVD-Brenner“ erfüllt die geschilderte Anforderung nicht. Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
      "„RAID 0 ohne Protokoll“ erfüllt die geschilderte Anforderung nicht. Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
      "„Nur Ethernet-Verkabelung ohne Storage-System“ erfüllt die geschilderte Anforderung nicht. Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-2-10",
    "number": 10,
    "type": "practical",
    "topic": "Storage",
    "q": "Ein 24/7-System hat als Ziel, höchstens 15 Minuten Daten zu verlieren. Welche Kennzahl muss festgelegt werden?",
    "a": [
      "MTBF von 15 Monaten",
      "PUE von 15",
      "RPO von 15 Minuten",
      "RTO von 15 Tagen"
    ],
    "correct": 2,
    "why": "RPO beschreibt den maximal angestrebten Datenverlust in Zeit.",
    "wrongReasons": [
      "„MTBF von 15 Monaten“ erfüllt die geschilderte Anforderung nicht. RPO beschreibt den maximal angestrebten Datenverlust in Zeit.",
      "„PUE von 15“ erfüllt die geschilderte Anforderung nicht. RPO beschreibt den maximal angestrebten Datenverlust in Zeit.",
      "",
      "„RTO von 15 Tagen“ erfüllt die geschilderte Anforderung nicht. RPO beschreibt den maximal angestrebten Datenverlust in Zeit."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-1",
    "number": 1,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Unternehmen möchte nach einem Ausfall innerhalb einer Stunde wieder starten. Was wird primär festgelegt?",
    "a": [
      "MTBF von einer Stunde",
      "PUE von einer Stunde",
      "Service Level Requirement für Speicherkosten",
      "RTO von einer Stunde"
    ],
    "correct": 3,
    "why": "RTO ist die angestrebte maximale Wiederherstellungsdauer.",
    "wrongReasons": [
      "„MTBF von einer Stunde“ erfüllt die geschilderte Anforderung nicht. RTO ist die angestrebte maximale Wiederherstellungsdauer.",
      "„PUE von einer Stunde“ erfüllt die geschilderte Anforderung nicht. RTO ist die angestrebte maximale Wiederherstellungsdauer.",
      "„Service Level Requirement für Speicherkosten“ erfüllt die geschilderte Anforderung nicht. RTO ist die angestrebte maximale Wiederherstellungsdauer.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-2",
    "number": 2,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Unternehmen will nur Änderungen seit dem vorigen Backup täglich sichern. Was eignet sich?",
    "a": [
      "Nur Jahresarchivierung",
      "Eine nicht versionierte Replikation",
      "Inkrementelle Sicherung",
      "Tägliche vollständige Sicherung"
    ],
    "correct": 2,
    "why": "Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung.",
    "wrongReasons": [
      "„Nur Jahresarchivierung“ erfüllt die geschilderte Anforderung nicht. Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung.",
      "„Eine nicht versionierte Replikation“ erfüllt die geschilderte Anforderung nicht. Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung.",
      "",
      "„Tägliche vollständige Sicherung“ erfüllt die geschilderte Anforderung nicht. Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-3",
    "number": 3,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Die Wiederherstellung soll mit höchstens zwei Backup-Sätzen möglich sein. Was eignet sich nach dem Vollbackup?",
    "a": [
      "Nur RAID 0",
      "Differenzielle Sicherung",
      "Lange Kette inkrementeller Backups",
      "Nur Replikation"
    ],
    "correct": 1,
    "why": "Vollbackup plus jüngstes Differenzial genügen für eine differenzielle Wiederherstellung.",
    "wrongReasons": [
      "„Nur RAID 0“ erfüllt die geschilderte Anforderung nicht. Vollbackup plus jüngstes Differenzial genügen für eine differenzielle Wiederherstellung.",
      "",
      "„Lange Kette inkrementeller Backups“ erfüllt die geschilderte Anforderung nicht. Vollbackup plus jüngstes Differenzial genügen für eine differenzielle Wiederherstellung.",
      "„Nur Replikation“ erfüllt die geschilderte Anforderung nicht. Vollbackup plus jüngstes Differenzial genügen für eine differenzielle Wiederherstellung."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-4",
    "number": 4,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Das Backup soll nach Ransomware-Angriff vom Netzwerkangriff getrennt sein. Was hilft besonders?",
    "a": [
      "Offline-Air-Gap auf Magnetband",
      "Eine ständig beschreibbare Netzwerkfreigabe",
      "Nur ein RAID 1 im betroffenen Server",
      "Backup mit identischem Admin-Konto im selben Netz"
    ],
    "correct": 0,
    "why": "Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar.",
    "wrongReasons": [
      "",
      "„Eine ständig beschreibbare Netzwerkfreigabe“ erfüllt die geschilderte Anforderung nicht. Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar.",
      "„Nur ein RAID 1 im betroffenen Server“ erfüllt die geschilderte Anforderung nicht. Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar.",
      "„Backup mit identischem Admin-Konto im selben Netz“ erfüllt die geschilderte Anforderung nicht. Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-5",
    "number": 5,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Unternehmen muss Datenstände täglich, wöchentlich und monatlich aufbewahren. Welche Rotation wählen Sie?",
    "a": [
      "Nur RAID 5",
      "OpenFlow",
      "Rapid Elasticity",
      "Grandfather–Father–Son"
    ],
    "correct": 3,
    "why": "Das Generationenprinzip hält tägliche, wöchentliche und monatliche Sicherungen vor.",
    "wrongReasons": [
      "„Nur RAID 5“ erfüllt die geschilderte Anforderung nicht. Das Generationenprinzip hält tägliche, wöchentliche und monatliche Sicherungen vor.",
      "„OpenFlow“ erfüllt die geschilderte Anforderung nicht. Das Generationenprinzip hält tägliche, wöchentliche und monatliche Sicherungen vor.",
      "„Rapid Elasticity“ erfüllt die geschilderte Anforderung nicht. Das Generationenprinzip hält tägliche, wöchentliche und monatliche Sicherungen vor.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-6",
    "number": 6,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Viele gleiche Windows-VMs sollen gesichert werden, die Leitung zum Backupserver ist knapp. Was wählen Sie?",
    "a": [
      "Jede VM vollständig ohne Deduplizierung übertragen",
      "Ausschließlich stärkere Kühlung",
      "Blockbasierte Client-Side-Deduplizierung",
      "Serverseitige Deduplizierung erst nach Übertragung aller Daten"
    ],
    "correct": 2,
    "why": "Clientseitige Blockdeduplizierung reduziert identische Daten bereits vor dem Netzwerktransfer.",
    "wrongReasons": [
      "„Jede VM vollständig ohne Deduplizierung übertragen“ erfüllt die geschilderte Anforderung nicht. Clientseitige Blockdeduplizierung reduziert identische Daten bereits vor dem Netzwerktransfer.",
      "„Ausschließlich stärkere Kühlung“ erfüllt die geschilderte Anforderung nicht. Clientseitige Blockdeduplizierung reduziert identische Daten bereits vor dem Netzwerktransfer.",
      "",
      "„Serverseitige Deduplizierung erst nach Übertragung aller Daten“ erfüllt die geschilderte Anforderung nicht. Clientseitige Blockdeduplizierung reduziert identische Daten bereits vor dem Netzwerktransfer."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-7",
    "number": 7,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Backup-Protokoll meldet Erfolg, aber niemand hat einen Restore versucht. Was ist als Nächstes nötig?",
    "a": [
      "Die RTO ohne Test halbieren",
      "Wiederherstellung unter realistischen Bedingungen testen",
      "Nur das Firmenlogo der Software ändern",
      "Sofortige Löschung der letzten Backups"
    ],
    "correct": 1,
    "why": "Erst ein erfolgreicher Test zeigt, dass die Daten tatsächlich wiederherstellbar sind.",
    "wrongReasons": [
      "„Die RTO ohne Test halbieren“ erfüllt die geschilderte Anforderung nicht. Erst ein erfolgreicher Test zeigt, dass die Daten tatsächlich wiederherstellbar sind.",
      "",
      "„Nur das Firmenlogo der Software ändern“ erfüllt die geschilderte Anforderung nicht. Erst ein erfolgreicher Test zeigt, dass die Daten tatsächlich wiederherstellbar sind.",
      "„Sofortige Löschung der letzten Backups“ erfüllt die geschilderte Anforderung nicht. Erst ein erfolgreicher Test zeigt, dass die Daten tatsächlich wiederherstellbar sind."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-8",
    "number": 8,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Server muss nach Totalausfall inklusive Betriebssystem zurückgespielt werden. Was hilft?",
    "a": [
      "Image Backup",
      "Nur Export einzelner Textdateien",
      "Ein reiner NAS-Switch",
      "Nur SLA ohne Daten"
    ],
    "correct": 0,
    "why": "Ein Image Backup enthält auch Betriebssystem und Einstellungen.",
    "wrongReasons": [
      "",
      "„Nur Export einzelner Textdateien“ erfüllt die geschilderte Anforderung nicht. Ein Image Backup enthält auch Betriebssystem und Einstellungen.",
      "„Ein reiner NAS-Switch“ erfüllt die geschilderte Anforderung nicht. Ein Image Backup enthält auch Betriebssystem und Einstellungen.",
      "„Nur SLA ohne Daten“ erfüllt die geschilderte Anforderung nicht. Ein Image Backup enthält auch Betriebssystem und Einstellungen."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-9",
    "number": 9,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Lokale Backups sind vorhanden, ein Brand könnte aber alles zerstören. Was sollte ergänzt werden?",
    "a": [
      "Mehr Backups am selben ungeschützten Standort",
      "RAID 0 statt Backup",
      "Löschen aller Sicherungsprotokolle",
      "Räumlich getrennte gesicherte Kopie"
    ],
    "correct": 3,
    "why": "Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
    "wrongReasons": [
      "„Mehr Backups am selben ungeschützten Standort“ erfüllt die geschilderte Anforderung nicht. Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
      "„RAID 0 statt Backup“ erfüllt die geschilderte Anforderung nicht. Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
      "„Löschen aller Sicherungsprotokolle“ erfüllt die geschilderte Anforderung nicht. Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-3-10",
    "number": 10,
    "type": "practical",
    "topic": "Backup & Restore",
    "q": "Ein Backup muss kurzfristige Restores und langjährige Aufbewahrung leisten. Was ist sinnvoll?",
    "a": [
      "Ausschließlich Arbeitsspeicher",
      "Verzicht auf Aufbewahrungsregeln",
      "Schnelle HDD/SSD-Ebene mit zusätzlichen Offline-Tapes",
      "Nur eine SSD ohne Sicherungshistorie"
    ],
    "correct": 2,
    "why": "Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien.",
    "wrongReasons": [
      "„Ausschließlich Arbeitsspeicher“ erfüllt die geschilderte Anforderung nicht. Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien.",
      "„Verzicht auf Aufbewahrungsregeln“ erfüllt die geschilderte Anforderung nicht. Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien.",
      "",
      "„Nur eine SSD ohne Sicherungshistorie“ erfüllt die geschilderte Anforderung nicht. Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-1",
    "number": 1,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Unternehmen möchte eine sofort nutzbare Buchhaltungssoftware im Browser. Welches Cloud-Modell ist passend?",
    "a": [
      "IaaS mit eigenem Betriebssystem und Eigenentwicklung",
      "Nur Fibre-Channel-SAN",
      "RAID 10",
      "SaaS"
    ],
    "correct": 3,
    "why": "SaaS stellt eine fertige Anwendung als Dienst bereit.",
    "wrongReasons": [
      "„IaaS mit eigenem Betriebssystem und Eigenentwicklung“ erfüllt die geschilderte Anforderung nicht. SaaS stellt eine fertige Anwendung als Dienst bereit.",
      "„Nur Fibre-Channel-SAN“ erfüllt die geschilderte Anforderung nicht. SaaS stellt eine fertige Anwendung als Dienst bereit.",
      "„RAID 10“ erfüllt die geschilderte Anforderung nicht. SaaS stellt eine fertige Anwendung als Dienst bereit.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-2",
    "number": 2,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Entwickler will eigenen Anwendungscode betreiben, aber die Plattform nicht administrieren. Was passt?",
    "a": [
      "Ein reines Tape-Archiv",
      "Manuelle Netzwerkkonfiguration aller Router",
      "PaaS",
      "Nur eine lokale SSD"
    ],
    "correct": 2,
    "why": "PaaS stellt eine gemanagte Entwicklungs- und Laufzeitplattform bereit.",
    "wrongReasons": [
      "„Ein reines Tape-Archiv“ erfüllt die geschilderte Anforderung nicht. PaaS stellt eine gemanagte Entwicklungs- und Laufzeitplattform bereit.",
      "„Manuelle Netzwerkkonfiguration aller Router“ erfüllt die geschilderte Anforderung nicht. PaaS stellt eine gemanagte Entwicklungs- und Laufzeitplattform bereit.",
      "",
      "„Nur eine lokale SSD“ erfüllt die geschilderte Anforderung nicht. PaaS stellt eine gemanagte Entwicklungs- und Laufzeitplattform bereit."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-3",
    "number": 3,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Unternehmen benötigt virtuelle Server und möchte Betriebssystem und Anwendung selbst verwalten. Was passt?",
    "a": [
      "Ein lokaler DVD-Server",
      "IaaS",
      "SaaS",
      "Only Backup as a Service"
    ],
    "correct": 1,
    "why": "IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet.",
    "wrongReasons": [
      "„Ein lokaler DVD-Server“ erfüllt die geschilderte Anforderung nicht. IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet.",
      "",
      "„SaaS“ erfüllt die geschilderte Anforderung nicht. IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet.",
      "„Only Backup as a Service“ erfüllt die geschilderte Anforderung nicht. IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-4",
    "number": 4,
    "type": "practical",
    "topic": "Cloud",
    "q": "Vertrauliche Systeme bleiben intern; Lastspitzen laufen zusätzlich in einer Public Cloud. Welches Modell liegt vor?",
    "a": [
      "Hybrid Cloud",
      "Reine Community Cloud",
      "Ausschließlich lokale DAS-Platten",
      "Nur eine Public Cloud ohne private Ressourcen"
    ],
    "correct": 0,
    "why": "Hybrid Cloud kombiniert beispielsweise Private und Public Cloud.",
    "wrongReasons": [
      "",
      "„Reine Community Cloud“ erfüllt die geschilderte Anforderung nicht. Hybrid Cloud kombiniert beispielsweise Private und Public Cloud.",
      "„Ausschließlich lokale DAS-Platten“ erfüllt die geschilderte Anforderung nicht. Hybrid Cloud kombiniert beispielsweise Private und Public Cloud.",
      "„Nur eine Public Cloud ohne private Ressourcen“ erfüllt die geschilderte Anforderung nicht. Hybrid Cloud kombiniert beispielsweise Private und Public Cloud."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-5",
    "number": 5,
    "type": "practical",
    "topic": "Cloud",
    "q": "Eine Firma möchte mehrere Cloud-Anbieter parallel nutzen, um Anbieterbindung zu reduzieren. Wie nennt man das?",
    "a": [
      "RAID 6",
      "Single Loop",
      "Sessionvirtualisierung",
      "Multi Cloud"
    ],
    "correct": 3,
    "why": "Multi Cloud verteilt Dienste auf mehrere Anbieter; das reduziert, beseitigt aber nicht jede Abhängigkeit.",
    "wrongReasons": [
      "„RAID 6“ erfüllt die geschilderte Anforderung nicht. Multi Cloud verteilt Dienste auf mehrere Anbieter; das reduziert, beseitigt aber nicht jede Abhängigkeit.",
      "„Single Loop“ erfüllt die geschilderte Anforderung nicht. Multi Cloud verteilt Dienste auf mehrere Anbieter; das reduziert, beseitigt aber nicht jede Abhängigkeit.",
      "„Sessionvirtualisierung“ erfüllt die geschilderte Anforderung nicht. Multi Cloud verteilt Dienste auf mehrere Anbieter; das reduziert, beseitigt aber nicht jede Abhängigkeit.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-6",
    "number": 6,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein IT-Team möchte Regeln für viele Switches zentral ändern. Was ist besonders geeignet?",
    "a": [
      "Ein zusätzlicher RAID-Controller",
      "Manuelle Änderung jedes einzelnen Switches",
      "Software Defined Networking",
      "Nur Magnetbandrotation"
    ],
    "correct": 2,
    "why": "SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung.",
    "wrongReasons": [
      "„Ein zusätzlicher RAID-Controller“ erfüllt die geschilderte Anforderung nicht. SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung.",
      "„Manuelle Änderung jedes einzelnen Switches“ erfüllt die geschilderte Anforderung nicht. SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung.",
      "",
      "„Nur Magnetbandrotation“ erfüllt die geschilderte Anforderung nicht. SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-7",
    "number": 7,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Unternehmen will Speicher herstellerübergreifend per Software verwalten. Was passt?",
    "a": [
      "Nur ein SLA",
      "Software Defined Storage",
      "Ein einzelner DVD-Brenner",
      "Eine klassische nur lokal beschreibbare Festplatte"
    ],
    "correct": 1,
    "why": "SDS abstrahiert Speicherfunktionen von der physischen Hardware.",
    "wrongReasons": [
      "„Nur ein SLA“ erfüllt die geschilderte Anforderung nicht. SDS abstrahiert Speicherfunktionen von der physischen Hardware.",
      "",
      "„Ein einzelner DVD-Brenner“ erfüllt die geschilderte Anforderung nicht. SDS abstrahiert Speicherfunktionen von der physischen Hardware.",
      "„Eine klassische nur lokal beschreibbare Festplatte“ erfüllt die geschilderte Anforderung nicht. SDS abstrahiert Speicherfunktionen von der physischen Hardware."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-8",
    "number": 8,
    "type": "practical",
    "topic": "Cloud",
    "q": "Vor einem Cloud-Vertragsabschluss sind mögliche Datenstandorte und Subunternehmer unklar. Was ist ratsam?",
    "a": [
      "Aufklärung und vertragliche Regelung vor Vertragsabschluss",
      "Ungeprüfte sofortige Datenmigration",
      "Verzicht auf Datenschutzprüfung",
      "Nur billigsten Preis vergleichen"
    ],
    "correct": 0,
    "why": "Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten.",
    "wrongReasons": [
      "",
      "„Ungeprüfte sofortige Datenmigration“ erfüllt die geschilderte Anforderung nicht. Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten.",
      "„Verzicht auf Datenschutzprüfung“ erfüllt die geschilderte Anforderung nicht. Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten.",
      "„Nur billigsten Preis vergleichen“ erfüllt die geschilderte Anforderung nicht. Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-9",
    "number": 9,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Betrieb ist von einer Cloud-Plattform abhängig und möchte den Anbieter wechseln. Was sollte bereits zu Beginn geplant werden?",
    "a": [
      "Nur das Logo des neuen Anbieters",
      "Verzicht auf alle Testmigrationen",
      "Keine Verträge über Datenrückgabe",
      "Export, Migration und sichere Löschung beim bisherigen Anbieter"
    ],
    "correct": 3,
    "why": "Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
    "wrongReasons": [
      "„Nur das Logo des neuen Anbieters“ erfüllt die geschilderte Anforderung nicht. Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
      "„Verzicht auf alle Testmigrationen“ erfüllt die geschilderte Anforderung nicht. Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
      "„Keine Verträge über Datenrückgabe“ erfüllt die geschilderte Anforderung nicht. Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
      ""
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  },
  {
    "id": "practical-4-10",
    "number": 10,
    "type": "practical",
    "topic": "Cloud",
    "q": "Ein Anbieter zeigt ein C5-Testat. Welche Schlussfolgerung ist korrekt?",
    "a": [
      "Alle denkbaren Angriffe sind ausgeschlossen",
      "Die Cloud erfüllt automatisch jedes Datenschutzgesetz weltweit",
      "Es bietet einen geprüften Sicherheitsnachweis im beschriebenen Umfang, aber keine absolute Sicherheitsgarantie",
      "Der Kunde muss keinerlei Berechtigungen mehr prüfen"
    ],
    "correct": 2,
    "why": "C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen.",
    "wrongReasons": [
      "„Alle denkbaren Angriffe sind ausgeschlossen“ erfüllt die geschilderte Anforderung nicht. C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen.",
      "„Die Cloud erfüllt automatisch jedes Datenschutzgesetz weltweit“ erfüllt die geschilderte Anforderung nicht. C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen.",
      "",
      "„Der Kunde muss keinerlei Berechtigungen mehr prüfen“ erfüllt die geschilderte Anforderung nicht. C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  }
];
