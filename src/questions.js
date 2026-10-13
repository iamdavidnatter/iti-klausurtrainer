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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Höhere Abhängigkeit von Hardware-Herstellern“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die zentralisierte Control Plane kann ohne redundante Controller einen Single Point of Failure bilden.",
      "„Höhere Hardware- und Betriebskosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die zentralisierte Control Plane kann ohne redundante Controller einen Single Point of Failure bilden.",
      "",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Steigender Wartungs- und Verwaltungsaufwand für das gesamte Netzwerk“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "RAID 5 verteilt Daten und eine Paritätsinformation; damit lässt sich der Ausfall genau eines Laufwerks abfangen. Deshalb ist „RAID 5 und RAID 6“ hier nicht die gesuchte Antwort.",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 5 und RAID 10“ hier nicht die gesuchte Antwort.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0 und RAID 1“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Integrated Disc Electronics“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SAS steht für Serial Attached SCSI und verwendet das SCSI-Protokoll.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel“ hier nicht die gesuchte Antwort.",
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „Advanced Technology Attachement“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Gekühlte Zuluft wird via Doppelboden in die Kaltgänge eingeblasen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Einheitliche Temperaturgradienten in allen Racks sind durch die reine vertikale Unterbodenverteilung nicht gewährleistet.",
      "",
      "„Warme Luft steigt auf und wird von der Kühlung angesaugt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Einheitliche Temperaturgradienten in allen Racks sind durch die reine vertikale Unterbodenverteilung nicht gewährleistet.",
      "Das Warm-/Kaltgang-Konzept trennt die kalte Serverzuluft von der warmen Abluft und verhindert ineffiziente Rückströmungen. Deshalb ist „Konstruktion nach dem Warm- und Kaltgangkonzept nötig“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 1“ hier nicht die gesuchte Antwort.",
      "RAID 5 verteilt Daten und eine Paritätsinformation; damit lässt sich der Ausfall genau eines Laufwerks abfangen. Deshalb ist „RAID 5“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Nahtlose Integration von Software Rollout Tools (wie System Center)“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Komplexe Fallback-Szenarien sind kein Vorteil beziehungsweise keine sinnvolle Begründung für Applikationsvirtualisierung.",
      "„Betrieb inkompatibler Softwarestände in einer Umgebung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Komplexe Fallback-Szenarien sind kein Vorteil beziehungsweise keine sinnvolle Begründung für Applikationsvirtualisierung.",
      "",
      "„Effizientes Lifecycle-Management von 24x7 Applikationen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Komplexe Fallback-Szenarien sind kein Vorteil beziehungsweise keine sinnvolle Begründung für Applikationsvirtualisierung."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Software as a Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: PaaS ermöglicht die Bereitstellung eigener Applikationen; die zugrunde liegende Plattform wird vom Anbieter betrieben.",
      "",
      "„Infrastructure as a Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: PaaS ermöglicht die Bereitstellung eigener Applikationen; die zugrunde liegende Plattform wird vom Anbieter betrieben.",
      "„Hosting“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: PaaS ermöglicht die Bereitstellung eigener Applikationen; die zugrunde liegende Plattform wird vom Anbieter betrieben."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung. Deshalb ist „Storage vMotion“ hier nicht die gesuchte Antwort.",
      "HA startet bei Hostausfällen betroffene VMs auf einem verfügbaren Host neu; ein kurzer Unterbruch kann auftreten. Deshalb ist „High Availability“ hier nicht die gesuchte Antwort.",
      "„Dynamic Ressource Sheduler“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DPM reduziert den Energieverbrauch durch Konsolidierung von VMs und Abschalten nicht benötigter Hosts.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„MTBR“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: MTBF ist die durchschnittliche Zeit zwischen zwei Ausfällen.",
      "MTTR beschreibt die mittlere Zeitspanne, die zur Wiederherstellung oder Reparatur benötigt wird. Deshalb ist „MTTR“ hier nicht die gesuchte Antwort.",
      "",
      "MTTF ist die mittlere Betriebszeit bis zum Ausfall einer Komponente. Deshalb ist „MTTF“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Products and Services Agreement“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei Microsoft-Volumenlizenzverträgen regeln die Produktbestimmungen die konkreten Nutzungsrechte.",
      "Enterprise Agreement ist ein Microsoft-Volumenlizenzvertrag für größere Organisationen. Deshalb ist „Enterprise Agreement“ hier nicht die gesuchte Antwort.",
      "",
      "„Lizenzbestimmungen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei Microsoft-Volumenlizenzverträgen regeln die Produktbestimmungen die konkreten Nutzungsrechte."
    ]
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
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau",
    "wrongReasons": [
      "",
      "„SnapMirror“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: MetroCluster wird in den Vortragsfolien als standortübergreifende Redundanzlösung mit synchroner Spiegelung und sehr kurzen Wiederanlaufzielen behandelt. Die Frage nennt versehentlich zweimal RPO.",
      "Ein Snapshot hält einen Datenzustand zu einem Zeitpunkt fest, ist aber ohne separate Aufbewahrung kein vollständiger Ersatz für unabhängige Backups. Deshalb ist „Snapshot“ hier nicht die gesuchte Antwort.",
      "„SnapVault“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: MetroCluster wird in den Vortragsfolien als standortübergreifende Redundanzlösung mit synchroner Spiegelung und sehr kurzen Wiederanlaufzielen behandelt. Die Frage nennt versehentlich zweimal RPO."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Betriebssystemvirtualisierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein zentral bereitgestellter Windows-Desktop, auf den Nutzer über eine Sitzung zugreifen, ist Sessionvirtualisierung.",
      "Applikationsvirtualisierung kapselt Anwendungen und erleichtert deren Bereitstellung unabhängig von einer klassischen lokalen Installation. Deshalb ist „Applikationsvirtualisierung“ hier nicht die gesuchte Antwort.",
      "",
      "„Hardwarevirtualisierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein zentral bereitgestellter Windows-Desktop, auf den Nutzer über eine Sitzung zugreifen, ist Sessionvirtualisierung."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Open License“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Open Value Companywide ist das in den Folien passende Modell für kleine Unternehmen mit Vollstandardisierung und Softwarewartung.",
      "„Open Value“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Open Value Companywide ist das in den Folien passende Modell für kleine Unternehmen mit Vollstandardisierung und Softwarewartung.",
      "Enterprise Agreement ist ein Microsoft-Volumenlizenzvertrag für größere Organisationen. Deshalb ist „Enterprise Agreement“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Dateibasiert, Server-Side“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockbasierte Client-Side-Deduplizierung erkennt gleiche Blöcke vor dem Transfer und entlastet die langsame Netzwerkverbindung.",
      "„Dateibasiert, Client-Side“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockbasierte Client-Side-Deduplizierung erkennt gleiche Blöcke vor dem Transfer und entlastet die langsame Netzwerkverbindung.",
      "„Blockbasiert, Server-Side“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockbasierte Client-Side-Deduplizierung erkennt gleiche Blöcke vor dem Transfer und entlastet die langsame Netzwerkverbindung.",
      ""
    ]
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
    "why": "Ein Rechenzentrum ist",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Ein Rechenzentrum ist eine technische Einheit, die Rechen- und Serviceleistungen verteilt anbietet und über leistungsfähige IT-Systeme verfügt.“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Rechenzentrum ist",
      "",
      "„Ein Rechenzentrum ist eine technische Einheit, die Rechen- und Serviceleistungen zentralisiert anbietet und über leistungsfähige IT-Systeme verfügt.“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Rechenzentrum ist",
      "„Ein Rechenzentrum ist eine organisatorische Einheit, die Rechen- und Serviceleistungen verteilt anbietet und über leistungsfähige IT-Systeme verfügt.“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Rechenzentrum ist"
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "DRS verteilt Workloads nach der Auslastung verfügbarer Hosts. Deshalb ist „Distributed Resources Scheduler“ hier nicht die gesuchte Antwort.",
      "",
      "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung. Deshalb ist „vMotion“ hier nicht die gesuchte Antwort.",
      "HA startet bei Hostausfällen betroffene VMs auf einem verfügbaren Host neu; ein kurzer Unterbruch kann auftreten. Deshalb ist „High Availability“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "SAS ist",
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „SATA“ hier nicht die gesuchte Antwort.",
      "",
      "„SCSI“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SAS ist",
      "„ATA“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SAS ist"
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit. Deshalb ist „Storage Area Network“ hier nicht die gesuchte Antwort.",
      "NAS stellt Dateien über ein Netzwerk bereit, typischerweise über SMB oder NFS für mehrere Benutzer. Deshalb ist „Network Attached Storage“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Viele Sicherheitsfeatures“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine physische Umgebung kann hinsichtlich bestimmter Lizenzierungsmodelle einfacher sein; die anderen Optionen sprechen eher für Virtualisierung.",
      "„Dynamische Optimierung im Betrieb“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine physische Umgebung kann hinsichtlich bestimmter Lizenzierungsmodelle einfacher sein; die anderen Optionen sprechen eher für Virtualisierung.",
      "",
      "„Plattformunabhängiger Betrieb“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine physische Umgebung kann hinsichtlich bestimmter Lizenzierungsmodelle einfacher sein; die anderen Optionen sprechen eher für Virtualisierung."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "SDS abstrahiert Speicherfunktionen von der physischen Hardware und verwaltet sie softwaregestützt. Deshalb ist „SDS abstrahiert die Storage Hardware“ hier nicht die gesuchte Antwort.",
      "SDS abstrahiert Speicherfunktionen von der physischen Hardware und verwaltet sie softwaregestützt. Deshalb ist „SDS ist eine Storagearchitektur“ hier nicht die gesuchte Antwort.",
      "",
      "SDS abstrahiert Speicherfunktionen von der physischen Hardware und verwaltet sie softwaregestützt. Deshalb ist „SDS bedeutet Unabhängigkeit von der Hardware“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Hohe Kosten aufgrund des konsolidierten Betriebs“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei Hyperconverged Infrastructure wird eingeschränkter Mischbetrieb ausdrücklich als Nachteil genannt.",
      "„Geringere Agilität bei der Reaktion auf neue Anforderungen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei Hyperconverged Infrastructure wird eingeschränkter Mischbetrieb ausdrücklich als Nachteil genannt.",
      "„Komplexerer Betrieb“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei Hyperconverged Infrastructure wird eingeschränkter Mischbetrieb ausdrücklich als Nachteil genannt.",
      ""
    ]
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
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau",
    "wrongReasons": [
      "„Virtualization, Operating System“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Im dargestellten Servicemodell unterscheiden sich IaaS und PaaS vor allem bei Betriebssystem und verwalteten Datenbankdiensten. Die exakte Grenze hängt vom Dienst ab.",
      "„Databases, Application“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Im dargestellten Servicemodell unterscheiden sich IaaS und PaaS vor allem bei Betriebssystem und verwalteten Datenbankdiensten. Die exakte Grenze hängt vom Dienst ab.",
      "",
      "„Physical Servers, Virtualization“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Im dargestellten Servicemodell unterscheiden sich IaaS und PaaS vor allem bei Betriebssystem und verwalteten Datenbankdiensten. Die exakte Grenze hängt vom Dienst ab."
    ]
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
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau",
    "wrongReasons": [
      "„Einheitliches Datenschutz- und Datensicherheitskonzept“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Multi-Cloud kann die Bindung an einen einzigen Anbieter reduzieren; vollständig ausgeschlossen ist Lock-in in der Praxis nicht.",
      "„Einfache Verwaltung und Abrechnung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Multi-Cloud kann die Bindung an einen einzigen Anbieter reduzieren; vollständig ausgeschlossen ist Lock-in in der Praxis nicht.",
      "",
      "„Geringe Komplexität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Multi-Cloud kann die Bindung an einen einzigen Anbieter reduzieren; vollständig ausgeschlossen ist Lock-in in der Praxis nicht."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Medienset beinhaltet die vollständige Datenmenge“ hier nicht die gesuchte Antwort.",
      "„Geringer Datenzuwachs, da nur Differenzen zur letzten Sicherung gespeichert werden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei differenziellen Sicherungen genügen die letzte Vollsicherung und das letzte Differenzial-Backup für einen Restore.",
      "",
      "„Kurze Laufzeiten, da nur Differenzen zur letzten Sicherung gespeichert werden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei differenziellen Sicherungen genügen die letzte Vollsicherung und das letzte Differenzial-Backup für einen Restore."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Energieverbrauch“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die grundlegende Rechenzentrumskategorisierung erfolgt unter anderem nach Fläche, Systemanzahl und Energiebedarf, nicht primär nach geografischer Lage.",
      "„Raumfläche“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die grundlegende Rechenzentrumskategorisierung erfolgt unter anderem nach Fläche, Systemanzahl und Energiebedarf, nicht primär nach geografischer Lage.",
      "„Anzahl der Systeme“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die grundlegende Rechenzentrumskategorisierung erfolgt unter anderem nach Fläche, Systemanzahl und Energiebedarf, nicht primär nach geografischer Lage.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel ist ein optischer Übertragungskanal“ hier nicht die gesuchte Antwort.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel ist ein auf dem ISO/OSI Modell basierendes Protokoll“ hier nicht die gesuchte Antwort.",
      "",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel ist ein Datenkanal für Lichtwellenleiter“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Verdichtete Bauweise“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Towerserver können meist ohne speziellen Serverschrank unkompliziert aufgestellt werden.",
      "„Redundante Lüfter“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Towerserver können meist ohne speziellen Serverschrank unkompliziert aufgestellt werden.",
      "„Einheitliches Remote-Management“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Towerserver können meist ohne speziellen Serverschrank unkompliziert aufgestellt werden.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Performance Ebene“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Tape ist aufgrund seines Kosten-/Kapazitätsverhältnisses für die Archivebene geeignet.",
      "„Kapazitäts Ebene“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Tape ist aufgrund seines Kosten-/Kapazitätsverhältnisses für die Archivebene geeignet.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Optimierte vertikale Unterbodenverteilung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Deckenkanal erlaubt Luftführung ohne Doppelboden.",
      "„Vertikale Unterbodenverteilung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Deckenkanal erlaubt Luftführung ohne Doppelboden.",
      "„Kühlung durch geöffnete Fenster“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Deckenkanal erlaubt Luftführung ohne Doppelboden.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Products and Services Agreement“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Für große Unternehmen mit Vollstandardisierung und Software Assurance nennt die Unterlage das Enterprise Agreement.",
      "„Open License“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Für große Unternehmen mit Vollstandardisierung und Software Assurance nennt die Unterlage das Enterprise Agreement.",
      "",
      "Open Value Companywide war ein Volumenlizenzmodell für die vollständige Standardisierung kleinerer Organisationen. Deshalb ist „Open Value Companywide“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "",
      "„Reduktion der Investitionskosten in eigene IT-Infrastruktur“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugang zu modernen Technologien ist eine strategische Cloud-Chance; die anderen Antworten betreffen finanzielle und operative Aspekte.",
      "„Reduzierter Administrations- und Wartungsaufwand“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugang zu modernen Technologien ist eine strategische Cloud-Chance; die anderen Antworten betreffen finanzielle und operative Aspekte.",
      "„Schnelle Skalierung der IT-Infrastruktur“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugang zu modernen Technologien ist eine strategische Cloud-Chance; die anderen Antworten betreffen finanzielle und operative Aspekte."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollständig“ hier nicht die gesuchte Antwort.",
      "Ein synthetisches Vollbackup wird aus vorhandenen Voll- und Änderungssicherungen zusammengesetzt, ohne sämtliche Originaldaten erneut zu lesen. Deshalb ist „Synthetisch“ hier nicht die gesuchte Antwort.",
      "",
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Differenziell“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Multi Cloud“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Selective Cloud“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Community Cloud“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Double Loop fügt einen weiteren Verbindungsweg zu Laufwerken hinzu, ersetzt aber keinen redundanten Controller. Deshalb ist „Double Loop“ hier nicht die gesuchte Antwort.",
      "",
      "Ein MetroCluster schützt durch verteilte Standorte und gespiegelte Daten zusätzlich gegen einen Standortausfall. Deshalb ist „Metro Cluster“ hier nicht die gesuchte Antwort.",
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "RTO legt fest, bis wann ein ausgefallenes System wieder betriebsbereit sein soll. Deshalb ist „Recovery Time Objective“ hier nicht die gesuchte Antwort.",
      "„Mean-Time to Recovery“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RPO ist die zeitliche Grenze des tolerierbaren Datenverlusts rückblickend vom Ausfall.",
      "",
      "„Mean-Time to Desaster“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RPO ist die zeitliche Grenze des tolerierbaren Datenverlusts rückblickend vom Ausfall."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Hyperconverged Infrastructure“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Converged Infrastructure fasst Computing-, Storage- und Netzwerkkomponenten in einer kombinierten Infrastruktur zusammen.",
      "„Traditional Infrastructure“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Converged Infrastructure fasst Computing-, Storage- und Netzwerkkomponenten in einer kombinierten Infrastruktur zusammen.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Cloud Infrastructure“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "",
      "„Abstraktion der in der Hardware implementierten Datenschicht“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Control Plane ist für Entscheidungen über die Steuerung des Datenverkehrs zuständig; die Data Plane leitet Pakete weiter.",
      "„Fusion von Infrastruktur und deren Konfiguration“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Control Plane ist für Entscheidungen über die Steuerung des Datenverkehrs zuständig; die Data Plane leitet Pakete weiter.",
      "„Paketweiterleitung findet Destination-Based statt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Control Plane ist für Entscheidungen über die Steuerung des Datenverkehrs zuständig; die Data Plane leitet Pakete weiter."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Hoher Hardwareaufwand“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist typischerweise auf Scale-up-Erweiterungen begrenzt.",
      "„Lange Laufzeiten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist typischerweise auf Scale-up-Erweiterungen begrenzt.",
      "",
      "„Zusätzlicher Protokollaufwand“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist typischerweise auf Scale-up-Erweiterungen begrenzt."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Measured Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Rapid Elasticity bedeutet schnelles bedarfsgerechtes Hoch- und Herunterskalieren von Ressourcen.",
      "",
      "„On-Demand Self Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Rapid Elasticity bedeutet schnelles bedarfsgerechtes Hoch- und Herunterskalieren von Ressourcen.",
      "„Broad Network Access“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Rapid Elasticity bedeutet schnelles bedarfsgerechtes Hoch- und Herunterskalieren von Ressourcen."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "",
      "„Notstromaggregat“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Kaltwassertank speichert Kälteenergie; eine Kältemaschine erzeugt Kälte.",
      "„Kältemaschine“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Kaltwassertank speichert Kälteenergie; eine Kältemaschine erzeugt Kälte.",
      "„Batterien“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Kaltwassertank speichert Kälteenergie; eine Kältemaschine erzeugt Kälte."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollständige Redundanz“ hier nicht die gesuchte Antwort.",
      "",
      "„Hohe Write Penalty“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RAID 0 verteilt Datenblöcke über mehrere Disks und kann dadurch die Performance erhöhen, bietet aber keine Redundanz.",
      "„Doppelte Festplattenkapazität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RAID 0 verteilt Datenblöcke über mehrere Disks und kann dadurch die Performance erhöhen, bietet aber keine Redundanz."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Direct Attached Storage“ hier nicht die gesuchte Antwort.",
      "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit. Deshalb ist „Storage Area Network“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Hardwareunabhängigkeit“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Partitionierung bezeichnet die Aufteilung physischer Ressourcen eines Hosts auf mehrere VMs.",
      "Isolierung trennt die Ausführung unterschiedlicher virtueller Maschinen voneinander. Deshalb ist „Isolierung“ hier nicht die gesuchte Antwort.",
      "Einkapselung bündelt den Zustand einer virtuellen Maschine, damit er leichter gespeichert oder übertragen werden kann. Deshalb ist „Einkapselung“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "„Endpoint Protection“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Office-Plug-ins können im Kontext der dargestellten Applikationsvirtualisierung paketiert werden; Treiber und Windows-Hotfixes nicht.",
      "",
      "„Druckertreiber“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Office-Plug-ins können im Kontext der dargestellten Applikationsvirtualisierung paketiert werden; Treiber und Windows-Hotfixes nicht.",
      "„Windows Hotfixes“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Office-Plug-ins können im Kontext der dargestellten Applikationsvirtualisierung paketiert werden; Treiber und Windows-Hotfixes nicht."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "FIFO löscht oder überschreibt zuerst den ältesten Sicherungsstand. Deshalb ist „First In - Last Out“ hier nicht die gesuchte Antwort.",
      "FIFO löscht oder überschreibt zuerst den ältesten Sicherungsstand. Deshalb ist „First In - First Out“ hier nicht die gesuchte Antwort.",
      "",
      "„Türme von Hanoi“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Grandfather-Father-Son rotiert tägliche, wöchentliche und monatliche Backupgenerationen."
    ]
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
    "solutionStatus": "Auslegung nach Vortragsfolien; Fragestellung teilweise ungenau",
    "wrongReasons": [
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Differenziell“ hier nicht die gesuchte Antwort.",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollständig“ hier nicht die gesuchte Antwort.",
      "",
      "Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig. Deshalb ist „Inkrementell“ hier nicht die gesuchte Antwort."
    ]
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
    "solutionStatus": "Eigene Musterlösung nach Vortragsfolien, nicht offiziell bestätigt",
    "wrongReasons": [
      "",
      "„Desktopserver“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Rackserver passt in den vorhandenen 19-Zoll-Schrank.",
      "Ein Towerserver kann wie ein Stand-PC außerhalb eines Racks aufgestellt werden. Deshalb ist „Towerserver“ hier nicht die gesuchte Antwort.",
      "Ein Bladeserver verwendet ein gemeinsames Chassis für mehrere kompakte Servermodule. Deshalb ist „Bladeserver“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Überbrückung kurzfristiger Stromausfälle bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Dauerhafte Stromerzeugung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Überbrückung kurzfristiger Stromausfälle bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Regelung der Internetbandbreite“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Überbrückung kurzfristiger Stromausfälle bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Verschlüsselung sämtlicher Festplatten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Überbrückung kurzfristiger Stromausfälle bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Vertraulichkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Integrität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Verfügbarkeit“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Skalierbarkeit“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Daten sind korrekt und vor unerlaubten Veränderungen geschützt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Hardware wird möglichst günstig beschafft“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Daten sind korrekt und vor unerlaubten Veränderungen geschützt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Server sind jederzeit eingeschaltet“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Daten sind korrekt und vor unerlaubten Veränderungen geschützt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur autorisierte Nutzer melden sich an“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Daten sind korrekt und vor unerlaubten Veränderungen geschützt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Gezielte Versorgung der Servervorderseiten mit gekühlter Luft bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "Eine USV versorgt angeschlossene Systeme bei kurzzeitigen Netzunterbrechungen weiter, bis Strom wieder da ist oder Ersatzversorgung übernimmt. Deshalb ist „Unterbringung der USV-Batterien“ hier nicht die gesuchte Antwort.",
      "„Trennung des Internetzugangs“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Gezielte Versorgung der Servervorderseiten mit gekühlter Luft bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Ableitung warmer Luft über Servervorderseiten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Gezielte Versorgung der Servervorderseiten mit gekühlter Luft bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Um mehr Steckdosen zu erhalten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Um die RAID-Kapazität zu erhöhen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Um Softwarelizenzen zu sparen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Um unerwünschte Vermischung warmer und kalter Luft zu reduzieren bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Montage in einem standardisierten Serverschrank bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Ausschließlich privater Desktop-Einsatz“ hier nicht die gesuchte Antwort.",
      "„Betrieb ohne Stromversorgung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Montage in einem standardisierten Serverschrank bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur ein einzelner Prozessorkern“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Montage in einem standardisierten Serverschrank bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Hohe Packdichte und gemeinschaftlich nutzbare Infrastruktur bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Keine zentrale Verwaltung möglich“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Hohe Packdichte und gemeinschaftlich nutzbare Infrastruktur bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollständige Unabhängigkeit von einem Chassis“ hier nicht die gesuchte Antwort.",
      "„Immer niedrigste Anschaffungskosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Hohe Packdichte und gemeinschaftlich nutzbare Infrastruktur bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Höheneinheit (HE) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Hertz (Hz)“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höheneinheit (HE) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Gigabit pro Sekunde“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höheneinheit (HE) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Terabyte (TB)“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höheneinheit (HE) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "44,45 mm bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„19 mm“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 44,45 mm bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„100 mm“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 44,45 mm bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„10 cm“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 44,45 mm bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Bereitstellung und Verwaltung virtueller Maschinen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Archivierung abgelaufener Verträge“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung und Verwaltung virtueller Maschinen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Physische Gebäudekühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung und Verwaltung virtueller Maschinen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Umsetzung von DNS-Namen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung und Verwaltung virtueller Maschinen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Höhere Auslastung physischer Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Die physischen Stromkosten werden immer null“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höhere Auslastung physischer Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Jede Anwendung benötigt zwingend neue Hardware“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höhere Auslastung physischer Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Alle Backups entfallen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Höhere Auslastung physischer Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Mehrere virtuelle Systeme nutzen Ressourcen eines physischen Servers bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Jede VM benötigt eigenes Rechenzentrum“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Mehrere virtuelle Systeme nutzen Ressourcen eines physischen Servers bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Löschen aller Hardwaretreiber“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Mehrere virtuelle Systeme nutzen Ressourcen eines physischen Servers bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Daten werden immer auf Magnetband gespeichert“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Virtuelle Maschinen sind logisch voneinander getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Alle VMs verwenden zwingend dasselbe Betriebssystem“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Virtuelle Maschinen sind logisch voneinander getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Alle Gastdaten sind öffentlich“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Virtuelle Maschinen sind logisch voneinander getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Keine VM darf das Netzwerk verwenden“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Der Zustand einer VM lässt sich als zusammengehörige virtuelle Einheit handhaben bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Die CPU wird physisch versiegelt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Der Zustand einer VM lässt sich als zusammengehörige virtuelle Einheit handhaben bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Das LAN wird abgeschaltet“ hier nicht die gesuchte Antwort.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Das Betriebssystem ist unlizenzierbar“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung.",
    "wrongReasons": [
      "„Open License“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung.",
      "",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort.",
      "„SnapVault“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung."
    ]
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
    "why": "DRS verteilt Workloads nach der Auslastung verfügbarer Hosts.",
    "wrongReasons": [
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Direct Attached Storage“ hier nicht die gesuchte Antwort.",
      "„Disaster Recovery Point“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DRS verteilt Workloads nach der Auslastung verfügbarer Hosts.",
      "",
      "„Data Center Infrastructure Efficiency“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DRS verteilt Workloads nach der Auslastung verfügbarer Hosts."
    ]
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
    "why": "Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich laufende Verschlüsselung der VM“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Automatische Lizenzkündigung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Jede VM dauerhaft auszuschalten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Neustart betroffener VMs auf anderen Hosts nach einem Host-Ausfall bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "DPM konsolidiert VMs auf weniger Hosts und kann nicht benötigte Hosts in den Stromsparmodus versetzen.",
    "wrongReasons": [
      "",
      "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung. Deshalb ist „Storage vMotion“ hier nicht die gesuchte Antwort.",
      "Software Assurance umfasst je nach Lizenzvertrag Versionsrechte und zusätzliche Wartungs- beziehungsweise Supportleistungen. Deshalb ist „Software Assurance“ hier nicht die gesuchte Antwort.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung.",
    "wrongReasons": [
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 1“ hier nicht die gesuchte Antwort.",
      "",
      "„vCenter Single Sign On“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung.",
      "„Open Value“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung."
    ]
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
    "why": "Zugriff auf eine zentral bereitgestellte Desktopsitzung bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Erstellen einer RAID-Parität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriff auf eine zentral bereitgestellte Desktopsitzung bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Austausch eines Serverlüfters“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriff auf eine zentral bereitgestellte Desktopsitzung bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Aufrüsten einer lokalen Festplatte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriff auf eine zentral bereitgestellte Desktopsitzung bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Getrennte Bereitstellung unterschiedlicher Anwendungsversionen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Notwendigkeit eines physischen PCs für jede Softwareversion“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Getrennte Bereitstellung unterschiedlicher Anwendungsversionen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ersetzung der Netzwerkverkabelung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Getrennte Bereitstellung unterschiedlicher Anwendungsversionen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Verbot von Softwareupdates“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Getrennte Bereitstellung unterschiedlicher Anwendungsversionen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Paketierung einer Anwendung auf einem sauberen Referenzsystem bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Installation aller Programme ausschließlich auf Routern“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Paketierung einer Anwendung auf einem sauberen Referenzsystem bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich mechanische Festplattenspiegelung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Paketierung einer Anwendung auf einem sauberen Referenzsystem bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Einrichtung einer Luftschleuse“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Paketierung einer Anwendung auf einem sauberen Referenzsystem bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Ausfall einzelner Komponenten abfangen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Verhinderung von Softwarevirtualisierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ausfall einzelner Komponenten abfangen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Aufzeichnung aller Benutzergespräche“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ausfall einzelner Komponenten abfangen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Abschaffung jedes Sicherheitskonzepts“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ausfall einzelner Komponenten abfangen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Verringerung der Bildschirmauflösung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur Optimierung von Datenbankabfragen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Automatische Zuordnung von Softwarelizenzen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Schutz von Räumen und IT-Anlagen vor unberechtigtem Zutritt und Schäden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Zusätzliche Leistungen und Versionsrechte gemäß Vertrag bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Eine Art RAID-Controller“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zusätzliche Leistungen und Versionsrechte gemäß Vertrag bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Ein Rackserver wird in einem standardisierten Serverschrank montiert und ist für kompakte Serverräume geeignet. Deshalb ist „Eine Kühltechnik für Rackserver“ hier nicht die gesuchte Antwort.",
      "„Ein Netzwerkprotokoll für Storage“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zusätzliche Leistungen und Versionsrechte gemäß Vertrag bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
    "wrongReasons": [
      "",
      "Ein Subscription-Nutzungsrecht ist zeitlich an den laufenden Abonnementvertrag gebunden. Deshalb ist „Subscription erlaubt immer unbegrenzte Installationen ohne Kosten“ hier nicht die gesuchte Antwort.",
      "Ein Subscription-Nutzungsrecht ist zeitlich an den laufenden Abonnementvertrag gebunden. Deshalb ist „Subscription bezeichnet ausschließlich Hardwaremiete“ hier nicht die gesuchte Antwort.",
      "„Eine Nutzungslizenz läuft immer täglich ab“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet."
    ]
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
    "why": "Open Value Companywide war ein Volumenlizenzmodell für die vollständige Standardisierung kleinerer Organisationen.",
    "wrongReasons": [
      "Ein Subscription-Nutzungsrecht ist zeitlich an den laufenden Abonnementvertrag gebunden. Deshalb ist „RAID Enterprise Subscription“ hier nicht die gesuchte Antwort.",
      "",
      "Grandfather-Father-Son ist ein Rotationsmodell mit täglichen, wöchentlichen und monatlichen Backup-Generationen. Deshalb ist „Enterprise Agreement nur für Einzelpersonen“ hier nicht die gesuchte Antwort.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel Agreement“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Löschen aller VMs nach drei Tagen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Verteilung der Paritätsblöcke“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Tägliche Überprüfung der Servertemperatur“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Regelmäßige Erfassung und Nachlizenzierung eines gestiegenen Lizenzbedarfs bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "SAS verwendet SCSI-Befehle und ist für professionelle Speicheranbindungen mit leistungsfähigen und oft redundanten Wegen geeignet.",
    "wrongReasons": [
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „Serial Advanced Technology Attachment“ hier nicht die gesuchte Antwort.",
      "„Integrated Drive Electronics“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SAS verwendet SCSI-Befehle und ist für professionelle Speicheranbindungen mit leistungsfähigen und oft redundanten Wegen geeignet.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Kostengünstige Speicher und Archivsysteme bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Ausschließlich extrem latenzkritische HPC-Cluster“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostengünstige Speicher und Archivsysteme bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur Glasfaserverbindungen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostengünstige Speicher und Archivsysteme bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Softwarelizenzverwaltung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostengünstige Speicher und Archivsysteme bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Zwei Schnittstellen pro Disk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Verzicht auf Speichercontroller“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Schnittstellen pro Disk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Nur eine maximale Kabellänge von 1 cm“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Schnittstellen pro Disk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich einzelne Schreibwarteschlangen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Schnittstellen pro Disk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Viele parallele Befehlswarteschlangen und kurze Zugriffszeiten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Nur sequentielle Magnetbandzugriffe“ hier nicht die gesuchte Antwort.",
      "„Es benötigt zwingend einen optischen Datenträger“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Viele parallele Befehlswarteschlangen und kurze Zugriffszeiten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Ausschließlich parallele 40-polige Kabel“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Viele parallele Befehlswarteschlangen und kurze Zugriffszeiten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
    "wrongReasons": [
      "„Lizenzschlüsselverwaltung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
      "„HTTP-Webseitenanzeige“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
      "„CPU-Kühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
      ""
    ]
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
    "why": "Just a Bunch of Disks ohne eingebaute RAID-Redundanz bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Daten werden auf zwei Platten gespiegelt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Just a Bunch of Disks ohne eingebaute RAID-Redundanz bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "RAID 6 verwendet zwei unabhängige Paritäten und verträgt den Ausfall von zwei Laufwerken. Deshalb ist „Eine Variante von RAID 6“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Ein spezielles Cloud-Service-Modell“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund.",
    "wrongReasons": [
      "RAID 6 verwendet zwei unabhängige Paritäten und verträgt den Ausfall von zwei Laufwerken. Deshalb ist „RAID 6“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 1“ hier nicht die gesuchte Antwort.",
      "RAID 5 verteilt Daten und eine Paritätsinformation; damit lässt sich der Ausfall genau eines Laufwerks abfangen. Deshalb ist „RAID 5“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Blockweises Striping bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Spiegelung jedes Datenträgers“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockweises Striping bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Standortübergreifende Replikation“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockweises Striping bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Doppelte Parität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Blockweises Striping bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Mirroring (Spiegelung) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Distributed Parity“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Mirroring (Spiegelung) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Double Parity“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Mirroring (Spiegelung) bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Deduplizierung erkennt identische Dateien oder Datenblöcke und speichert diese möglichst nur einmal. Deshalb ist „Deduplizierung“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Eine Festplatte bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Zwei beliebige Festplatten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Festplatte bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Drei beliebige Festplatten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Festplatte bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Keine einzige Festplatte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Festplatte bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Write Penalty bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Vendor Lock-in“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Write Penalty bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Rapid Elasticity“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Write Penalty bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Hot Aisle“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Write Penalty bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Zwei Festplatten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Beliebig viele Festplatten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Festplatten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Keinen einzigen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Festplatten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Nur eine Festplatte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zwei Festplatten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Striping über gespiegelte Festplattenpaare bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Nur doppelte Parität ohne Spiegelung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Striping über gespiegelte Festplattenpaare bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Eine einzelne Festplatte ohne Backup“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Striping über gespiegelte Festplattenpaare bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Daten ausschließlich über das LAN“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Hoher Bedarf an physischer Festplattenkapazität bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Grundsätzlich keine Redundanz“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Hoher Bedarf an physischer Festplattenkapazität bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Immer langsamer als ein einzelner Datenträger“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Hoher Bedarf an physischer Festplattenkapazität bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Erfordert ausschließlich Magnetband“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Löschungen und logische Fehler können auch den RAID-Verbund betreffen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Weil RAID nur auf Druckern funktioniert“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Löschungen und logische Fehler können auch den RAID-Verbund betreffen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Weil RAID keine Daten speichert“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Löschungen und logische Fehler können auch den RAID-Verbund betreffen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Weil RAID immer nach Sekunden deaktiviert wird“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Löschungen und logische Fehler können auch den RAID-Verbund betreffen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
    "wrongReasons": [
      "Ein Subscription-Nutzungsrecht ist zeitlich an den laufenden Abonnementvertrag gebunden. Deshalb ist „Data Access Subscription“ hier nicht die gesuchte Antwort.",
      "„Digital Archive Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
      "",
      "„Distributed Application Software“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet."
    ]
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
    "why": "Begrenzte Skalierbarkeit und Bindung an einen Host bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich Dateizugriff über alle Standorte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Begrenzte Skalierbarkeit und Bindung an einen Host bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit. Deshalb ist „Erfordert immer eigenes Fibre-Channel-SAN“ hier nicht die gesuchte Antwort.",
      "„Kein direkter Zugriff möglich“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Begrenzte Skalierbarkeit und Bindung an einen Host bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Dateizugriff über ein vorhandenes Netzwerk mit SMB oder NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Nur direkter Anschluss einer Festplatte an einen einzelnen Host“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Dateizugriff über ein vorhandenes Netzwerk mit SMB oder NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich GPU-Computing“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Dateizugriff über ein vorhandenes Netzwerk mit SMB oder NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Nur analoges Magnetband“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "SMB und NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„USB und PCIe“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SMB und NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „SATA und IDE“ hier nicht die gesuchte Antwort.",
      "„HTTP und HDMI“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SMB und NFS bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Zentrales blockbasiertes Storage über ein separates Speichernetzwerk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Kein Administrationsaufwand unter allen Umständen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrales blockbasiertes Storage über ein separates Speichernetzwerk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Keine Netzwerkswitches erforderlich“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrales blockbasiertes Storage über ein separates Speichernetzwerk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Nur lokale USB-Sticks“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrales blockbasiertes Storage über ein separates Speichernetzwerk bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Kostenintensive Infrastruktur und komplexe Konfiguration bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich Nutzung auf einem Laptop“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostenintensive Infrastruktur und komplexe Konfiguration bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Unmöglichkeit mehrerer Pfade“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostenintensive Infrastruktur und komplexe Konfiguration bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Fehlende Speicherkonsolidierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Kostenintensive Infrastruktur und komplexe Konfiguration bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
    "wrongReasons": [
      "",
      "„Lokaler USB-Stick“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
      "„DVD-Laufwerk“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Nur Offline Tape“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ein exklusiv optisches Netzwerk“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Alle Daten müssen auf einem einzigen USB-Stick liegen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur magnetische Archivierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bereitstellung mehrerer Datei- und Blockprotokolle durch eine Storage-Plattform bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Redundante Daten nur einmal speichern bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Unwiderruflich alle Versionen löschen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Redundante Daten nur einmal speichern bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Physische Lüfter redundant ausführen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Redundante Daten nur einmal speichern bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Daten bewusst mehrfach ohne Zeiger ablegen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Redundante Daten nur einmal speichern bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "„Doppelte physische Kapazität muss immer reserviert sein“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      "„Verbot virtueller Datenträger“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      "„Nur Backup auf Blu-ray“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      ""
    ]
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
    "why": "Maximal angestrebten tolerierbaren Datenverlust in Zeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Zeit bis zum nächsten Hardwarekauf“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Maximal angestrebten tolerierbaren Datenverlust in Zeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Gesamtpreis eines Cloud-Vertrags“ hier nicht die gesuchte Antwort.",
      "„Anzahl physischer Speichercontroller“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Maximal angestrebten tolerierbaren Datenverlust in Zeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Angestrebte maximale Wiederherstellungsdauer bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Monatliche Speicherkosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Angestrebte maximale Wiederherstellungsdauer bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Die Anzahl an RAID-Disks“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Angestrebte maximale Wiederherstellungsdauer bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "SAS verwendet SCSI-Befehle und ist für professionelle Speicheranbindungen mit leistungsfähigen und oft redundanten Wegen geeignet. Deshalb ist „Die Taktfrequenz einer SAS-Schnittstelle“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Standortübergreifende Spiegelung und Verfügbarkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "Ein Standardcluster verwendet redundante Controller, um den Ausfall einer Storage-Steuereinheit aufzufangen. Deshalb ist „Standard Cluster hat stets mehr Standorte“ hier nicht die gesuchte Antwort.",
      "Ein Standardcluster verwendet redundante Controller, um den Ausfall einer Storage-Steuereinheit aufzufangen. Deshalb ist „Nur der Standard Cluster unterstützt Festplatten“ hier nicht die gesuchte Antwort.",
      "",
      "Ein MetroCluster schützt durch verteilte Standorte und gespiegelte Daten zusätzlich gegen einen Standortausfall. Deshalb ist „Metro Cluster besitzt grundsätzlich keine Controller“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Wiederherstellung verlorener Produktionsdaten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Langfristige unveränderliche Archivierung als einziges Ziel“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Wiederherstellung verlorener Produktionsdaten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich laufende Lastverteilung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Wiederherstellung verlorener Produktionsdaten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ersetzen der Nutzerverwaltung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Wiederherstellung verlorener Produktionsdaten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Langfristige, nachvollziehbare Aufbewahrung von Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Nur sofortige Wiederherstellung der letzten fünf Sekunden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Langfristige, nachvollziehbare Aufbewahrung von Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Automatische Lastverteilung zwischen Cloud-Regionen“ hier nicht die gesuchte Antwort.",
      "„Serverkühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Langfristige, nachvollziehbare Aufbewahrung von Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
    "wrongReasons": [
      "„Weil Replikation immer offline ist“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
      "",
      "„Weil Replikation keine Kopien erzeugt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet.",
      "„Weil Replikation nur auf optischen Medien funktioniert“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet."
    ]
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
    "why": "8 Stunden und 45 Minuten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„87 Stunden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 8 Stunden und 45 Minuten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„52 Minuten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 8 Stunden und 45 Minuten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„5 Minuten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: 8 Stunden und 45 Minuten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Durchschnittliche Zeit zwischen zwei Ausfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Maximale Datenmenge in Terabyte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Durchschnittliche Zeit zwischen zwei Ausfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Zugriffsrecht eines Backup-Administrators“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Durchschnittliche Zeit zwischen zwei Ausfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Sicherungsintervall eines Cloud-Speichers“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "MTTR beschreibt die mittlere Zeitspanne, die zur Wiederherstellung oder Reparatur benötigt wird.",
    "wrongReasons": [
      "",
      "„Maximum Time To Replicate“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: MTTR beschreibt die mittlere Zeitspanne, die zur Wiederherstellung oder Reparatur benötigt wird.",
      "„Measured Transfer Rate“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: MTTR beschreibt die mittlere Zeitspanne, die zur Wiederherstellung oder Reparatur benötigt wird.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Managed Tape Recovery“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Maximal tolerierbaren Datenverlust als Zeitspanne bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Den Stromverbrauch des Rechenzentrums“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Maximal tolerierbaren Datenverlust als Zeitspanne bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Die monatlichen Backup-Kosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Maximal tolerierbaren Datenverlust als Zeitspanne bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Dauer eines Lizenzvertrags“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Maximal tolerierbaren Datenverlust als Zeitspanne bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Zielzeit für die Wiederherstellung des Systems bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Anzahl gesicherter Generationen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zielzeit für die Wiederherstellung des Systems bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Verfügbare Speicherkapazität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zielzeit für die Wiederherstellung des Systems bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Durchschnittliche Nutzungsdauer einer Festplatte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zielzeit für die Wiederherstellung des Systems bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "SLR sind die Anforderungen des Kunden an den gewünschten Dienst.",
    "wrongReasons": [
      "„Externer Lizenzvertrag“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SLR sind die Anforderungen des Kunden an den gewünschten Dienst.",
      "„Protokoll für eine Datensicherung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SLR sind die Anforderungen des Kunden an den gewünschten Dienst.",
      "„Hardware für Redundanz“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SLR sind die Anforderungen des Kunden an den gewünschten Dienst.",
      ""
    ]
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
    "why": "Vereinbarung über zugesicherte Serviceleistungen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Interner Backup-Datenträger“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vereinbarung über zugesicherte Serviceleistungen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„RAID-Level mit Parität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vereinbarung über zugesicherte Serviceleistungen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ein Storage-Protokoll“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vereinbarung über zugesicherte Serviceleistungen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde.",
    "wrongReasons": [
      "„Ein Backup auf einem USB-Stick“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde.",
      "",
      "„Vereinbarung ausschließlich mit externem Provider“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Eine unverschlüsselte Cloud-Datei“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde.",
    "wrongReasons": [
      "Ein Snapshot hält einen Datenzustand zu einem Zeitpunkt fest, ist aber ohne separate Aufbewahrung kein vollständiger Ersatz für unabhängige Backups. Deshalb ist „Ein Snapshotspeicher“ hier nicht die gesuchte Antwort.",
      "Deduplizierung erkennt identische Dateien oder Datenblöcke und speichert diese möglichst nur einmal. Deshalb ist „Eine Form der Datendeduplizierung“ hier nicht die gesuchte Antwort.",
      "",
      "„Interne Schichtplanung ohne Vertrag“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde."
    ]
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
    "why": "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten.",
    "wrongReasons": [
      "„Reiner RAM-Cache“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten.",
      "„Nur CPU-Register“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten.",
      "Ein Snapshot hält einen Datenzustand zu einem Zeitpunkt fest, ist aber ohne separate Aufbewahrung kein vollständiger Ersatz für unabhängige Backups. Deshalb ist „Ein einzelner SSD-Snapshot“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Eine SSD speichert Daten ohne bewegliche Teile und ermöglicht besonders schnelle Zugriffe.",
    "wrongReasons": [
      "",
      "„Papierarchiv“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine SSD speichert Daten ohne bewegliche Teile und ermöglicht besonders schnelle Zugriffe.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Ausschließlich Magnetband“ hier nicht die gesuchte Antwort.",
      "„Lochkarte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine SSD speichert Daten ohne bewegliche Teile und ermöglicht besonders schnelle Zugriffe."
    ]
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
    "why": "Skalierbarkeit, Automatisierung und Georedundanz bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Keine Verantwortung für Datenschutz“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Skalierbarkeit, Automatisierung und Georedundanz bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollständige Unabhängigkeit vom Internet“ hier nicht die gesuchte Antwort.",
      "„Grundsätzlich keine laufenden Kosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Skalierbarkeit, Automatisierung und Georedundanz bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Backup-Medium ist vom Netzwerk physisch getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Alle Systeme nutzen dieselbe Administratoranmeldung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Backup-Medium ist vom Netzwerk physisch getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „Ein RAID 0 als einziges Backup“ hier nicht die gesuchte Antwort.",
      "",
      "„Jede Kopie liegt im gleichen Netzwerksegment“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Backup-Medium ist vom Netzwerk physisch getrennt bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig. Deshalb ist „Inkrementelle Sicherung“ hier nicht die gesuchte Antwort.",
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Differenzielle Sicherung“ hier nicht die gesuchte Antwort.",
      "„Replikation ohne Historie“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      ""
    ]
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
    "why": "Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig.",
    "wrongReasons": [
      "",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollsicherung“ hier nicht die gesuchte Antwort.",
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Differenzielle Sicherung“ hier nicht die gesuchte Antwort.",
      "„Langzeitarchivierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig."
    ]
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
    "why": "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial.",
    "wrongReasons": [
      "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung. Deshalb ist „Storage vMotion“ hier nicht die gesuchte Antwort.",
      "",
      "Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig. Deshalb ist „Inkrementelle Sicherung“ hier nicht die gesuchte Antwort.",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollsicherung“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Nur das nächste geplante Backup“ hier nicht die gesuchte Antwort.",
      "„Keine einzige Sicherung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      "",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Ausschließlich das letzte Inkrement“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Alle seit Beginn erstellten differenziellen Sicherungen“ hier nicht die gesuchte Antwort.",
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Nur die älteste differenzielle Sicherung“ hier nicht die gesuchte Antwort.",
      "„Zwingend ein weiteres Betriebssystem“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      ""
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Vollsicherung bleibt immer unverändert“ hier nicht die gesuchte Antwort.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Alle Sicherungen werden ausschließlich auf Tape geschrieben“ hier nicht die gesuchte Antwort.",
      "„Zunächst wird jeder Server formatiert“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Ein vollständiges Neu-Lesen aller Produktivdaten bei jedem Lauf“ hier nicht die gesuchte Antwort.",
      "",
      "„Physische Spiegelung zweier Netzwerkrouter“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Ausschließlich das letzte kleine Inkrement“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
    "wrongReasons": [
      "„Jede Datei unverschlüsselt ins Internet laden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen.",
      "RAID 6 verwendet zwei unabhängige Paritäten und verträgt den Ausfall von zwei Laufwerken. Deshalb ist „Automatisch RAID 6 konfigurieren“ hier nicht die gesuchte Antwort.",
      "",
      "„Gezielt alle Datensätze vervierfachen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen."
    ]
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
    "why": "Vor Übertragung an den Backup-Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Erst nach jeder Wiederherstellung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vor Übertragung an den Backup-Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich beim Speichern im Offline-Archiv“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vor Übertragung an den Backup-Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur am Netzwerkrouter“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vor Übertragung an den Backup-Server bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Rotationsprinzip mit täglichen, wöchentlichen und monatlichen Sicherungsständen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Eine Methode zur Serverkühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Rotationsprinzip mit täglichen, wöchentlichen und monatlichen Sicherungsständen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ein Verfahren für Festplattenparität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Rotationsprinzip mit täglichen, wöchentlichen und monatlichen Sicherungsständen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Ein Cloud-Vertragsmodell“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Älteste Sicherungen werden zuerst überschrieben oder gelöscht bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Sicherungen dürfen nie automatisch laufen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Älteste Sicherungen werden zuerst überschrieben oder gelöscht bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Neueste Sicherung wird immer zuerst gelöscht“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Älteste Sicherungen werden zuerst überschrieben oder gelöscht bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Alle Sicherungen bleiben zwingend ewig bestehen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Älteste Sicherungen werden zuerst überschrieben oder gelöscht bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Analyse, Planung und Test bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Kaufen, Vergessen und Wiederholen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Analyse, Planung und Test bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur Geräte bestellen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Analyse, Planung und Test bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Löschen, Verschlüsseln und Ignorieren“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Analyse, Planung und Test bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "NAS stellt Dateien über ein Netzwerk bereit, typischerweise über SMB oder NFS für mehrere Benutzer. Deshalb ist „RAID, SAN und NAS“ hier nicht die gesuchte Antwort.",
      "MTBF beschreibt die durchschnittliche Zeit zwischen Ausfällen und dient der Zuverlässigkeitsbewertung. Deshalb ist „MTTR, MTBF und MTTF“ hier nicht die gesuchte Antwort.",
      "„VPN, HDMI und USB“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      ""
    ]
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
    "why": "Infrastructure as a Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Integrity as a Storage“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Infrastructure as a Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Internet as a Software“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Infrastructure as a Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Ein Subscription-Nutzungsrecht ist zeitlich an den laufenden Abonnementvertrag gebunden. Deshalb ist „Identity as a Subscription“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Direct Attached Storage“ hier nicht die gesuchte Antwort.",
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Infrastructure as a Service (IaaS)“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Platform as a Service (PaaS)“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "NAS stellt Dateien über ein Netzwerk bereit, typischerweise über SMB oder NFS für mehrere Benutzer. Deshalb ist „Network Attached Storage“ hier nicht die gesuchte Antwort.",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 10“ hier nicht die gesuchte Antwort.",
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Software as a Service (SaaS)“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "On-Demand Self-Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Mirroring“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: On-Demand Self-Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Cold Storage“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: On-Demand Self-Service bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Gemeinsame bedarfsgerechte Nutzung zusammengefasster Ressourcen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Jeder Cloud-Kunde erhält zwingend eigene physische Server“ hier nicht die gesuchte Antwort.",
      "„Automatisches Löschen sämtlicher Backups“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Gemeinsame bedarfsgerechte Nutzung zusammengefasster Ressourcen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Abschaltung sämtlicher Netzwerkknoten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Gemeinsame bedarfsgerechte Nutzung zusammengefasster Ressourcen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Sicherung auf offline gelagertem Magnetband“ hier nicht die gesuchte Antwort.",
      "",
      "„Langfristige unveränderliche Archivierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "„Manuelle Konfiguration jedes Routers“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Cloud-Zugang ist nur offline möglich“ hier nicht die gesuchte Antwort.",
      "„Ein RAID wird gespiegelt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "",
      "„Leistung kann niemals abgerechnet werden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Nur lokaler Zugriff an einem physischen Server“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "„Keine Nutzung durch mobile Endgeräte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „Zugriff ausschließlich über SATA“ hier nicht die gesuchte Antwort.",
      ""
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "",
      "„Öffentliche Plattform für alle Nutzer ohne Anmeldung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Ausschließlich Magnetband-Backup“ hier nicht die gesuchte Antwort.",
      "„Eine Kombination aus vier RAID-Leveln“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Nur ein dedizierter Fibre-Channel-Switch“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "",
      "„Ausschließlich ein internes Rechenzentrum ohne externe Nutzer“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Die Kopie eines privaten USB-Sticks“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Automatische Löschung aller öffentlichen Daten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Eine Cloud ohne Internetverbindung“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „Ausschließlich RAID 1“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Mehrere Nutzer auf einem einzigen Betriebssystemkonto“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Ausschließlich private Hardwareserver“ hier nicht die gesuchte Antwort.",
      "„Ein Backup pro Monat“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      ""
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "",
      "„Automatisch unbegrenzte Anbieterunabhängigkeit“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "„Daten können grundsätzlich nie gespeichert werden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "„Jede Anwendung wird kostenfrei“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Trennung von Steuerungs- und Weiterleitungsebene bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Alle Server erhalten ein eigenes RAID“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Trennung von Steuerungs- und Weiterleitungsebene bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Jeder Switch muss manuell isoliert gesteuert werden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Trennung von Steuerungs- und Weiterleitungsebene bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Cloud-Daten werden ausschließlich archiviert“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Die Data Plane leitet Datenpakete auf Grundlage der vorgegebenen Regeln weiter.",
    "wrongReasons": [
      "„Contract Plane“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Data Plane leitet Datenpakete auf Grundlage der vorgegebenen Regeln weiter.",
      "„Backup Plane“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Data Plane leitet Datenpakete auf Grundlage der vorgegebenen Regeln weiter.",
      "",
      "Die Control Plane berechnet oder verwaltet Weiterleitungsentscheidungen; sie transportiert die Nutzdaten nicht selbst. Deshalb ist „Control Plane“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Die Control Plane berechnet oder verwaltet Weiterleitungsentscheidungen; sie transportiert die Nutzdaten nicht selbst.",
    "wrongReasons": [
      "Die Data Plane leitet Datenpakete auf Grundlage der vorgegebenen Regeln weiter. Deshalb ist „Data Plane“ hier nicht die gesuchte Antwort.",
      "„Storage Plane“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Control Plane berechnet oder verwaltet Weiterleitungsentscheidungen; sie transportiert die Nutzdaten nicht selbst.",
      "„Cooling Plane“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Die Control Plane berechnet oder verwaltet Weiterleitungsentscheidungen; sie transportiert die Nutzdaten nicht selbst.",
      ""
    ]
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
    "why": "OpenFlow ist eine mögliche Schnittstelle, über die SDN-Controller Weiterleitungsregeln an Netzgeräte übermitteln.",
    "wrongReasons": [
      "",
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „SATA“ hier nicht die gesuchte Antwort.",
      "SDN trennt die Netzsteuerung logisch von der Paketweiterleitung und ermöglicht zentrale, programmatische Steuerung. Deshalb ist „NFS als einziges SDN-Protokoll“ hier nicht die gesuchte Antwort.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „LTO“ hier nicht die gesuchte Antwort."
    ]
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
    "why": "Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Es wird zwingend mehr Hardware pro Nutzer benötigt“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Dynamische Konfiguration ist grundsätzlich unmöglich“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Netzwerkgeräte können niemals weiterleiten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zentrale Kontrollinstanz kann ohne Redundanz zum Single Point of Failure werden bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Trennung der Speichersteuerung von der physischen Speicherhardware bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ein RAID ohne Speicherkapazität“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Trennung der Speichersteuerung von der physischen Speicherhardware bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Eine neue Art Softwarelizenz“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Trennung der Speichersteuerung von der physischen Speicherhardware bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Ausschließlich ein lokales DVD-Laufwerk“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Trennung der Speichersteuerung von der physischen Speicherhardware bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Weitgehend softwarebasierte Verwaltung und Automatisierung von Computing, Storage und Network bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich mechanische Serverkühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Weitgehend softwarebasierte Verwaltung und Automatisierung von Computing, Storage und Network bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Nur langfristige Magnetbandlagerung“ hier nicht die gesuchte Antwort.",
      "„Ein weiterer Office-Abonnementtyp“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Weitgehend softwarebasierte Verwaltung und Automatisierung von Computing, Storage und Network bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Vertraulichkeit, Integrität und Verfügbarkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Nur Kosten und Skalierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit, Integrität und Verfügbarkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur Softwarelizenzen und Produktdesign“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit, Integrität und Verfügbarkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Ausschließlich Stromverbrauch“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vertraulichkeit, Integrität und Verfügbarkeit bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Kauf möglichst vieler Festplatten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "",
      "„Ungeprüfter Vertragsabschluss“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "„Sofortige Löschung lokaler Daten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich Zahl der Mitarbeitenden“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur die Domain-Endung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "",
      "„Nur Farbe der Benutzeroberfläche“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Zugriffsrechte, Verschlüsselung und Maßnahmen bei Sicherheitsvorfällen bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "„Ausschließlich Logo und Werbeslogan“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur Anzahl verfügbarer Schriftarten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Allein die Farbe der Serverräume“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Sicherheitsnachweise, Datenstandorte, Unterauftragnehmer und Gesamtkosten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      ""
    ]
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
    "why": "Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "",
      "„Ausschließlich lokale Druckertreiber“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Nur die Anzahl der Firmenautos“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
      "„Optische Darstellung einer Startseite“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Späterer Anbieterwechsel und sichere Rückgabe beziehungsweise Löschung der Daten bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
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
    "why": "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
    "wrongReasons": [
      "„Messung des Stromverbrauchs von Desktops“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden.",
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Festlegung eines weltweit einheitlichen Cloud-Preises“ hier nicht die gesuchte Antwort.",
      "„Definition eines neuen RAID-Levels“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden."
    ]
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
    "why": "Anbieter und Kunde erfüllen jeweils unterschiedliche Sicherheitsaufgaben bezeichnet die gesuchte Funktion beziehungsweise das Verfahren.",
    "wrongReasons": [
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Cloud-Nutzer müssen keine Zugriffsrechte verwalten“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Alle Sicherheitsmaßnahmen entfallen beim Wechsel zu SaaS“ hier nicht die gesuchte Antwort.",
      "",
      "„Nur der Anbieter trägt unter allen Umständen jede Pflicht“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Anbieter und Kunde erfüllen jeweils unterschiedliche Sicherheitsaufgaben bezeichnet die gesuchte Funktion beziehungsweise das Verfahren."
    ]
  }
];

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
      "Ein Bladeserver verwendet ein gemeinsames Chassis für mehrere kompakte Servermodule. Deshalb ist „Bladeserver“ hier nicht die gesuchte Antwort.",
      "Ein Rackserver wird in einem standardisierten Serverschrank montiert und ist für kompakte Serverräume geeignet. Deshalb ist „Vier Rackserver“ hier nicht die gesuchte Antwort.",
      "„Ein Fibre-Channel-Switch“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Tower benötigt keinen Rackschrank und lässt sich einfach aufstellen.",
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
      "Eine USV versorgt angeschlossene Systeme bei kurzzeitigen Netzunterbrechungen weiter, bis Strom wieder da ist oder Ersatzversorgung übernimmt. Deshalb ist „USV entfernen“ hier nicht die gesuchte Antwort.",
      "„Mehr Datenbanklizenzen kaufen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz.",
      "",
      "„Alle Server dauerhaft bei Höchstleistung betreiben“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Geordnete Luftführung verhindert Rückströmung und verbessert die Kühleffizienz."
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
      "„Abschalten der Netzwerküberwachung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen.",
      "",
      "„Vier weitere physische Server“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Virtualisierung erlaubt mehreren getrennten Systemen dieselbe physische Hardware zu nutzen.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Wechsel auf Magnetband als Arbeitslaufwerk“ hier nicht die gesuchte Antwort."
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
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort.",
      "Ein Snapshot hält einen Datenzustand zu einem Zeitpunkt fest, ist aber ohne separate Aufbewahrung kein vollständiger Ersatz für unabhängige Backups. Deshalb ist „Snapshot als einziges Mittel“ hier nicht die gesuchte Antwort.",
      "Open Value Companywide war ein Volumenlizenzmodell für die vollständige Standardisierung kleinerer Organisationen. Deshalb ist „Open Value Companywide“ hier nicht die gesuchte Antwort."
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
      "vMotion verschiebt eine laufende virtuelle Maschine zwischen physischen Hosts ohne geplante Dienstunterbrechung. Deshalb ist „Storage vMotion“ hier nicht die gesuchte Antwort.",
      "„Application Sequencer“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: HA startet betroffene virtuelle Maschinen auf verbleibenden Hosts neu.",
      "Software Assurance umfasst je nach Lizenzvertrag Versionsrechte und zusätzliche Wartungs- beziehungsweise Supportleistungen. Deshalb ist „Software Assurance“ hier nicht die gesuchte Antwort.",
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
      "Ein differenzielles Backup enthält Änderungen seit der letzten Vollsicherung; für das Restore reichen Vollsicherung und letztes Differenzial. Deshalb ist „Differenzielles Backup“ hier nicht die gesuchte Antwort.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Direct Attached Storage“ hier nicht die gesuchte Antwort.",
      "",
      "DPM konsolidiert VMs auf weniger Hosts und kann nicht benötigte Hosts in den Stromsparmodus versetzen. Deshalb ist „Distributed Power Management“ hier nicht die gesuchte Antwort."
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
      "Das Warm-/Kaltgang-Konzept trennt die kalte Serverzuluft von der warmen Abluft und verhindert ineffiziente Rückströmungen. Deshalb ist „Kaltgang-Einhausung“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 6 verwendet zwei unabhängige Paritäten und verträgt den Ausfall von zwei Laufwerken. Deshalb ist „RAID 6“ hier nicht die gesuchte Antwort.",
      "SAS verwendet SCSI-Befehle und ist für professionelle Speicheranbindungen mit leistungsfähigen und oft redundanten Wegen geeignet. Deshalb ist „Nur SAS-Festplatten“ hier nicht die gesuchte Antwort."
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
      "„Doppelter Datenbankserver ohne Trennung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Applikationsvirtualisierung entkoppelt Anwendungen von der üblichen lokalen Installation.",
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort.",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „LTO-Bandrobotik“ hier nicht die gesuchte Antwort."
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
      "Enterprise Agreement ist ein Microsoft-Volumenlizenzvertrag für größere Organisationen. Deshalb ist „Enterprise Agreement ab 250 Arbeitsplätzen“ hier nicht die gesuchte Antwort.",
      "Fibre Channel ist eine Netzwerktechnik für Speicherzugriffe, vor allem in SAN-Umgebungen. Deshalb ist „Fibre Channel“ hier nicht die gesuchte Antwort.",
      "SDS abstrahiert Speicherfunktionen von der physischen Hardware und verwaltet sie softwaregestützt. Deshalb ist „Software Defined Storage“ hier nicht die gesuchte Antwort.",
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
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Direct Attached Storage“ hier nicht die gesuchte Antwort.",
      "SDN trennt die Netzsteuerung logisch von der Paketweiterleitung und ermöglicht zentrale, programmatische Steuerung. Deshalb ist „Software Defined Networking allein“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 1“ hier nicht die gesuchte Antwort."
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
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Ein ausschließliches Tape-Archiv“ hier nicht die gesuchte Antwort.",
      "„Ein Blu-ray-Laufwerk“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: DAS bietet kurze lokale Zugriffswege und eignet sich für performantes Caching und Datenbanken.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Public-Cloud-Office-Software“ hier nicht die gesuchte Antwort.",
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
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „DAS nur am Einzelserver“ hier nicht die gesuchte Antwort.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0 ohne Netzwerk“ hier nicht die gesuchte Antwort.",
      "",
      "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit. Deshalb ist „Separates Fibre-Channel-SAN zwingend“ hier nicht die gesuchte Antwort."
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
      "NAS stellt Dateien über ein Netzwerk bereit, typischerweise über SMB oder NFS für mehrere Benutzer. Deshalb ist „Ein einzelnes NAS ohne Blockprotokoll“ hier nicht die gesuchte Antwort.",
      "",
      "„Ein USB-Stick an einem Host“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit.",
      "„Nur lokale DVDs“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein SAN stellt performanten gemeinsamen Blockspeicher über dedizierte Verbindungen bereit."
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
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort.",
      "RAID 5 verteilt Daten und eine Paritätsinformation; damit lässt sich der Ausfall genau eines Laufwerks abfangen. Deshalb ist „RAID 5“ hier nicht die gesuchte Antwort.",
      "JBOD fasst Laufwerke ohne fest eingebautes RAID-Redundanzkonzept zusammen. Deshalb ist „Ein einfaches JBOD“ hier nicht die gesuchte Antwort."
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
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort.",
      "JBOD fasst Laufwerke ohne fest eingebautes RAID-Redundanzkonzept zusammen. Deshalb ist „JBOD“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Nur ein externes Cloud-Archiv“ hier nicht die gesuchte Antwort.",
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
      "JBOD fasst Laufwerke ohne fest eingebautes RAID-Redundanzkonzept zusammen. Deshalb ist „JBOD“ hier nicht die gesuchte Antwort.",
      "SATA ist eine serielle Massenspeicherschnittstelle und häufig auf preisgünstigen Laufwerken zu finden. Deshalb ist „Einzelne SATA-Disk ohne Redundanz“ hier nicht die gesuchte Antwort.",
      "",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort."
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
      "„Nur eine physische Platte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Der Standard Cluster verbindet redundante Controller mit Failover.",
      "",
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort.",
      "Double Loop fügt einen weiteren Verbindungsweg zu Laufwerken hinzu, ersetzt aber keinen redundanten Controller. Deshalb ist „Nur Double Loop“ hier nicht die gesuchte Antwort."
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
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Ein einzelner DAS-Server“ hier nicht die gesuchte Antwort.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0“ hier nicht die gesuchte Antwort."
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
      "„Ausschließlich einen einzelnen DVD-Brenner“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0 ohne Protokoll“ hier nicht die gesuchte Antwort.",
      "„Nur Ethernet-Verkabelung ohne Storage-System“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Unified Storage vereint Datei- und Blockzugriffe auf einer Plattform.",
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
      "MTBF beschreibt die durchschnittliche Zeit zwischen Ausfällen und dient der Zuverlässigkeitsbewertung. Deshalb ist „MTBF von 15 Monaten“ hier nicht die gesuchte Antwort.",
      "„PUE von 15“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RPO beschreibt den maximal angestrebten Datenverlust in Zeit.",
      "",
      "RTO legt fest, bis wann ein ausgefallenes System wieder betriebsbereit sein soll. Deshalb ist „RTO von 15 Tagen“ hier nicht die gesuchte Antwort."
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
      "MTBF beschreibt die durchschnittliche Zeit zwischen Ausfällen und dient der Zuverlässigkeitsbewertung. Deshalb ist „MTBF von einer Stunde“ hier nicht die gesuchte Antwort.",
      "„PUE von einer Stunde“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RTO ist die angestrebte maximale Wiederherstellungsdauer.",
      "„Service Level Requirement für Speicherkosten“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: RTO ist die angestrebte maximale Wiederherstellungsdauer.",
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
      "„Nur Jahresarchivierung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung.",
      "„Eine nicht versionierte Replikation“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Inkrementelle Sicherungen erfassen Änderungen seit der letzten Sicherung.",
      "",
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Tägliche vollständige Sicherung“ hier nicht die gesuchte Antwort."
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
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „Nur RAID 0“ hier nicht die gesuchte Antwort.",
      "",
      "Bei einer inkrementellen Sicherung werden nur Änderungen seit der jeweils letzten Sicherung gespeichert; für das Restore ist oft eine Sicherungskette nötig. Deshalb ist „Lange Kette inkrementeller Backups“ hier nicht die gesuchte Antwort.",
      "„Nur Replikation“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Vollbackup plus jüngstes Differenzial genügen für eine differenzielle Wiederherstellung."
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
      "„Eine ständig beschreibbare Netzwerkfreigabe“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar.",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „Nur ein RAID 1 im betroffenen Server“ hier nicht die gesuchte Antwort.",
      "„Backup mit identischem Admin-Konto im selben Netz“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Physisch getrennte Offline-Medien sind über das kompromittierte Netzwerk nicht direkt erreichbar."
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
      "RAID 5 verteilt Daten und eine Paritätsinformation; damit lässt sich der Ausfall genau eines Laufwerks abfangen. Deshalb ist „Nur RAID 5“ hier nicht die gesuchte Antwort.",
      "OpenFlow ist eine mögliche Schnittstelle, über die SDN-Controller Weiterleitungsregeln an Netzgeräte übermitteln. Deshalb ist „OpenFlow“ hier nicht die gesuchte Antwort.",
      "„Rapid Elasticity“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das Generationenprinzip hält tägliche, wöchentliche und monatliche Sicherungen vor.",
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
      "Eine Vollsicherung kopiert alle ausgewählten Daten; sie braucht mehr Speicher und Zeit, ist dafür einfach wiederherzustellen. Deshalb ist „Jede VM vollständig ohne Deduplizierung übertragen“ hier nicht die gesuchte Antwort.",
      "„Ausschließlich stärkere Kühlung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Clientseitige Blockdeduplizierung reduziert identische Daten bereits vor dem Netzwerktransfer.",
      "",
      "Deduplizierung erkennt identische Dateien oder Datenblöcke und speichert diese möglichst nur einmal. Deshalb ist „Serverseitige Deduplizierung erst nach Übertragung aller Daten“ hier nicht die gesuchte Antwort."
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
      "RTO legt fest, bis wann ein ausgefallenes System wieder betriebsbereit sein soll. Deshalb ist „Die RTO ohne Test halbieren“ hier nicht die gesuchte Antwort.",
      "",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Nur das Firmenlogo der Software ändern“ hier nicht die gesuchte Antwort.",
      "„Sofortige Löschung der letzten Backups“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Erst ein erfolgreicher Test zeigt, dass die Daten tatsächlich wiederherstellbar sind."
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
      "„Nur Export einzelner Textdateien“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Ein Image Backup enthält auch Betriebssystem und Einstellungen.",
      "NAS stellt Dateien über ein Netzwerk bereit, typischerweise über SMB oder NFS für mehrere Benutzer. Deshalb ist „Ein reiner NAS-Switch“ hier nicht die gesuchte Antwort.",
      "Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde. Deshalb ist „Nur SLA ohne Daten“ hier nicht die gesuchte Antwort."
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
      "„Mehr Backups am selben ungeschützten Standort“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
      "RAID 0 verteilt Daten auf mehrere Laufwerke, besitzt aber keine Redundanz; der Ausfall eines beteiligten Laufwerks gefährdet den gesamten Verbund. Deshalb ist „RAID 0 statt Backup“ hier nicht die gesuchte Antwort.",
      "„Löschen aller Sicherungsprotokolle“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Getrennte Aufbewahrung vermindert das Risiko eines gemeinsamen Standortausfalls.",
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
      "„Ausschließlich Arbeitsspeicher“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien.",
      "„Verzicht auf Aufbewahrungsregeln“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das Mehrstufenkonzept aus Modul 3 kombiniert schnelle Wiederherstellung und günstige Langzeitkopien.",
      "",
      "Eine SSD speichert Daten ohne bewegliche Teile und ermöglicht besonders schnelle Zugriffe. Deshalb ist „Nur eine SSD ohne Sicherungshistorie“ hier nicht die gesuchte Antwort."
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
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „IaaS mit eigenem Betriebssystem und Eigenentwicklung“ hier nicht die gesuchte Antwort.",
      "Ein SAN stellt zentralen blockbasierten Speicher über eine eigene Speicher-Netzwerkinfrastruktur bereit. Deshalb ist „Nur Fibre-Channel-SAN“ hier nicht die gesuchte Antwort.",
      "RAID 1 spiegelt Daten auf mehrere Festplatten und bietet dadurch Schutz vor einem einzelnen Laufwerksausfall. Deshalb ist „RAID 10“ hier nicht die gesuchte Antwort.",
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
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Ein reines Tape-Archiv“ hier nicht die gesuchte Antwort.",
      "„Manuelle Netzwerkkonfiguration aller Router“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: PaaS stellt eine gemanagte Entwicklungs- und Laufzeitplattform bereit.",
      "",
      "Eine SSD speichert Daten ohne bewegliche Teile und ermöglicht besonders schnelle Zugriffe. Deshalb ist „Nur eine lokale SSD“ hier nicht die gesuchte Antwort."
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
      "„Ein lokaler DVD-Server“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet.",
      "",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „SaaS“ hier nicht die gesuchte Antwort.",
      "„Only Backup as a Service“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: IaaS stellt Infrastruktur bereit, während der Kunde Betriebssystem und Anwendungen verwaltet."
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
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Reine Community Cloud“ hier nicht die gesuchte Antwort.",
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Ausschließlich lokale DAS-Platten“ hier nicht die gesuchte Antwort.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Nur eine Public Cloud ohne private Ressourcen“ hier nicht die gesuchte Antwort."
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
      "RAID 6 verwendet zwei unabhängige Paritäten und verträgt den Ausfall von zwei Laufwerken. Deshalb ist „RAID 6“ hier nicht die gesuchte Antwort.",
      "Single Loop nutzt nur einen Verbindungsweg zwischen Controller und Laufwerken und hat dort keine Pfadredundanz. Deshalb ist „Single Loop“ hier nicht die gesuchte Antwort.",
      "Sessionvirtualisierung stellt Desktop- oder Anwendungssitzungen auf einer zentralen Plattform bereit. Deshalb ist „Sessionvirtualisierung“ hier nicht die gesuchte Antwort.",
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
      "„Ein zusätzlicher RAID-Controller“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung.",
      "„Manuelle Änderung jedes einzelnen Switches“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SDN trennt die Steuerung von der Datenweiterleitung und unterstützt zentrale Regelverteilung.",
      "",
      "Magnetband ist günstig für lange Aufbewahrung und kann offline gelagert werden, hat aber lange Zugriffszeiten. Deshalb ist „Nur Magnetbandrotation“ hier nicht die gesuchte Antwort."
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
      "Ein SLA enthält vereinbarte Leistungs- und Qualitätszusagen zwischen Dienstleister und Kunde. Deshalb ist „Nur ein SLA“ hier nicht die gesuchte Antwort.",
      "",
      "„Ein einzelner DVD-Brenner“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SDS abstrahiert Speicherfunktionen von der physischen Hardware.",
      "„Eine klassische nur lokal beschreibbare Festplatte“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: SDS abstrahiert Speicherfunktionen von der physischen Hardware."
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
      "„Ungeprüfte sofortige Datenmigration“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten.",
      "„Verzicht auf Datenschutzprüfung“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten.",
      "„Nur billigsten Preis vergleichen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Das BSI fordert Klärung von Datenstandorten, Sicherheitsnachweisen und Verantwortlichkeiten."
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
      "DAS ist direkt an einen Host angebunden; es ist günstig und schnell, aber für den gemeinsamen Zugriff mehrerer Hosts nur eingeschränkt geeignet. Deshalb ist „Nur das Logo des neuen Anbieters“ hier nicht die gesuchte Antwort.",
      "„Verzicht auf alle Testmigrationen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
      "„Keine Verträge über Datenrückgabe“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: Eine Exit-Strategie begrenzt Vendor Lock-in und regelt den Umgang mit Daten bei Vertragsende.",
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
      "„Alle denkbaren Angriffe sind ausgeschlossen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen.",
      "Cloud-Modelle unterscheiden sich danach, wer Infrastruktur und Software betreibt und wie die Ressourcen bereitgestellt werden. Deshalb ist „Die Cloud erfüllt automatisch jedes Datenschutzgesetz weltweit“ hier nicht die gesuchte Antwort.",
      "",
      "„Der Kunde muss keinerlei Berechtigungen mehr prüfen“ beschreibt nicht den hier benötigten Mechanismus. Entscheidend ist stattdessen: C5-Testate dokumentieren die Prüfung definierter Kriterien; Kundenpflichten bleiben bestehen."
    ],
    "source": "Praxisfall, aus den Vortragsfolien und E-Learning-Materialien abgeleitet"
  }
];