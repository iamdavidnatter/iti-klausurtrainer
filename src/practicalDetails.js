export const practicalDetails = {
  "practical-1-1": [
    [
      "Blades sind Servermodule für ein gemeinsames Spezialgehäuse; ein einzelner Blade lässt sich nicht einfach wie einen Stand-PC aufstellen.",
      "Blades passen in Rechenzentren mit vielen gleichartigen Servern und zentraler Stromversorgung."
    ],
    [
      "Vier Rackserver wären für einen einzelnen Dateiserver unnötig teuer und setzen einen Rackschrank voraus, der ausdrücklich nicht vorhanden ist.",
      "Mehrere Rackserver sind sinnvoll für größere, redundant ausgelegte Serverlandschaften."
    ],
    [
      "Ein Fibre-Channel-Switch ist Netzwerkhardware zur Storage-Anbindung und kann keinen Dateiserver ersetzen.",
      "FC-Switches werden in dedizierten Speichernetzwerken zwischen Servern und SAN eingesetzt."
    ]
  ],
  "practical-1-2": [
    [
      "Das Entfernen der USV verschlechtert die Stromausfallsicherheit und beeinflusst die Vermischung von Zu- und Abluft nicht sinnvoll.",
      "USV-Anlagen werden benötigt, um Netzausfälle kurzfristig zu überbrücken."
    ],
    [
      "Mehr Datenbanklizenzen ändern weder die Serveranordnung noch die Luftströme.",
      "Datenbanklizenzen sind relevant, wenn weitere Nutzungsrechte oder Serverinstanzen erforderlich sind."
    ],
    [
      "Maximale Serverlast produziert mehr Abwärme und verstärkt das Kühlproblem statt es zu beheben.",
      "Leistungstests können vorübergehend Höchstlast erzeugen, um Kühlkapazität zu prüfen."
    ]
  ],
  "practical-1-3": [
    [
      "Das Abschalten des Monitorings verhindert, dass Fehler erkannt werden, und verringert nicht die Zahl der benötigten Server.",
      "Monitoring ist sinnvoll, um Auslastung und Verfügbarkeit auch nach einer Konsolidierung zu prüfen."
    ],
    [
      "Vier zusätzliche Server vergrößern den Hardwarebestand, obwohl die vorhandenen Systeme kaum ausgelastet sind.",
      "Mehr physische Server sind sinnvoll, wenn die vorhandene Leistung nachweislich nicht mehr ausreicht."
    ],
    [
      "Magnetband ist ein langsames sequentielles Backupmedium, kein Laufwerk für aktive Betriebssysteme oder Workloads.",
      "Tape ist passend für langjährige Sicherungen und Offline-Aufbewahrung."
    ]
  ],
  "practical-1-4": [
    [
      "RAID 0 verbessert unter Umständen Speicher-I/O, schützt aber nicht einmal vor Plattenausfall und verlagert keine VM zwischen Hosts.",
      "RAID 0 passt für temporäre nichtkritische Arbeitsdaten mit separatem Backup."
    ],
    [
      "Ein Snapshot speichert einen VM-Zustand, hält die VM aber nicht während Hostwartung auf anderer Hardware weiterlaufend.",
      "Snapshots sind sinnvoll für kurzfristige Rückfallpunkte vor Änderungen."
    ],
    [
      "Open Value Companywide ist ein Microsoft-Lizenzvertrag und keine Funktion zur Live-Migration.",
      "Das Programm war für standardisierte Lizenzierung kleinerer Organisationen gedacht."
    ]
  ],
  "practical-1-5": [
    [
      "Storage vMotion verschiebt virtuelle Datenträger zwischen Datastores, nicht ausgefallene VM-Prozesse zu einem anderen Host.",
      "Es ist richtig, wenn ein Datastore gewartet oder ausgetauscht werden muss."
    ],
    [
      "Ein Application Sequencer paketiert Anwendungen und ist nicht für das Erkennen ausgefallener Hosts zuständig.",
      "Sequencing wird bei Applikationsvirtualisierung für reproduzierbare Softwarepakete gebraucht."
    ],
    [
      "Software Assurance stellt Wartungs- und Nutzungsrechte bereit, aber startet keine VMs nach einem Hostausfall neu.",
      "SA ist relevant für Softwareupgrades und vertraglich vereinbarten Support."
    ]
  ],
  "practical-1-6": [
    [
      "Differenzielle Backups halten historische Datenstände bereit, führen aber keine zeitgleich laufende zweite VM aus.",
      "Differenzial-Backups eignen sich zur Wiederherstellung mit Vollbackup und letztem Differenzial."
    ],
    [
      "DAS ist eine Form direkt angeschlossener Datenspeicherung und kein Mechanismus für synchrone VM-Ausführung.",
      "DAS ist sinnvoll bei performanten lokalen Speichern eines Hosts."
    ],
    [
      "DPM schaltet nicht benötigte Hosts zum Stromsparen ab; eine fortlaufende identische Kopie mit unterbrechungsfreier Übernahme bietet es nicht.",
      "DPM passt, wenn Stromsparen bei geringer Last gefragt ist."
    ]
  ],
  "practical-1-7": [
    [
      "Kaltgang-Einhausung trennt Luftströme im Rechenzentrum, stellt aber keine Windows-Benutzersitzungen bereit.",
      "Sie ist sinnvoll, wenn Serverkühlung effizienter werden soll."
    ],
    [
      "RAID 6 schützt Datenträger vor zwei Plattenausfällen; es stellt keine entfernten Windows-Desktops bereit.",
      "RAID 6 passt für redundante Speichersysteme."
    ],
    [
      "SAS-Laufwerke sind physische Speichergeräte; auch schnelle Festplatten allein erzeugen keine zentralen Benutzer-Sessions.",
      "SAS ist sinnvoll für professionelle lokale Storage-Anbindung."
    ]
  ],
  "practical-1-8": [
    [
      "Ein zusätzlicher Datenbankserver ohne logische Trennung isoliert inkompatible Programmbibliotheken nicht zuverlässig.",
      "Ein zweiter Datenbankserver ist sinnvoll, wenn Datenbanklast oder Verfügbarkeit es verlangen."
    ],
    [
      "Single Loop ist eine einfache Storage-Verkabelung und hat keinen Einfluss auf Versionenkonflikte in Anwendungsprozessen.",
      "Single Loop kann bei einfachen, nicht redundanten Speicheranschlüssen verwendet werden."
    ],
    [
      "LTO-Roboter verwalten Bandmedien für Backups, nicht die Kompatibilität gleichzeitig ausgeführter Apps.",
      "Eine Bandrobotik ist sinnvoll für automatisierte Offline- und Langzeitbackups."
    ]
  ],
  "practical-1-9": [
    [
      "Ein Enterprise Agreement im dargestellten Lizenzsystem ist auf größere Unternehmen zugeschnitten; 25 Arbeitsplätze erfüllen die dafür angesetzte Größenordnung nicht.",
      "Enterprise Agreement passt bei größeren standardisierten Organisationen."
    ],
    [
      "Fibre Channel vernetzt Storage-Komponenten und regelt keine Microsoft-Lizenzrechte.",
      "Fibre Channel ist für Speicheranbindungen in Rechenzentren geeignet."
    ],
    [
      "Software Defined Storage abstrahiert Speicherverwaltung und ist kein Lizenzvertrag.",
      "SDS eignet sich für zentrale softwaregesteuerte Storage-Pools."
    ]
  ],
  "practical-1-10": [
    [
      "DAS ist lokal angebundener Speicher; es kann keine Hosts konsolidieren oder in den Stromsparmodus versetzen.",
      "DAS passt für kurze leistungsfähige Speicheranbindungen."
    ],
    [
      "SDN automatisiert Netzwerkregeln, entscheidet aber nicht allein über die Migration und Abschaltung von Hypervisor-Hosts.",
      "SDN ist richtig, wenn Netzkonfiguration und Paketweiterleitung zentralisiert werden sollen."
    ],
    [
      "RAID 1 spiegelt Daten auf Platten und verbessert keine VM-bedingte Energieeinsparung.",
      "RAID 1 passt, wenn eine Datenkopie beim Ausfall einer Platte verfügbar bleiben soll."
    ]
  ],
  "practical-2-1": [
    [
      "Magnetband benötigt sequentiellen Zugriff und eignet sich nicht für zufällige schnelle Datenbank-I/Os.",
      "Ein Tape-Archiv ist richtig für günstige langjährige und offline gelagerte Backups."
    ],
    [
      "Blu-ray hat für aktive Datenbanken zu geringe Geschwindigkeit und Kapazität.",
      "Optische Medien sind für ausgewählte unveränderliche Langzeitarchive geeignet."
    ],
    [
      "Office-SaaS stellt fertige Benutzeranwendungen bereit und keinen schnellen lokalen Blockspeicher für eine Datenbank.",
      "SaaS ist richtig, wenn eine fertige Office-Anwendung im Browser benötigt wird."
    ]
  ],
  "practical-2-2": [
    [
      "DAS ist direkt an einen Host gebunden und nicht ohne zusätzliche Dateidienste gleichzeitig von vielen Nutzern erreichbar.",
      "DAS ist sinnvoll für schnellen lokalen Speicher eines einzelnen Servers."
    ],
    [
      "RAID 0 erhöht die I/O-Leistung eines Diskverbundes, bietet aber weder ein Dateifreigabeprotokoll noch Redundanz.",
      "RAID 0 kann für unkritische temporäre Daten verwendet werden."
    ],
    [
      "Ein FC-SAN wäre technisch leistungsfähig, verursacht aber für einfache gemeinsame Ordner höhere Anschaffungs- und Verwaltungskosten als NAS.",
      "FC-SAN ist sinnvoll für performante gemeinsame Blockspeicher von Serverclustern."
    ]
  ],
  "practical-2-3": [
    [
      "Ein NAS nur mit SMB-/NFS-Dateifreigaben bietet nicht automatisch den geforderten blockbasierten SAN-Zugriff.",
      "Ein NAS ist für gemeinsame Ordner passend; mit iSCSI kann ein geeignetes System auch Blockzugriff bieten."
    ],
    [
      "Ein USB-Stick an einem Host ist nicht redundant gemeinsam von mehreren Clusterhosts erreichbar.",
      "USB-Wechseldatenträger eignen sich für kleine lokale Dateien oder Bootmedien."
    ],
    [
      "DVDs sind langsam, nicht laufend beschreibbar wie aktive Datastores und nicht als gemeinsamer Clusterblockspeicher geeignet.",
      "Optische Discs sind nur für begrenzte Archiv- oder Distributionszwecke passend."
    ]
  ],
  "practical-2-4": [
    [
      "RAID 0 hat keinerlei Ausfalltoleranz; bereits ein Plattenfehler kann den Datenbestand zerstören.",
      "RAID 0 wäre richtig, wenn nur Geschwindigkeit für verzichtbare Daten gewünscht ist."
    ],
    [
      "RAID 5 toleriert lediglich einen Laufwerksausfall, nicht die ausdrücklich geforderten zwei.",
      "RAID 5 passt, wenn mit drei oder mehr Disks maximal ein Ausfall abgefangen werden muss."
    ],
    [
      "JBOD bietet ohne weitere Absicherung keine eingebaute Parität oder Spiegelung.",
      "JBOD passt als Sammlung eigenständiger Datenträger, wenn Redundanz separat gelöst wird."
    ]
  ],
  "practical-2-5": [
    [
      "RAID 0 verteilt Datenblöcke zur Leistungssteigerung, aber erzeugt keine identischen Spiegelkopien.",
      "RAID 0 eignet sich für nichtkritische hohe Datenübertragungsraten."
    ],
    [
      "JBOD ist eine einfache Sammlung von Laufwerken ohne festgelegtes Spiegelverfahren.",
      "JBOD ist sinnvoll, wenn einzelne Laufwerke separat verwaltet werden sollen."
    ],
    [
      "Ein entferntes Cloud-Archiv ist eine Backupkopie, aber kein synchroner gespiegelter Zwei-Platten-Verbund.",
      "Cloud-Archivierung passt zur längerfristigen Aufbewahrung ausgelagerter Daten."
    ]
  ],
  "practical-2-6": [
    [
      "JBOD hat ohne zusätzliche Maßnahmen keine Spiegelung oder Parität und erfüllt daher die verlangte Redundanz nicht.",
      "JBOD ist für einfaches Anbinden einzelner Laufwerke geeignet."
    ],
    [
      "Eine einzelne SATA-Disk besitzt keinen zweiten Datenträger, der beim Defekt übernehmen könnte.",
      "Eine Einzelplatte ist ausreichend für geringe Last und verzichtbare beziehungsweise anderweitig gesicherte Daten."
    ],
    [
      "RAID 0 bietet Striping und Leistung, jedoch keinerlei Redundanz.",
      "RAID 0 ist richtig für schnelle nichtkritische Arbeitsdaten mit separater Sicherung."
    ]
  ],
  "practical-2-7": [
    [
      "Eine einzelne Festplatte stellt keinen zweiten Controller bereit und kann bei Defekt ausfallen.",
      "Einzellaufwerke sind nur bei niedrigen Anforderungen oder mit externer Absicherung vertretbar."
    ],
    [
      "Single Loop bietet nur einen Verbindungspfad und keinen redundanten Storage-Controller.",
      "Single Loop ist sinnvoll für einfache günstige Systeme ohne Controller-Failover-Anforderung."
    ],
    [
      "Double Loop sorgt für redundante Kabelpfade, aber nicht automatisch für einen zweiten Storage-Controller.",
      "Double Loop passt, wenn in erster Linie Kabel- oder Pfadausfälle abgefangen werden sollen."
    ]
  ],
  "practical-2-8": [
    [
      "Single Loop verbindet Controller und Disks nur über einen einfachen Pfad und hat keine Standortredundanz.",
      "Es eignet sich allenfalls für einfache lokale Speicherinstallationen."
    ],
    [
      "Ein lokaler DAS-Server kann zusammen mit seinem Standort verloren gehen.",
      "DAS passt für performante Einzelserver, nicht als alleinige standortübergreifende Absicherung."
    ],
    [
      "RAID 0 besitzt weder Laufwerksredundanz noch einen zweiten Standort.",
      "RAID 0 dient ausschließlich der Leistung bei anderweitig geschützten Daten."
    ]
  ],
  "practical-2-9": [
    [
      "Ein DVD-Brenner stellt keine gleichzeitigen SMB-Freigaben und iSCSI-Volumes für mehrere Server bereit.",
      "DVD-Brenner passen zum Erstellen einzelner optischer Datenträger."
    ],
    [
      "RAID 0 legt nur fest, wie Datenblöcke auf Platten verteilt werden, nicht welche Netzwerkprotokolle ein Storage unterstützt.",
      "RAID 0 ist für Leistung, aber nicht für Unified Storage gedacht."
    ],
    [
      "Ethernet-Kabel allein bieten keine Datei- und Blockprotokolle; dafür braucht es Controller, Software und Dienste.",
      "Ethernet stellt die Netzverbindung für SMB-, NFS- oder iSCSI-Zugriffe bereit."
    ]
  ],
  "practical-2-10": [
    [
      "MTBF ist die durchschnittliche Zeit zwischen Hardwarefehlern und setzt keine Grenze für verlorene Datenminuten.",
      "MTBF eignet sich zur Betrachtung der Zuverlässigkeit von Komponenten."
    ],
    [
      "PUE ist eine Kennzahl für Energieeffizienz im Rechenzentrum, nicht für Datenverlust.",
      "PUE hilft, den Energieaufwand für IT und Nebenanlagen zu vergleichen."
    ],
    [
      "RTO beschreibt die erlaubte Ausfallzeit, nicht den Datenrückstand. 15 Tage Wiederanlaufzeit wären bei 24/7-Betrieb zudem unpassend.",
      "RTO wäre richtig, wenn gefragt wird, wann der Dienst wieder laufen muss."
    ]
  ],
  "practical-3-1": [
    [
      "MTBF misst durchschnittliche Zeit zwischen Ausfällen, nicht die Wiederherstellung nach einem konkret eingetretenen Fehler.",
      "MTBF ist für Zuverlässigkeitsbewertungen und Wartungsplanung relevant."
    ],
    [
      "PUE misst Stromnutzungseffizienz eines Rechenzentrums, nicht die Wiederherstellungsdauer.",
      "PUE ist bei Energieoptimierung und Rechenzentrumsvergleich sinnvoll."
    ],
    [
      "Eine reine Serviceanforderung zu Speicherkosten beantwortet nicht die geforderte Stunde bis zum Neustart.",
      "Kosten-SLRs sind sinnvoll, wenn der zulässige Preis oder Serviceumfang vertraglich festgelegt werden soll."
    ]
  ],
  "practical-3-2": [
    [
      "Eine Jahresarchivierung speichert seltene langfristige Stände, aber nicht die täglichen Änderungen seit dem letzten Lauf.",
      "Sie ist für rechtlich relevante abgeschlossene Geschäftsjahre geeignet."
    ],
    [
      "Eine nicht versionierte Replikation übernimmt auch fehlerhafte Änderungen und schafft keine nachvollziehbaren historischen Backupstände.",
      "Replikation ist gut, um aktuelle Daten nach Hostausfall an einem zweiten System verfügbar zu halten."
    ],
    [
      "Tägliche Vollsicherungen kopieren jeden Tag alle Daten und erfüllen nicht den Wunsch, nur Änderungen zu sichern.",
      "Vollsicherungen sind sinnvoll bei kleinen Datenmengen oder als regelmäßige Basisstände."
    ]
  ],
  "practical-3-3": [
    [
      "RAID 0 ist kein Backup und liefert keine wiederherstellbaren historischen Sicherungssätze.",
      "RAID 0 passt bei performanten temporären Daten und unabhängigen Backups."
    ],
    [
      "Eine lange inkrementelle Kette benötigt beim klassischen Restore das Vollbackup sowie alle aufeinanderfolgenden Inkremente.",
      "Inkrementell ist sinnvoll, wenn das Backupfenster knapp und der Datenzuwachs klein sein muss."
    ],
    [
      "Eine reine Replikation enthält möglicherweise keinen Stand vor versehentlichem Löschen und ersetzt keine zwei vollständigen Backup-Sätze.",
      "Replikation ist sinnvoll für schnelle Übernahme bei Serverausfall."
    ]
  ],
  "practical-3-4": [
    [
      "Eine ständig beschreibbare Netzfreigabe kann von Ransomware mit erreichbaren Rechten verändert oder gelöscht werden.",
      "Netzfreigaben können für schnelle Online-Backups dienen, sollten aber nicht die einzige Kopie sein."
    ],
    [
      "RAID 1 spiegelt auch verschlüsselte beziehungsweise gelöschte Daten; die Spiegelung ist kein Schutz vor einem Netzwerkangriff.",
      "RAID 1 ist sinnvoll gegen den mechanischen Ausfall einer einzelnen Festplatte."
    ],
    [
      "Dieselben Administratorzugangsdaten ermöglichen einem kompromittierten Konto Zugriff auf Produktion und Backup.",
      "Getrennte Konten und Backup-Rechte begrenzen den Angriffsradius."
    ]
  ],
  "practical-3-5": [
    [
      "RAID 5 schützt Daten bei einem Laufwerksausfall, legt aber keine zeitlich gestaffelten Sicherungsgenerationen fest.",
      "RAID 5 ist sinnvoll für Speicherarrays mit einer tolerierten defekten Platte."
    ],
    [
      "OpenFlow steuert Weiterleitungsregeln in SDN-Netzen und hat keine Backup-Aufbewahrungsfunktion.",
      "OpenFlow ist passend bei zentral programmierter Netzwerksteuerung."
    ],
    [
      "Rapid Elasticity passt Cloud-Kapazitäten dynamisch an; es sagt nichts über tägliche, wöchentliche und monatliche Backups.",
      "Rapid Elasticity ist wichtig, wenn Cloud-Ressourcen bei Lastspitzen hochskaliert werden sollen."
    ]
  ],
  "practical-3-6": [
    [
      "Alle VMs komplett zu übertragen nutzt die knappe Leitung unnötig, obwohl zahlreiche Datenblöcke identisch sind.",
      "Vollständige Übertragungen sind bei sehr kleinen Datenmengen oder Basisbackups vertretbar."
    ],
    [
      "Mehr Kühlleistung verbessert bei Bedarf Hardwaretemperaturen, reduziert aber nicht die Menge zu übertragender Backupdaten.",
      "Zusätzliche Kühlung ist sinnvoll, wenn Server überhitzen."
    ],
    [
      "Bei serverseitiger Deduplizierung müssen gleiche Blöcke erst durch die langsame Verbindung übertragen werden.",
      "Serverseitige Deduplizierung passt, wenn Bandbreite ausreichend und zentrale Speicherersparnis wichtiger ist."
    ]
  ],
  "practical-3-7": [
    [
      "Ein kleineres RTO ohne Test ist eine unbelegte Zielbehauptung: Man weiß nicht, ob die Wiederherstellung überhaupt funktioniert.",
      "RTO kann erst nach realistischen Recovery-Tests zuverlässig geplant oder verbessert werden."
    ],
    [
      "Ein anderes Firmenlogo ändert weder Datenintegrität noch Wiederherstellungsfähigkeit.",
      "Corporate Design ist für Benutzeroberflächen relevant, nicht für Recovery-Prüfungen."
    ],
    [
      "Das sofortige Löschen der Backups kann die einzige wiederherstellbare Kopie vernichten.",
      "Alte Sicherungen werden erst nach Retention-Regeln und erfolgreicher Konsistenzprüfung gelöscht."
    ]
  ],
  "practical-3-8": [
    [
      "Ein Export einzelner Textdateien enthält kein Betriebssystem, Treiber und vollständige Serverkonfiguration.",
      "Datei-Backups sind passend, wenn nur bestimmte Dokumente und Ordner wiederhergestellt werden müssen."
    ],
    [
      "Ein NAS-Switch verbindet Netzwerkgeräte, speichert aber kein vollständiges Systemimage.",
      "Netzwerkswitches sind erforderlich für Verbindungen zwischen Clients und Storage."
    ],
    [
      "Ein SLA beschreibt Servicepflichten, erzeugt aber keine Datenkopie und kann deshalb keinen Server wiederherstellen.",
      "SLAs sind sinnvoll, um Wiederherstellungsfristen verbindlich festzulegen."
    ]
  ],
  "practical-3-9": [
    [
      "Zusätzliche Backups am selben Standort können gemeinsam durch Feuer zerstört werden.",
      "Mehr lokale Versionen sind sinnvoll gegen versehentliches Löschen, aber nicht allein gegen Standortverlust."
    ],
    [
      "RAID 0 schützt nicht einmal vor einer defekten Platte, geschweige denn vor einem Brand.",
      "RAID 0 passt für temporäre performante Daten mit externer Sicherung."
    ],
    [
      "Das Löschen von Protokollen verhindert die Fehlerkontrolle und macht den Backupzustand weniger nachvollziehbar.",
      "Protokolle sind notwendig, um fehlgeschlagene Sicherungen zu erkennen und zu untersuchen."
    ]
  ],
  "practical-3-10": [
    [
      "RAM verliert ohne Energie die gespeicherten Daten und ist für langfristige Backuphaltung ungeeignet.",
      "Arbeitsspeicher eignet sich für flüchtige Caches und Rechenoperationen."
    ],
    [
      "Ohne Aufbewahrungsregeln können notwendige alte Stände gelöscht oder Daten unnötig lange gespeichert werden.",
      "Retention-Regeln dienen der geordneten Löschung und Einhaltung von Pflichten."
    ],
    [
      "Eine einzelne ständig verfügbare SSD ohne Sicherungshistorie bietet keinen Schutz gegen ältere logische Fehler, Ransomware oder Langzeitaufbewahrungsanforderungen.",
      "SSDs sind sinnvoll für sehr schnelle kurzfristige Snapshots als eine von mehreren Ebenen."
    ]
  ],
  "practical-4-1": [
    [
      "IaaS liefert virtuelle Infrastruktur. Betriebssystem und individuelle Software müssten erst selbst betrieben oder entwickelt werden.",
      "IaaS passt, wenn besondere Serverkonfigurationen und volle Kontrolle über die Anwendung benötigt werden."
    ],
    [
      "Ein Fibre-Channel-SAN ist ein Speichernetzwerk und keine fertige browserbasierte Buchhaltungsanwendung.",
      "Ein SAN ist sinnvoll für große performante Storage-Infrastrukturen."
    ],
    [
      "RAID 10 regelt Spiegelung und Striping von Datenträgern, nicht die Bereitstellung von Buchhaltungsfunktionen.",
      "RAID 10 passt für performante redundante Festplattenverbünde."
    ]
  ],
  "practical-4-2": [
    [
      "Ein reines Tape-Archiv speichert langfristig Sicherungen und stellt keine verwaltete Laufzeitumgebung für eigenen Code bereit.",
      "LTO ist für Offline-Backups geeignet."
    ],
    [
      "Manuelle Routerkonfiguration schafft keine App-Laufzeitplattform und würde den gewünschten Betriebsaufwand eher erhöhen.",
      "Routerkonfiguration ist relevant bei Netzsegmentierung oder speziellen Routen."
    ],
    [
      "Eine lokale SSD speichert Daten, übernimmt aber weder Betriebssystempflege noch Deployment einer App.",
      "SSD ist sinnvoll, wenn die Anwendung einen schnellen Datenspeicher braucht."
    ]
  ],
  "practical-4-3": [
    [
      "Ein lokaler DVD-Server stellt keine flexible Cloud-Infrastruktur mit virtuellen Maschinen bereit.",
      "Optische Datenträger sind für Archive und Installation geeignet."
    ],
    [
      "SaaS stellt eine fertige Anwendung bereit; die gewünschte Verwaltung des Betriebssystems durch den Kunden ist dort normalerweise nicht vorgesehen.",
      "SaaS passt, wenn nur fertige Unternehmenssoftware genutzt werden soll."
    ],
    [
      "Backup as a Service stellt Datensicherungsleistungen bereit, nicht beliebige selbstverwaltete virtuelle Server.",
      "BaaS ist sinnvoll zur Auslagerung automatisierter Backups."
    ]
  ],
  "practical-4-4": [
    [
      "Community Cloud teilt Infrastruktur unter Organisationen mit gemeinsamen Anforderungen; sie beschreibt nicht die Kombination interner und öffentlicher Cloud.",
      "Community Cloud passt beispielsweise für mehrere Organisationen einer Branche."
    ],
    [
      "Lokale DAS-Platten sind Speichermedien, keine externe Public-Cloud-Komponente.",
      "DAS passt für schnelle lokale Serverlaufwerke."
    ],
    [
      "Eine reine Public Cloud ohne Private Cloud würde die ausdrücklich intern betriebenen vertraulichen Systeme nicht abbilden.",
      "Public Cloud allein ist sinnvoll, wenn alle genutzten Dienste dort liegen."
    ]
  ],
  "practical-4-5": [
    [
      "RAID 6 ist ein Laufwerksredundanzverfahren und keine Strategie für mehrere Cloud-Provider.",
      "RAID 6 ist sinnvoll zum Schutz gegen zwei Plattenausfälle."
    ],
    [
      "Single Loop bezeichnet einfache Speicherverkabelung und keine Verteilung von Diensten auf mehrere Anbieter.",
      "Single Loop kann bei einfachen lokalen Storages vorkommen."
    ],
    [
      "Sessionvirtualisierung stellt entfernte Benutzerdesktops bereit, reduziert aber nicht automatisch Cloud-Anbieterbindung.",
      "Sessionvirtualisierung ist für zentral bereitgestellte Desktopumgebungen richtig."
    ]
  ],
  "practical-4-6": [
    [
      "Ein RAID-Controller steuert Festplatten und keine Netzwerkregeln vieler Switches.",
      "RAID-Controller braucht man zur Datenträgerredundanz."
    ],
    [
      "Jeden Switch manuell zu ändern ist bei vielen Geräten fehleranfällig und erfüllt den Wunsch nach zentraler, schneller Konfiguration nicht.",
      "Bei wenigen festen Netzwerkgeräten kann manuelle Konfiguration noch ausreichend sein."
    ],
    [
      "Bandrotation regelt Backups auf Tapes und hat keinen Einfluss auf programmierte Paketweiterleitung.",
      "Tape-Rotation ist sinnvoll für mehrere Backupgenerationen."
    ]
  ],
  "practical-4-7": [
    [
      "Ein SLA legt Leistungsziele und Verantwortlichkeiten fest, abstrahiert aber keine physische Speicherhardware.",
      "SLAs sind sinnvoll, um Verfügbarkeit und Servicequalität verbindlich zu regeln."
    ],
    [
      "Ein DVD-Brenner ist ein einzelnes physisches Medium und keine zentral steuerbare Speicherarchitektur.",
      "DVDs sind für die Ausgabe kleiner Archive geeignet."
    ],
    [
      "Eine nur lokal erreichbare Festplatte bleibt fest an eine Hardware gebunden und bietet keine flexible, abstrahierte Speichersteuerung.",
      "Lokale Platten passen zu einzelnen kleinen Servern ohne zentralen Storagebedarf."
    ]
  ],
  "practical-4-8": [
    [
      "Eine Migration vor Prüfung der Datenstandorte kann personenbezogene Informationen unzulässig verarbeiten oder Compliance-Regeln verletzen.",
      "Eine Migration ist sinnvoll nach Risikoanalyse, vertraglicher Klärung und Pilotphase."
    ],
    [
      "Ohne Datenschutzprüfung kennt das Unternehmen nicht, welche Rechtsgrundlagen und Schutzmaßnahmen nötig sind.",
      "Datenschutzprüfung gehört bei personenbezogenen Cloud-Daten zum Pflichtprogramm."
    ],
    [
      "Der niedrigste Preis verrät nichts über Verfügbarkeit, Subunternehmer, Sicherheit und spätere Exit-Kosten.",
      "Ein Preisvergleich ist sinnvoll als Teil einer vollständigen Wirtschaftlichkeitsprüfung."
    ]
  ],
  "practical-4-9": [
    [
      "Das Logo des Anbieters hat keinen Einfluss darauf, ob Daten in einem portierbaren Format exportiert werden können.",
      "Branding ist bei Nutzerkommunikation und Oberfläche relevant."
    ],
    [
      "Ohne Testmigration kann zu spät auffallen, dass Exportformate, Schnittstellen oder Datenmengen den Wechsel verhindern.",
      "Testmigrationen sind sinnvoll, um Migrationsverfahren und Datenintegrität zu erproben."
    ],
    [
      "Ohne vertragliche Datenrückgabe kann ein Anbieterwechsel blockiert oder stark verteuert werden.",
      "Exit-Klauseln regeln Exportformate, Fristen, Unterstützung und endgültige Löschung."
    ]
  ],
  "practical-4-10": [
    [
      "Auch geprüfte Cloud-Systeme können durch neue Schwachstellen oder Fehlkonfigurationen angegriffen werden; C5 schließt nie alle Angriffe aus.",
      "Regelmäßige Audits und Patchmanagement mindern Risiken, garantieren aber keine absolute Sicherheit."
    ],
    [
      "C5 prüft definierte Sicherheitskriterien und ersetzt nicht jede Datenschutzprüfung für alle Staaten und Datenarten.",
      "Rechtliche Prüfung muss die konkrete Verarbeitung, Region und beteiligten Dienstleister berücksichtigen."
    ],
    [
      "Kunden müssen ihre Benutzer und Berechtigungen auch bei einem C5-geprüften Anbieter selbst passend konfigurieren.",
      "MFA, Rollen und Least Privilege sind typische Aufgaben des Cloud-Nutzers."
    ]
  ]
};
