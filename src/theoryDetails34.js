export const theoryDetails34 = {
  "mod3-1": [
    [
      "Langzeitarchivierung bewahrt Daten rechtlich oder organisatorisch über Jahre auf; sie ist nicht der primäre Zweck einer aktuellen Wiederherstellungskopie.",
      "Archivierung ist sinnvoll für abgeschlossene Vorgänge mit gesetzlicher Aufbewahrungsfrist."
    ],
    [
      "Lastverteilung verteilt laufende Arbeitslast auf mehrere Server und schützt nicht vor gelöschten Dateien.",
      "Load Balancing ist wichtig, wenn Webanwendungen unter hoher Last erreichbar bleiben sollen."
    ],
    [
      "Benutzerverwaltung regelt Identitäten und Rechte, ersetzt aber keine wiederherstellbaren Datenstände.",
      "Identity Management ist relevant für sichere Anmeldungen und Berechtigungen."
    ]
  ],
  "mod3-2": [
    [
      "Sofortige Wiederherstellung eines aktuellen Datenstands ist ein Backup-/Snapshot-Ziel, keine langfristige Archivierungsfunktion.",
      "Schnelle Snapshots sind bei versehentlichen Änderungen an aktiven Dateien nützlich."
    ],
    [
      "Lastverteilung zwischen Cloud-Regionen dient Erreichbarkeit und Performance, nicht Aufbewahrung abgeschlossener Datensätze.",
      "Multi-Region-Traffic-Management ist sinnvoll für global erreichbare Anwendungen."
    ],
    [
      "Serverkühlung schützt Hardware vor Überhitzung, erhält aber keinen archivierten Datenstand.",
      "Kühlanlagen werden in Rechenzentren zur thermischen Betriebssicherheit benötigt."
    ]
  ],
  "mod3-3": [
    [
      "Replikation kann laufend online synchron oder asynchron erfolgen; 'immer offline' ist sachlich falsch.",
      "Offline-Aufbewahrung passt zu Air-Gap-Backups, nicht zu gewöhnlicher Replikation."
    ],
    [
      "Replikation erzeugt sehr wohl Datenkopien. Das Problem ist, dass auch ungewollte Änderungen übernommen werden.",
      "Replikation ist sinnvoll, um nach einem Standort- oder Systemausfall eine zweite aktuelle Kopie zu haben."
    ],
    [
      "Replikation kann über Netzwerke auf Festplatten- oder Cloud-Systeme erfolgen und ist nicht auf optische Medien beschränkt.",
      "Optische Datenträger sind eher eine spezielle Archivierungsoption."
    ]
  ],
  "mod3-4": [
    [
      "87 Stunden pro Jahr entsprechen ungefähr 99 Prozent Verfügbarkeit, nicht 99,9 Prozent.",
      "99 Prozent wäre angemessen, wenn ein Dienst mehrere Tage Ausfallzeit im Jahr tolerieren könnte."
    ],
    [
      "52 Minuten entsprechen ungefähr 99,99 Prozent Verfügbarkeit, also einem strengeren Ziel.",
      "99,99 Prozent ist relevant für Dienste, die nur sehr kurze jährliche Ausfälle erlauben."
    ],
    [
      "Fünf Minuten entsprechen ungefähr 99,999 Prozent Verfügbarkeit und nicht 99,9 Prozent.",
      "Fünf Neunen werden für sehr hochverfügbare Systeme angestrebt."
    ]
  ],
  "mod3-5": [
    [
      "Terabyte ist eine Einheit für Datenspeicherkapazität, kein Zuverlässigkeitsmaß.",
      "TB wird benötigt, um Sicherungsmedien und Backupvolumen zu planen."
    ],
    [
      "Ein Administratorzugriffsrecht gehört zum Berechtigungsmanagement, nicht zur Zeitspanne zwischen Fehlern.",
      "Adminrollen sind bei der Absicherung von Backupzugriffen wichtig."
    ],
    [
      "Das Sicherungsintervall legt fest, wie häufig Backups erstellt werden, und ist unabhängig vom durchschnittlichen Ausfallabstand.",
      "Kurze Intervalle sind bei niedrigen RPO-Vorgaben wichtig."
    ]
  ],
  "mod3-6": [
    [
      "'Maximum Time To Replicate' ist keine hier gemeinte etablierte MTTR-Auflösung und betrifft eher theoretisch ein Replikationszeitfenster.",
      "Replikationsverzögerung betrachtet man bei asynchronen Speicherreplikationen."
    ],
    [
      "Measured Transfer Rate beschreibt eher eine gemessene Übertragungsrate, nicht die mittlere Reparaturzeit.",
      "Übertragungsraten werden zur Planung von Backupfenstern herangezogen."
    ],
    [
      "Managed Tape Recovery ist keine allgemeine MTTR-Kennzahl.",
      "Bandwiederherstellung kann ein Restore-Verfahren sein, das in die tatsächliche MTTR eingeht."
    ]
  ],
  "mod3-7": [
    [
      "Stromverbrauch ist eine Leistungs- und Energiegröße, aber kein Ziel für maximal tolerierbaren Datenverlust.",
      "Energiekennzahlen sind bei Stromkosten und Effizienz von Rechenzentren relevant."
    ],
    [
      "Monatliche Backupkosten sind eine Budgetgröße; das RPO beschreibt dagegen eine zeitliche Grenze.",
      "Kosten werden bei Auswahl der Sicherungsmedien und Cloud-Tarife verglichen."
    ],
    [
      "Ein Lizenzvertrag hat eine vertragliche Laufzeit, aber das sagt nichts über den letzten wiederherstellbaren Datenstand.",
      "Lizenzfristen beeinflussen, wie lange Backupsoftware rechtmäßig genutzt werden darf."
    ]
  ],
  "mod3-8": [
    [
      "Die Anzahl der Backupgenerationen beschreibt historische Aufbewahrungsstände, nicht die Wiederanlaufzeit.",
      "Generationenrotation ist sinnvoll, wenn ältere Datenstände verfügbar bleiben sollen."
    ],
    [
      "Speicherkapazität bestimmt, wie viel gesichert werden kann; sie legt keine Wiederherstellungsfrist fest.",
      "Die Kapazität ist wichtig zur Dimensionierung von Backupmedien."
    ],
    [
      "Die Lebensdauer einer Festplatte ist eine Zuverlässigkeits- beziehungsweise Ersatzplanungsgröße, keine Restore-Dauer.",
      "Lebensdauern helfen beim präventiven Austausch von Laufwerken."
    ]
  ],
  "mod3-9": [
    [
      "Ein externer Lizenzvertrag regelt Nutzungsrechte, keine vom Kunden formulierten Dienstleistungsanforderungen.",
      "Lizenzverträge sind relevant für legale Softwarenutzung."
    ],
    [
      "Ein Backup-Protokoll definiert Datenübertragung, während SLR die gewünschte Verfügbarkeit oder Wiederherstellungszeit beschreibt.",
      "Backup-Protokolle spielen bei technischer Datensicherung eine Rolle."
    ],
    [
      "Redundanzhardware ist eine Maßnahme zur Erfüllung von Anforderungen, aber kein Anforderungsdokument.",
      "Redundante Netzteile oder Controller sind bei hochverfügbaren Diensten sinnvoll."
    ]
  ],
  "mod3-10": [
    [
      "Ein interner Backupdatenträger speichert Daten, enthält aber keine Dienstleistungsvereinbarung.",
      "Festplatten oder Tape eignen sich als technische Backupziele."
    ],
    [
      "RAID mit Parität schützt gegen Laufwerksfehler, ist aber kein Vertrag über Servicequalität.",
      "RAID 5/6 sind bei Ausfallsicherheit von Speichersystemen relevant."
    ],
    [
      "Ein Storage-Protokoll dient der Datenkommunikation zwischen Geräten, nicht der Vereinbarung von Leistungen.",
      "iSCSI oder Fibre Channel sind bei Speicheranbindung relevant."
    ]
  ],
  "mod3-11": [
    [
      "Ein USB-Backup ist ein Speichermedium, keine innerbetriebliche Service-Level-Vereinbarung.",
      "Externe Datenträger können für kleine offline verwahrte Sicherungen dienen."
    ],
    [
      "Ein Vertrag mit einem externen Provider ist ein Underpinning Contract, nicht ein internes OLA.",
      "UCs sichern zugesagte Leistungen durch Zulieferer ab."
    ],
    [
      "Eine unverschlüsselte Cloud-Datei ist ein Datenobjekt und keine interne Betriebsvereinbarung.",
      "Verschlüsselung ist wichtig, wenn sensible Inhalte in einer Cloud liegen."
    ]
  ],
  "mod3-12": [
    [
      "Snapshots speichern Datenstände, regeln aber keine Leistungen zwischen Anbieter und Zulieferern.",
      "Snapshots sind hilfreich für schnelle Wiederherstellung vor fehlerhaften Änderungen."
    ],
    [
      "Deduplizierung spart identische Datenblöcke ein und hat mit externen SLA-Verträgen nichts zu tun.",
      "Deduplication ist bei vielen ähnlichen Backups oder VM-Images sinnvoll."
    ],
    [
      "Interne Schichtplanung kann den Betrieb unterstützen, ist aber keine externe vertragliche Absicherung.",
      "Ein OLA wäre die passende interne Vereinbarung zwischen Organisationseinheiten."
    ]
  ],
  "mod3-13": [
    [
      "RAM ist flüchtig und verliert bei Stromausfall den Inhalt; als langfristige Offline-Sicherung ist er ungeeignet.",
      "RAM-Caches beschleunigen temporäre Datenzugriffe."
    ],
    [
      "CPU-Register sind winzige flüchtige Rechenressourcen und keine Datenträger für Backups.",
      "Register werden von Prozessoren zur Ausführung von Befehlen genutzt."
    ],
    [
      "Ein SSD-Snapshot ist schnell, aber als einzige ständig angeschlossene Kopie nicht ausreichend gegen Ransomware oder Standortverlust geschützt.",
      "SSD-Snapshots sind nützlich für häufige kurzfristige Wiederherstellungspunkte."
    ]
  ],
  "mod3-14": [
    [
      "Ein Papierarchiv ist nicht schnell maschinell als vollständiges Serversystem wiederherstellbar.",
      "Papier eignet sich höchstens zur dokumentarischen Aufbewahrung ausgewählter Ausdrucke."
    ],
    [
      "Tape hat gute Kapazitätskosten, aber sequentielle Zugriffe und Wechselzeiten verlängern typischerweise den Restore.",
      "Magnetband ist passend für Offline- und Langzeit-Backups."
    ],
    [
      "Lochkarten besitzen winzige Kapazität und werden nicht für moderne Wiederanlaufszenarien verwendet.",
      "Sie sind historisch relevant für die Entwicklung der Datenspeicherung."
    ]
  ],
  "mod3-15": [
    [
      "Datenschutzpflichten bleiben auch bei externer Verarbeitung bestehen; die Cloud übernimmt sie nicht automatisch vollständig.",
      "Auftragsverarbeitung und geeignete Sicherheitsverträge sind bei personenbezogenen Daten nötig."
    ],
    [
      "Cloud-Backups benötigen üblicherweise Netzverbindungen für Übertragung und Wiederherstellung.",
      "Lokale offline Backups sind sinnvoll, wenn Internetverbindungen ausfallen."
    ],
    [
      "Cloud-Speicher verursacht meist laufende Kosten für Speicherung, Operationen und gegebenenfalls Datenabfluss.",
      "Kostenvergleiche sind wichtig, wenn lange Aufbewahrung und große Restores geplant werden."
    ]
  ],
  "mod3-16": [
    [
      "Eine gemeinsame Administratoranmeldung vergrößert die Angriffsfläche und ist das Gegenteil wirksamer Isolation.",
      "Getrennte Rollen und Zugangsdaten reduzieren Risiken zwischen Produktiv- und Backup-Umgebung."
    ],
    [
      "RAID 0 bietet nicht einmal Laufwerksredundanz und ist kein unabhängiges Backup.",
      "RAID 0 kann bei unkritischen temporären Arbeitsdaten für Leistung eingesetzt werden."
    ],
    [
      "Sämtliche Kopien im selben Netzwerksegment bleiben bei Angriffen häufig gemeinsam erreichbar.",
      "Ein separates offline verwahrtes Backup reduziert den gemeinsamen Angriffspfad."
    ]
  ],
  "mod3-17": [
    [
      "Inkrementell sichert nach einem Basisbackup nur neue Änderungen, nicht sämtliche ausgewählten Daten in jedem Lauf.",
      "Es ist sinnvoll für häufige Backups mit kurzen Sicherungsfenstern."
    ],
    [
      "Differenziell sichert Änderungen seit der letzten Vollsicherung und wächst bis zur nächsten Vollsicherung.",
      "Es passt, wenn ein Restore mit maximal zwei Sicherungssätzen möglich sein soll."
    ],
    [
      "Eine Replikation ohne Historie hält einen aktuellen Stand vor und ersetzt keine abgeschlossene Vollsicherung.",
      "Replikation ist sinnvoll für die rasche Übernahme beim Ausfall eines Systems."
    ]
  ],
  "mod3-18": [
    [
      "Eine Vollsicherung kopiert jedes Mal alle ausgewählten Daten, wodurch die Laufzeit deutlich länger wird.",
      "Vollsicherungen eignen sich als eigenständige Basisstände."
    ],
    [
      "Differenziell meint seit dem letzten Vollbackup, nicht seit der jeweils unmittelbar letzten Sicherung.",
      "Differenzielle Sicherungen verkürzen den Wiederherstellungsvorgang gegenüber langen Inkrementketten."
    ],
    [
      "Langzeitarchivierung verlagert abgeschlossene Daten dauerhaft und beschreibt kein tägliches Änderungsbackup.",
      "Sie wird bei rechtlich aufzubewahrenden Unterlagen verwendet."
    ]
  ],
  "mod3-19": [
    [
      "Storage vMotion verschiebt virtuelle Datenträger im laufenden Betrieb, sichert aber keinen Datenstand seit der letzten Vollsicherung.",
      "Es wird verwendet, wenn Speicherhardware ohne VM-Stillstand gewechselt wird."
    ],
    [
      "Inkrementell sichert nur seit dem letzten Backup geänderte Daten, nicht kumulativ alle Änderungen seit der Vollsicherung.",
      "Es passt für sehr kleine häufige Änderungsbackups."
    ],
    [
      "Vollsicherung enthält alle ausgewählten Daten und nicht nur seit einem Zeitpunkt veränderte Teile.",
      "Sie wird als Basisstand für spätere Änderungsbackups genutzt."
    ]
  ],
  "mod3-20": [
    [
      "Ein künftig geplantes Backup existiert zum Wiederherstellungszeitpunkt noch nicht und kann fehlende Inkremente nicht ersetzen.",
      "Zukünftige Backups sind relevant für den nächsten Sicherungszyklus, nicht für einen bestehenden Restore."
    ],
    [
      "Ohne eine Sicherung kann eine inkrementelle Backupkette nicht wiederhergestellt werden.",
      "Ohne Restorekopie wäre nur eine separate Replik oder andere Notfallquelle denkbar."
    ],
    [
      "Das letzte Inkrement enthält nur Änderungen seit dem vorigen Stand; alle Zwischenstände und der Basisstand fehlen.",
      "Nur beim synthetisch fortgeschriebenen Vollstand wäre eventuell kein manuelles Zusammensetzen nötig."
    ]
  ],
  "mod3-21": [
    [
      "Alle älteren Differenziale werden nicht benötigt; das letzte enthält bereits sämtliche Änderungen seit der letzten Vollsicherung.",
      "Bei einem inkrementellen Verfahren ist dagegen die vollständige Inkrementkette wichtig."
    ],
    [
      "Das erste Differenzial enthält spätere Änderungen noch nicht, sodass der aktuelle Wiederherstellungspunkt fehlen würde.",
      "Ein früheres Differenzial ist nur richtig, wenn bewusst genau auf den früheren Zeitpunkt zurückgegangen werden soll."
    ],
    [
      "Ein zweites Betriebssystem ist für die Wiederherstellung von Daten nicht zwingend notwendig.",
      "Ein komplettes OS-Image braucht man nur, wenn auch das System selbst wiederaufgebaut wird."
    ]
  ],
  "mod3-22": [
    [
      "Eine dauerhaft unveränderte Vollsicherung mit nachfolgenden Inkrementen entspricht Forward Deltas.",
      "Forward Deltas sind sinnvoll, wenn der Ausgangsstand unverändert bleiben und Änderungen separat verfolgt werden sollen."
    ],
    [
      "Reverse Deltas kann auf HDD-, SSD- oder andere unterstützte Backends gespeichert werden; Tape ist keine definierende Voraussetzung.",
      "Tape eignet sich als zusätzliches Offline-Archivmedium."
    ],
    [
      "Das Formatieren eines Servers würde Daten zerstören und hat mit dem Aufbau einer Sicherungskette nichts zu tun.",
      "Eine Formatierung ist nur Teil einer geplanten Neuinstallation oder Wiederherstellung auf leere Datenträger."
    ]
  ],
  "mod3-23": [
    [
      "Ein vollständiges Neulesen aller Produktivdaten ist gerade die klassische Vollsicherung, nicht das synthetische Zusammenführen vorhandener Backups.",
      "Eine gewöhnliche Vollsicherung ist sinnvoll bei überschaubaren Datenmengen und ausreichendem Zeitfenster."
    ],
    [
      "Routerspiegelung beschreibt Netzwerkredundanz und ist kein Backup-Verfahren für gespeicherte Dateien.",
      "Redundante Netzwerkgeräte erhöhen die Verfügbarkeit von Netzwerkverbindungen."
    ],
    [
      "Ein einzelnes kleines Inkrement enthält keinen vollständigen Datenstand und ist noch keine synthetische Vollsicherung.",
      "Inkremente sind sinnvoll zur platzsparenden Speicherung kurzer Änderungsintervalle."
    ]
  ],
  "mod3-24": [
    [
      "Unverschlüsselte Uploads gefährden Vertraulichkeit und verringern keine doppelten Datenblöcke.",
      "Verschlüsselte Übertragung ist bei Cloud-Backups wichtig."
    ],
    [
      "RAID 6 schützt vor Festplattenausfällen und reduziert nicht per Deduplizierung redundante Dateiinhalte.",
      "RAID 6 ist sinnvoll, wenn zwei Laufwerke gleichzeitig ausfallen dürfen."
    ],
    [
      "Das Vervierfachen aller Datensätze erhöht den Platzverbrauch; Deduplizierung macht das Gegenteil.",
      "Replikation kann bewusst Kopien für Redundanz erstellen, aber nicht als Speicherplatzoptimierung."
    ]
  ],
  "mod3-25": [
    [
      "Nach der Wiederherstellung können die ursprünglichen Uploaddaten nicht nachträglich eingespart werden.",
      "Deduplizierung muss vor oder während der Übertragung erfolgen, wenn Bandbreite gespart werden soll."
    ],
    [
      "Offline-Archivierung reduziert nicht automatisch den Traffic zwischen Client und aktivem Backupserver.",
      "Offline-Aufbewahrung ist sinnvoll für Ransomware-Schutz und Langzeitbackups."
    ],
    [
      "Ein Router leitet Pakete, identifiziert aber normalerweise keine gleichen VM-Datenblöcke für Deduplizierung.",
      "QoS am Router kann Bandbreite priorisieren, aber nicht die Backup-Blockdeduplizierung ersetzen."
    ]
  ],
  "mod3-26": [
    [
      "Serverkühlung steuert thermische Luft- und Flüssigkeitsströme, nicht die Aufbewahrungsintervalle von Backups.",
      "Warm-/Kaltgänge sind im Rechenzentrum relevant."
    ],
    [
      "Parität ermöglicht Rekonstruktion ausgefallener Datenblöcke bei RAID, erzeugt aber keine historischen Sicherungsgenerationen.",
      "RAID 5 und RAID 6 sind für Laufwerksfehlertoleranz geeignet."
    ],
    [
      "Cloud-Verträge regeln Leistungen und Rechte, nicht von sich aus die tägliche/wöchentliche/monatliche Sicherungsrotation.",
      "Ein SLA kann Backupintervalle vereinbaren; die Rotation wird technisch durch eine Backupstrategie umgesetzt."
    ]
  ],
  "mod3-27": [
    [
      "Automatisierte Backups sind gerade für die Einhaltung regelmäßiger Sicherungsintervalle sinnvoll; FIFO verbietet sie nicht.",
      "Zeitpläne helfen, menschliche Auslassungen zu vermeiden."
    ],
    [
      "FIFO entfernt die älteste Sicherung zuerst, nicht die neueste.",
      "Das gezielte Verwerfen neuester Sicherungen kann bei fehlerhaften Daten bewusst vorkommen, ist aber keine FIFO-Rotation."
    ],
    [
      "Unbegrenzte Aufbewahrung wäre angesichts endlicher Kapazität praktisch und wirtschaftlich problematisch.",
      "Rechtliche Aufbewahrungsfristen und Generationen bestimmen, wann Sicherungen gelöscht werden."
    ]
  ],
  "mod3-28": [
    [
      "Erst Geräte kaufen und dann die Anforderungen ignorieren verhindert kein Datenverlustszenario.",
      "Beschaffung ist sinnvoll nach einer Risiko- und Bedarfsanalyse."
    ],
    [
      "Reine Gerätebestellung ohne Sicherungsregel, Aufbewahrung und Restoretest liefert keine funktionierende Backupstrategie.",
      "Hardwareauswahl ist nur ein Teil der Planung."
    ],
    [
      "Ungeplantes Löschen kann Sicherungen zerstören; Verschlüsselung allein ersetzt weder Plan noch Test.",
      "Verschlüsselung ist eine ergänzende Schutzmaßnahme für vertrauliche Sicherungsdaten."
    ]
  ],
  "mod4-1": [
    [
      "RAID, SAN und NAS bezeichnen Redundanz beziehungsweise Speicherarchitekturen, keine drei Cloud-Serviceebenen.",
      "Die Begriffe sind bei Speicherplanung relevant: RAID im Laufwerksverbund, NAS für Dateien, SAN für Blockspeicher."
    ],
    [
      "MTTR, MTBF und MTTF sind Zuverlässigkeitskennzahlen, keine Cloud-Servicemodelle.",
      "Sie dienen der Beurteilung von Ausfallhäufigkeit und Reparaturdauer."
    ],
    [
      "VPN, HDMI und USB sind unterschiedliche Verbindungs- beziehungsweise Schnittstellentechnologien, keine Cloud-Serviceebenen.",
      "VPN schützt Netzwerkverbindungen, HDMI überträgt Bild/Ton, USB verbindet Peripherie."
    ]
  ],
  "mod4-2": [
    [
      "'Integrity as a Storage' ist keine gebräuchliche Bedeutung von IaaS; Integrität ist ein Schutzziel.",
      "Integrität wird relevant, wenn Daten vor unbemerkter Veränderung geschützt werden sollen."
    ],
    [
      "'Internet as a Software' ist kein definiertes Cloud-Servicemodell.",
      "Ein Internetzugang ist Voraussetzung für viele Public-Cloud-Dienste, aber nicht IaaS."
    ],
    [
      "'Identity as a Subscription' ist keine gebräuchliche IaaS-Auflösung; Identitätsdienste können selbst SaaS sein.",
      "Identity-as-a-Service ist relevant zur zentralen Nutzeranmeldung."
    ]
  ],
  "mod4-3": [
    [
      "DAS ist lokal an Server angeschlossener Speicher und keine fertige Softwareanwendung.",
      "DAS passt zu lokal betriebenen Datenbanken und Caching."
    ],
    [
      "IaaS stellt Rechenleistung, Speicher und Netzwerke bereit; Anwendung und Betriebssystem muss der Nutzer häufig selbst verwalten.",
      "IaaS ist sinnvoll, wenn eigene Serverumgebungen in der Cloud betrieben werden sollen."
    ],
    [
      "PaaS stellt die Laufzeitplattform bereit, auf der eigene Anwendungen entwickelt und betrieben werden.",
      "PaaS ist richtig, wenn Entwickler eigenen Code ausführen wollen, aber die Plattform nicht verwalten."
    ]
  ],
  "mod4-4": [
    [
      "NAS stellt gemeinsame Dateien über ein Netzwerk bereit, nicht die Laufzeitumgebung für eigene Anwendungen.",
      "NAS ist passend für Dateiablagen und Backups."
    ],
    [
      "RAID 10 ist ein Verbund zur Spiegelung und Verteilung von Daten, keine Cloud-Plattform.",
      "RAID 10 ist sinnvoll bei hoher Speicher-I/O-Leistung und Redundanz."
    ],
    [
      "SaaS stellt eine fertige Anwendung bereit; bei eigener App-Entwicklung mit gemanagter Plattform passt PaaS.",
      "SaaS ist richtig, wenn nur eine fertige CRM- oder Buchhaltungslösung genutzt werden soll."
    ]
  ],
  "mod4-5": [
    [
      "Mirroring kopiert Daten redundant auf mehrere Datenträger und steuert keine Ressourcenbestellungen.",
      "RAID 1 nutzt Spiegelung, wenn ein Plattenausfall abgefangen werden soll."
    ],
    [
      "Cold Storage bewahrt selten benötigte Daten günstig und mit längerer Abrufzeit auf.",
      "Cold Storage eignet sich für Archive und langfristige Backups."
    ],
    [
      "Single Loop beschreibt einen einfachen Verbindungsweg zum Speichersystem und keine Cloud-Bestellfunktion.",
      "Single Loop kann bei einfachen Storages ohne Pfadredundanz vorkommen."
    ]
  ],
  "mod4-6": [
    [
      "Ein Cloud-Anbieter muss nicht für jeden Mandanten eigene physische Server bereitstellen; gemeinsam genutzte Ressourcen werden logisch getrennt.",
      "Dedizierte Bare-Metal-Instanzen werden genutzt, wenn besondere Isolation oder Spezialhardware erforderlich ist."
    ],
    [
      "Das automatische Löschen aller Sicherungen wäre gefährlich und hat nichts mit Ressourcen-Pooling zu tun.",
      "Backup-Retention löscht nur Stände nach festgelegten Aufbewahrungsregeln."
    ],
    [
      "Das Abschalten aller Netzwerkknoten würde den Dienst unterbrechen; Pooling verteilt Ressourcen, statt die Infrastruktur pauschal abzuschalten.",
      "Unbenutzte Hosts können im Energiemanagement selektiv in Standby gehen."
    ]
  ],
  "mod4-7": [
    [
      "Offline-Magnetband ist eine Backupmethode und beschreibt nicht die dynamische Anpassung aktiver Cloud-Kapazität.",
      "Air-Gap-Tapes passen zur Ransomware-sicheren Langzeitaufbewahrung."
    ],
    [
      "Langzeitarchivierung dient Aufbewahrungsfristen und nicht dem schnellen Skalieren von Cloud-Instanzen.",
      "Unveränderliche Archive eignen sich für rechtlich relevante abgeschlossene Datensätze."
    ],
    [
      "Einzelne Router manuell zu konfigurieren ist das Gegenteil automatischer Elastizität.",
      "Bei kleinen statischen Netzen kann manuelle Konfiguration genügen; Cloud-Elastizität braucht automatische Provisionierung."
    ]
  ],
  "mod4-8": [
    [
      "Ein ausschließlich offline erreichbarer Dienst wäre kein typischer breit zugänglicher Cloud-Service.",
      "Offline-Datenhaltung ist hingegen sinnvoll für Air-Gap-Backups."
    ],
    [
      "RAID-Spiegelung erzeugt redundante Datenkopien und misst weder Verbrauch noch Abrechnungsdaten.",
      "RAID 1 hilft beim Ausfall einzelner Festplatten."
    ],
    [
      "Cloud-Dienste können sehr wohl nach verbrauchten Ressourcen abgerechnet werden; Measured Service schafft gerade diese Messbarkeit.",
      "Nutzungsbasierte Tarife sind beispielsweise für CPU-Stunden oder belegten Speicher üblich."
    ]
  ],
  "mod4-9": [
    [
      "Nur lokaler Zugriff auf einen physischen Server beschreibt keine breit erreichbare Cloud-Schnittstelle.",
      "Lokale Systeme sind sinnvoll bei vollständiger Trennung vom Internet oder speziellen Sicherheitsanforderungen."
    ],
    [
      "Mobile Endgeräte sind gerade ein typisches Zugriffsgerät für Cloud-Dienste, sofern der Anbieter dies unterstützt.",
      "Mobile Clients sind nützlich für ortsunabhängiges Arbeiten mit sicherer Anmeldung."
    ],
    [
      "SATA ist ein lokales Speicherprotokoll, kein Netzwerk für den entfernten Cloud-Zugang.",
      "SATA verbindet interne Laufwerke mit Rechnern."
    ]
  ],
  "mod4-10": [
    [
      "Eine offene Plattform für beliebige Kunden beschreibt eher Public Cloud; auch Public Clouds verlangen üblicherweise Authentifizierung.",
      "Public Cloud passt für schnell skalierbare standardisierte Dienste vieler Kunden."
    ],
    [
      "Magnetband ist ein Backupmedium und keine exklusiv genutzte Cloud-Infrastruktur.",
      "LTO wird zur Offline-Aufbewahrung großer Sicherungssätze eingesetzt."
    ],
    [
      "RAID-Level betreffen Laufwerksredundanz, nicht den Nutzerkreis einer Cloud.",
      "RAID-Konzepte wählt man nach Festplatten-Ausfalltoleranz und Performance."
    ]
  ],
  "mod4-11": [
    [
      "Ein einzelner Fibre-Channel-Switch ist Netzwerkhardware, keine für viele Kunden angebotene Cloud-Dienstplattform.",
      "FC-Switches verbinden Hosts und Storage in einem SAN."
    ],
    [
      "Ein ausschließlich internes Rechenzentrum kann die Basis einer Private Cloud sein, nicht der typischen Public Cloud.",
      "Private Clouds werden für eine definierte Organisation bereitgestellt."
    ],
    [
      "Eine private USB-Stick-Kopie ist ein lokales Wechselmedium, kein zentral angebotener Cloud-Dienst.",
      "Wechselmedien können als offline Backupkopien dienen."
    ]
  ],
  "mod4-12": [
    [
      "Datenlöschung ist ein Lifecycle- oder Vertragsendeprozess und definiert keine Hybrid Cloud.",
      "Löschung beim Anbieterwechsel ist zur Vermeidung zurückbleibender Kopien nötig."
    ],
    [
      "Eine Cloud kann eigene Netzwerkverbindungen haben; 'ohne Internetverbindung' beschreibt nicht die Kombination aus Private und Public Cloud.",
      "Private Clouds können bewusst nur über interne Netze erreichbar sein."
    ],
    [
      "RAID 1 spiegelt Laufwerke und kombiniert keine Cloud-Bereitstellungsumgebungen.",
      "RAID 1 schützt vor dem Ausfall eines gespiegelten Datenträgers."
    ]
  ],
  "mod4-13": [
    [
      "Mehrere Nutzer auf einem gemeinsamen OS-Konto sind kein Multi-Cloud-Modell und können sogar Berechtigungsprobleme verursachen.",
      "Mehrbenutzerbetrieb sollte über getrennte Identitäten beziehungsweise Sitzungen erfolgen."
    ],
    [
      "Private Hardwareserver sagen nichts über mehrere Cloud-Anbieter aus.",
      "Eigene Server sind sinnvoll, wenn besonders hohe Kontrolle und spezielle Hardware benötigt werden."
    ],
    [
      "Ein monatliches Backup ist ein Sicherungsintervall und kein Anbieter-Mix.",
      "Monatliche Generationen sind Teil einer Grandfather-Father-Son-Rotation."
    ]
  ],
  "mod4-14": [
    [
      "Automatisch unbegrenzte Anbieterunabhängigkeit ist das Gegenteil von Lock-in und entsteht auch durch Multi-Cloud nicht garantiert.",
      "Offene Schnittstellen und portable Datenformate vermindern Anbieterabhängigkeit."
    ],
    [
      "Daten lassen sich in Cloud-Speichern sehr wohl speichern; das Problem ist der spätere Export und Wechsel.",
      "Bei Speicherstrategien sind Datenportabilität und Egress-Kosten zu prüfen."
    ],
    [
      "Kostenlose Anwendungen haben mit Vendor Lock-in nichts zu tun; auch ein kostenlos gestarteter Dienst kann Migration teuer machen.",
      "Kostenfreie Testtarife eignen sich zur Erprobung, ersetzen aber keine Exit-Strategie."
    ]
  ],
  "mod4-15": [
    [
      "RAID schützt Datenträger, aber es ist weder erforderlich, dass jeder Server ein eigenes RAID hat, noch bildet das SDN.",
      "RAID wird bei Speicherfehlertoleranz eingesetzt."
    ],
    [
      "Manuelle Einzelkonfiguration von Switches ist gerade ein Problem traditioneller Netze, das SDN vermeiden möchte.",
      "Bei sehr kleinen Netzen ist Einzelkonfiguration noch praktikabel."
    ],
    [
      "Archivierung betrifft Langzeitdatenhaltung und hat nichts mit der logischen Trennung von Netzwerksteuerung und Paketweiterleitung zu tun.",
      "Archive sind sinnvoll für abgeschlossene Unterlagen mit Aufbewahrungspflicht."
    ]
  ],
  "mod4-16": [
    [
      "'Contract Plane' ist kein üblicher SDN-Bestandteil; Verträge betreffen SLA und Leistungen.",
      "SLAs regeln etwa Verfügbarkeit und Support eines Netzwerkdienstes."
    ],
    [
      "'Backup Plane' ist ebenfalls keine SDN-Weiterleitungsebene.",
      "Backup-Technologien sichern historische Datenstände."
    ],
    [
      "Die Control Plane entscheidet über Weiterleitungsregeln, transportiert aber die eigentlichen Nutzdatenpakete nicht selbst.",
      "Die Control Plane wäre richtig, wenn nach Pfadberechnung oder Verteilung von Routingregeln gefragt würde."
    ]
  ],
  "mod4-17": [
    [
      "Die Data Plane leitet Pakete nach vorhandenen Regeln weiter; sie trifft nicht die zentralen Steuerungsentscheidungen.",
      "Die Data Plane wäre richtig bei der Frage, welche Ebene Frames oder Pakete transportiert."
    ],
    [
      "'Storage Plane' ist keine der beiden grundlegenden SDN-Netzebenen.",
      "Software Defined Storage übernimmt eigene Speichersteuerung unabhängig von SDN."
    ],
    [
      "'Cooling Plane' ist keine Netzwerksteuerungsebene; Kühlung gehört zur physischen Rechenzentrumsinfrastruktur.",
      "Kühlmanagement ist relevant für die thermische Sicherheit von Serverracks."
    ]
  ],
  "mod4-18": [
    [
      "SATA ist ein lokales Laufwerksprotokoll und kann einem SDN-Switch keine Forwarding-Regeln übermitteln.",
      "SATA ist sinnvoll für lokal angeschlossene HDDs und SSDs."
    ],
    [
      "NFS ist ein Dateifreigabeprotokoll. Es wird nicht als einziges Protokoll zur Steuerung von SDN-Geräten verwendet.",
      "NFS dient Netzwerk-Dateizugriffen auf NAS-Speicher."
    ],
    [
      "LTO beschreibt Magnetbandtechnologie, keine SDN-Controller-Schnittstelle.",
      "LTO wird für kostengünstige langfristige Backups eingesetzt."
    ]
  ],
  "mod4-19": [
    [
      "SDN benötigt nicht zwangsläufig mehr Hardware pro Benutzer, weil die Steuerung logisch zentralisiert werden kann.",
      "Zusätzliche Geräte sind nur bei konkreter Kapazitäts- oder Redundanzanforderung nötig."
    ],
    [
      "Dynamische Konfiguration ist ein wesentlicher SDN-Vorteil und keinesfalls unmöglich.",
      "Sie ist sinnvoll, um Netzregeln automatisiert an Last und Sicherheitsrichtlinien anzupassen."
    ],
    [
      "Netzwerkgeräte besitzen weiterhin eine Data Plane und können Pakete weiterleiten, solange gültige Regeln vorliegen.",
      "Switches sind im SDN für die eigentliche Paketweiterleitung zuständig."
    ]
  ],
  "mod4-20": [
    [
      "RAID ohne Kapazität kann keine Daten speichern. SDS abstrahiert reale Speicherressourcen, erzeugt aber nicht Speicher aus dem Nichts.",
      "RAID mit tatsächlichen Laufwerken schützt Daten gegen bestimmte Ausfälle."
    ],
    [
      "Softwarelizenzen regeln Nutzungsrechte, nicht die Verteilung und Platzierung von Speicherblöcken.",
      "Lizenzverträge sind notwendig, um Software rechtmäßig einzusetzen."
    ],
    [
      "Ein DVD-Laufwerk ist ein einzelnes physisches Medium, keine softwarebasierte Speicherarchitektur.",
      "Optische Datenträger können für bestimmte Archive sinnvoll sein."
    ]
  ],
  "mod4-21": [
    [
      "Mechanische Kühlung ist ein Teil der Gebäudetechnik, aber kein Software Defined Datacenter.",
      "Kühlung wird zum Abtransport der Server-Abwärme benötigt."
    ],
    [
      "Langfristige Tapespeicherung ist ein Backup-/Archivthema und keine automatische Steuerung von Computing, Storage und Netzwerk.",
      "LTO-Air-Gap-Backups sind sinnvoll für langfristigen Ransomware-Schutz."
    ],
    [
      "Ein Office-Abo ist ein SaaS-Lizenzmodell und keine umfassende Rechenzentrumsautomatisierung.",
      "SaaS-Abonnements werden genutzt, wenn fertige Anwendungen benötigt werden."
    ]
  ],
  "mod4-22": [
    [
      "Kosten und Skalierung sind wirtschaftliche und operative Ziele, erfassen aber nicht alle Sicherheitsrisiken.",
      "Kosten-/Skalierungsanalysen gehören zur Wirtschaftlichkeitsprüfung eines Cloud-Projekts."
    ],
    [
      "Lizenzen und Produktdesign sind wichtig für Rechtmäßigkeit und Nutzbarkeit, schützen aber nicht umfassend gegen Datenmanipulation und -verlust.",
      "Lizenz-Compliance ist ein eigener Teil der IT-Governance."
    ],
    [
      "Der Stromverbrauch ist eine Energiekennzahl und kein Informationsschutzziel.",
      "PUE und Strommessung sind wichtig für Energieeffizienz von Rechenzentren."
    ]
  ],
  "mod4-23": [
    [
      "Festplattenkauf schafft keine Cloud-Strategie und kann Fehlinvestitionen verursachen, wenn Bedarf und Risiken ungeklärt sind.",
      "Hardwarebeschaffung folgt idealerweise einer abgeschlossenen Bedarfsplanung."
    ],
    [
      "Ein ungeprüfter Vertrag kann Datenschutz-, Kosten- und Exit-Risiken übersehen.",
      "Vertragsabschluss ist sinnvoll erst nach Anforderungen, Anbieterbewertung und Risikoanalyse."
    ],
    [
      "Sofortige Löschung lokaler Daten vor validierter Migration kann unwiederbringlichen Verlust verursachen.",
      "Alte Kopien werden erst nach erfolgreicher Migration und Ablauf notwendiger Rückfallfristen sicher gelöscht."
    ]
  ],
  "mod4-24": [
    [
      "Die Mitarbeiterzahl kann bei der Planung von Accounts helfen, schützt aber allein weder Daten noch Zugriffe.",
      "Nutzerzahlen sind relevant für Kapazitäts- und Lizenzplanung."
    ],
    [
      "Die Domain-Endung sagt nichts über Verschlüsselung oder Rollenrechte aus.",
      "Domains werden zur Adressierung von Cloud-Diensten genutzt."
    ],
    [
      "Oberflächenfarben sind Designentscheidungen und kein Nachweis für IT-Sicherheitsmaßnahmen.",
      "UI-Design verbessert Bedienbarkeit, ersetzt aber keinen Zugriffsschutz."
    ]
  ],
  "mod4-25": [
    [
      "Logo und Werbeslogan erlauben keine Prüfung von Sicherheitsniveau oder Datenschutzpflichten.",
      "Markenwirkung kann für Kommunikation wichtig sein, ist aber keine Sicherheitsprüfung."
    ],
    [
      "Schriftarten sind eine Designfrage, während Datenstandorte und Subunternehmer echte Betriebsrisiken bestimmen.",
      "Typografie spielt in der Nutzeroberfläche eine Rolle."
    ],
    [
      "Serverraumfarben sind keine verlässlichen Sicherheitsnachweise; maßgeblich sind geprüfte organisatorische und technische Kontrollen.",
      "Raumgestaltung kann Betriebsergonomie beeinflussen, nicht den Prüfungsnachweis ersetzen."
    ]
  ],
  "mod4-26": [
    [
      "Lokale Druckertreiber sind spezielle Client-Komponenten; sie lösen kein Problem mit Datenportabilität beim Cloud-Anbieterwechsel.",
      "Treiber sind relevant beim Betrieb angeschlossener Druckhardware."
    ],
    [
      "Die Zahl der Dienstwagen betrifft die Fahrzeugverwaltung, nicht Cloud-Exit und Datenlöschung.",
      "Fuhrparkdaten können zwar selbst in der Cloud liegen, ändern aber nicht den Exit-Prozess."
    ],
    [
      "Ein Startseitenlayout ist eine Designfrage, nicht der Nachweis, dass Daten vollständig exportiert und gelöscht wurden.",
      "UI-Gestaltung ist bei der Bedienbarkeit des Dienstes relevant."
    ]
  ],
  "mod4-27": [
    [
      "Desktop-Stromverbrauch misst Energieeffizienz, während C5 Kontrollen zur Informationssicherheit prüft.",
      "Energie-Monitoring ist bei Green IT sinnvoll."
    ],
    [
      "C5 regelt keine weltweit einheitlichen Preise; Cloud-Tarife werden vom Anbieter und Vertrag bestimmt.",
      "Preise vergleicht man anhand Kostenmodellen und tatsächlicher Nutzung."
    ],
    [
      "RAID-Level beschreiben Datenträgerredundanz und haben mit dem Cloud-Sicherheitskatalog nichts zu tun.",
      "RAID 5 oder 6 sind technische Maßnahmen gegen Plattenausfälle."
    ]
  ],
  "mod4-28": [
    [
      "Cloud-Kunden müssen Nutzerrollen und Berechtigungen für ihre Anwendungen weiterhin verwalten.",
      "Least Privilege und MFA sind sinnvolle Maßnahmen im Kundenverantwortungsbereich."
    ],
    [
      "SaaS übernimmt Infrastruktur- und Anwendungsbetrieb, beseitigt aber nicht Kundenpflichten für Benutzer, Daten und Konfiguration.",
      "SaaS ist sinnvoll für fertige Software mit geringem eigenem Betriebsaufwand."
    ],
    [
      "Der Anbieter trägt nicht automatisch jede gesetzliche und technische Verantwortung; der Kunde bleibt für seine Datenverwendung mitverantwortlich.",
      "Im Shared-Responsibility-Modell wird die Aufgabenverteilung vertraglich und technisch festgelegt."
    ]
  ]
};
