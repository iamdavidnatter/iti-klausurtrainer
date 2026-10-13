
/**
 * Erläuterungen für die Originalklausur: ein nachvollziehbarer Kontrast
 * zwischen der gewählten Alternative und der in der Frage gesuchten Eigenschaft.
 * Schlüssel sind Indizes der unveränderten Originalantworten.
 */
export const originalAlternativeDetails = {
"old-2":{
0:["Herstellerbindung entsteht vor allem durch proprietäre Controller oder nicht austauschbare Schnittstellen. SDN kann diese Bindung durch offene Schnittstellen sogar reduzieren.","Dies wäre ein Nachteil einer herstellerspezifischen, nicht portierbaren SDN-Implementierung."],
1:["Zentrale Automatisierung soll Konfigurationsaufwand und häufig auch Betriebskosten senken. Höhere Kosten sind daher kein typisches Architekturmerkmal von SDN.","Höhere Kosten können bei einer teuren Migration oder aufwendigen Controller-Infrastruktur entstehen."],
3:["Ein SDN-Controller kann Konfigurationen zentral an Geräte verteilen; dadurch sinkt gerade die manuelle Verwaltung jedes einzelnen Switches.","Mehr Verwaltungsaufwand wäre bei schlecht integrierten oder uneinheitlichen Controllern denkbar."]
},
"old-3":{
0:["RAID 5 benötigt mindestens drei Laufwerke, RAID 6 mindestens vier. Die Kombination erfüllt daher die Bedingung nicht für beide RAID-Level.","RAID 5 wäre passend, wenn mindestens drei Laufwerke und Schutz vor genau einem Laufwerksausfall gefordert wären."],
1:["RAID 5 startet schon mit drei Laufwerken, RAID 10 benötigt dagegen mindestens vier. Somit erfüllen nicht beide die Mindestanforderung von vier.","RAID 5 wäre eine Option für platzsparende Redundanz ab drei Laufwerken."],
2:["RAID 0 und RAID 1 können jeweils schon mit zwei Laufwerken aufgebaut werden; beide benötigen nicht mindestens vier.","RAID 0 dient der Leistung ohne Redundanz; RAID 1 spiegelt Daten für Ausfallschutz."]
},
"old-4":{
0:["IDE bezeichnet die historische Einbindung der Laufwerkselektronik, nicht das SCSI-Befehlsprotokoll, auf dem SAS beruht.","IDE/Parallel-ATA war für ältere lokale Festplattenanschlüsse üblich."],
1:["Fibre Channel ist ein Speicher-Netzwerkprotokoll und nicht die Befehlsbasis von Serial Attached SCSI.","Fibre Channel wäre bei einem dedizierten SAN als Übertragungstechnik relevant."],
2:["ATA ist die Protokollfamilie von IDE beziehungsweise SATA, während SAS die SCSI-Befehlssprache nutzt.","ATA passt bei IDE- und SATA-Speicheranschlüssen."]
},
"old-5":{
0:["Die Unterbodenverteilung führt kalte Zuluft tatsächlich über den Doppelboden in die Kaltgänge. Die Aussage ist also richtig, gesucht wird aber die falsche Aussage.","Die Beschreibung wäre richtig bei einem klassischen Kaltgang mit gelochtem Doppelboden."],
2:["Warme Abluft steigt auf und kann von der Klimatisierung aufgenommen werden. Dies widerspricht dem Kühlverfahren nicht.","Diese Aussage beschreibt den Luftkreislauf vieler luftgekühlter Serverräume."],
3:["Warm- und Kaltgänge helfen, Zuluft und Abluft getrennt zu führen. Die Anordnung ist daher eine sinnvolle Grundlage der beschriebenen Kühlung.","Das Konzept kommt auch bei eingehausten Kaltgängen und alternativen Luftführungen zum Einsatz."]
},
"old-6":{
0:["RAID 1 spiegelt zwar Daten, bei sieben Festplatten entsteht aber daraus nicht automatisch eine auf zwei beliebige Laufwerksausfälle ausgelegte Paritätsgruppe.","RAID 1 eignet sich zur Spiegelung zweier Laufwerke oder entsprechend redundanter Spiegelkonfigurationen."],
1:["RAID 5 enthält nur eine Parität und kann daher lediglich einen Laufwerksausfall tolerieren. Gefordert sind ausdrücklich zwei.","RAID 5 wäre bei maximal einem tolerierten Ausfall und effizienter Kapazitätsnutzung passend."],
3:["RAID 0 besitzt überhaupt keine Redundanz. Bereits der Ausfall eines Laufwerks kann den gesamten Datenverbund unbrauchbar machen.","RAID 0 wird für Geschwindigkeit eingesetzt, wenn Datensicherheit anderweitig gewährleistet wird."]
},
"old-7":{
0:["Die Einbindung in Softwareverteilungswerkzeuge erleichtert die Bereitstellung virtualisierter Anwendungen. Deshalb ist diese Aussage richtig, gefragt wird die falsche Begründung.","Ein zentraler Rollout vieler Anwendungspakete ist ein passender Einsatzfall."],
1:["Getrennte Anwendungspakete können Versionskonflikte reduzieren und inkompatible Softwarestände nebeneinander ermöglichen.","Das ist sinnvoll, wenn unterschiedliche Anwendungen dieselben Bibliotheken in abweichenden Versionen brauchen."],
3:["Virtualisierte Anwendungen lassen sich zentral aktualisieren und ausrollen. Das erleichtert insbesondere den Betrieb regelmäßig genutzter Anwendungen.","Einheitliches Lifecycle-Management ist für viele Clients und dauernd verfügbare Anwendungen wichtig."]
},
"old-8":{
0:["SaaS liefert eine bereits fertige Anwendung, nicht primär eine Plattform zur Bereitstellung und Ausführung eigener Applikationen.","SaaS wäre richtig, wenn Mitarbeitende nur eine fertige CRM-, Office- oder Buchhaltungssoftware nutzen sollen."],
2:["IaaS stellt virtuelle Server, Netzwerk und Storage bereit; Betriebssystem und Laufzeitumgebung müssen oft vom Kunden administriert werden. Für schnelle App-Bereitstellung ohne Plattformbetrieb ist PaaS passender.","IaaS passt, wenn man Betriebssystem, Middleware und Applikation selbst kontrollieren will."],
3:["Klassisches Hosting beschreibt meist gemietete Server- oder Webhosting-Leistungen, nicht automatisch eine verwaltete Entwicklungsplattform.","Hosting eignet sich etwa für eine feste Website oder einen gemieteten Server."]
},
"old-9":{
0:["Storage vMotion verschiebt virtuelle Datenträger zwischen Speichern, nicht virtuelle Maschinen zur Energieeinsparung zwischen Hosts.","Storage vMotion wäre korrekt, wenn ein Datastore gewartet oder ersetzt werden soll."],
1:["High Availability startet VMs nach einem Hostausfall automatisch neu; es dient nicht der geplanten Lastkonsolidierung in der Nacht.","HA ist relevant, wenn ein physischer Server ungeplant ausfällt."],
2:["DRS verteilt VMs nach Ressourcenauslastung. Die gezielte Abschaltung leerer Hosts zum Stromsparen ist die zusätzliche Aufgabe von DPM.","DRS wäre richtig, wenn automatische Lastverteilung zwischen Hosts gefragt wäre."]
},
"old-10":{
0:["MTBR ist nicht die hier definierte Zuverlässigkeitskennzahl für die Zeit zwischen zwei Ausfällen.","Für mittlere Zeiten zwischen Fehlerereignissen verwendet man MTBF."],
1:["MTTR misst die durchschnittliche Dauer der Reparatur beziehungsweise Wiederherstellung, nicht den Abstand zwischen Ausfällen.","MTTR ist wichtig, wenn gefragt wird, wie schnell ein System nach einem Ausfall repariert ist."],
3:["MTTF misst die mittlere Betriebsdauer bis zu einem Ausfall, oft bei nicht reparierbaren Komponenten, und ist nicht dieselbe Größe wie MTBF.","MTTF eignet sich für die Lebensdauerbetrachtung einzelner Komponenten bis zum Defekt."]
},
"old-11":{
0:["Ein Products and Services Agreement ist ein Vertragsrahmen. Die konkreten Produktnutzungsrechte werden in Produktbestimmungen geregelt.","Der Rahmenvertrag wäre relevant, wenn nach dem Vertragsmodell MPSA gefragt wäre."],
1:["Das Enterprise Agreement ist ein Volumenlizenzvertrag, nicht die Sammlung aller einzelnen Nutzungsrechte.","Enterprise Agreement ist relevant für große Organisationen, die Microsoft-Produkte standardisiert lizenzieren."],
3:["Die Lizenzbestimmungen betreffen hier die Einzelplatzlizenzierung, nicht die zentral zusammengefassten Produktrechte der Volumenprogramme.","Lizenzbestimmungen passen, wenn die Nutzungsrechte einer einzeln erworbenen Softwareversion gefragt sind."]
},
"old-12":{
1:["SnapMirror repliziert Daten zwischen Systemen; im asynchronen Modus können bestätigte Änderungen beim Ausfall fehlen. Ein RPO von null ist damit nicht allgemein gewährleistet.","SnapMirror wird für standortübergreifende Replikation und Disaster Recovery eingesetzt."],
2:["Ein Snapshot friert einen Datenstand zu einem Zeitpunkt ein, kann aber bei einem Standortverlust ebenfalls verloren gehen und garantiert keinen unterbrechungsfreien Betrieb.","Snapshots sind sinnvoll für schnelle lokale Rollbacks oder punktuelle Wiederherstellung."],
3:["SnapVault ist auf Aufbewahrung und Backup-Replikation ausgelegt und nicht auf den synchronen, sofortigen Betrieb eines zweiten Standorts.","SnapVault eignet sich für langfristigere Sicherungen beziehungsweise Backup-Ziele."]
},
"old-13":{
0:["Betriebssystemvirtualisierung betreibt ganze Gastbetriebssysteme als virtuelle Maschinen; sie beschreibt allein noch keine gemeinsamen Benutzersitzungen.","Sie wäre gefragt, wenn mehrere getrennte Server- oder Desktopbetriebssysteme auf einem Host laufen sollen."],
1:["Applikationsvirtualisierung kapselt einzelne Programme. Die Frage beschreibt jedoch einen zentral bereitgestellten kompletten Windows-Desktop mit Sitzung.","Sie passt, wenn nur eine Anwendung ohne normale lokale Installation verteilt werden soll."],
3:["Hardwarevirtualisierung abstrahiert CPU, RAM und Geräte für Gastbetriebssysteme; sie ist eine technische Grundlage, aber nicht die konkrete Desktopbereitstellung für Studierende.","Sie passt beim Betrieb virtueller Maschinen mit eigenen Betriebssystemen."]
},
"old-14":{
0:["Open License ist ein einfacheres Lizenzkaufmodell und enthält keine zwingende unternehmensweite Standardisierung mit Software Assurance.","Es passt für einzelne oder gelegentliche Volumenlizenzkäufe ohne Companywide-Verpflichtung."],
1:["Open Value bietet Wartung über Software Assurance, schreibt aber nicht die gewünschte flächendeckende Standardisierung vor.","Es passt für kleinere Unternehmen mit Volumenlizenzbedarf ohne zwingend alle Arbeitsplätze zu standardisieren."],
2:["Ein Enterprise Agreement richtet sich im dargestellten Vertragssystem an wesentlich größere Unternehmen, nicht an nur 25 Arbeitsplätze.","Es passt für größere Organisationen mit unternehmensweiter Standardisierung und Wartung."]
},
"old-15":{
0:["Dateibasierte serverseitige Deduplizierung erkennt gleiche Dateien erst nach der Übertragung. Das entlastet die knappe 100-Mbit-Verbindung nicht ausreichend und übersieht identische Blöcke in verschiedenen Dateien.","Sie ist nützlich, wenn eine schnelle Leitung besteht und viele komplett gleiche Dateien vorliegen."],
1:["Clientseitige dateibasierte Deduplizierung spart Netzverkehr, erkennt aber nicht so effizient gleiche Blöcke innerhalb unterschiedlich aufgebauter virtueller Datenträger.","Sie passt, wenn vor allem ganze Dateien auf den Clients identisch sind."],
2:["Serverseitige Blockdeduplizierung spart Speicher auf dem Backupserver, aber die Datenblöcke müssen zunächst über die knappe Leitung übertragen werden.","Sie passt, wenn ein zentraler Backupserver Daten vieler Clients mit ausreichend Netzwerkbandbreite verarbeitet."]
},
"old-16":{
0:["Die Definition verlangt eine organisatorische Einheit und zentralisierte Leistungen, nicht lediglich eine technische Einheit mit dezentralem Angebot.","Verteilte technische IT-Komponenten können Bestandteile eines Rechenzentrums sein, sind aber keine vollständige Definition."],
2:["Die Zentralisierung stimmt, aber ein Rechenzentrum ist nicht nur ein technisches Gerät oder eine technische Einheit, sondern schließt Organisation und Betrieb ein.","Die Beschreibung einer rein technischen Serveranlage wäre passend, wenn ausdrücklich nur Hardware gemeint ist."],
3:["Die organisatorische Einheit stimmt, aber die Rechen- und Serviceleistungen sind definitionsgemäß zentralisiert statt verteilt organisiert.","Verteilte IT-Dienstleistungen beschreiben eher eine dezentrale Infrastruktur."]
},
"old-17":{
0:["DRS verschiebt Workloads dynamisch zwischen Hosts; es hält nicht automatisch eine stets mitlaufende zweite VM samt Arbeitsspeicher vor.","DRS wäre richtig, wenn es um Lastverteilung und Ressourcenausgleich geht."],
2:["vMotion verlagert eine laufende VM für Wartung oder Lastmanagement, ohne dauerhaft zwei synchron laufende Kopien auf verschiedenen Hosts zu halten.","vMotion wäre richtig bei einer geplanten Live-Migration."],
3:["HA startet eine ausgefallene VM auf einem anderen Host neu. Dafür muss nicht ständig der komplette Gastarbeitsspeicher auf zwei Hosts gespiegelt werden.","HA wäre richtig, wenn ein kurzer Neustart nach Hostausfall akzeptabel ist."]
},
"old-18":{
0:["SATA-Laufwerke können durchaus schnell sein, werden aber im dargestellten Serverkontext eher für preisgünstige Kapazität als für professionelle performante Dual-Port-Anbindung verwendet.","SATA passt für günstige große Dateispeicher und weniger ausfallkritische Laufwerke."],
2:["Klassisches paralleles SCSI ist eine ältere Technologie. SAS ist die moderne serielle Weiterentwicklung mit passender Serverintegration.","SCSI wäre bei historischen Serversystemen mit SCSI-Bus korrekt."],
3:["ATA bezeichnet die ältere Basis unter anderem von SATA, nicht die hier gesuchte professionelle SAS-Anbindung.","ATA wäre bei IDE- beziehungsweise SATA-Festplatten historisch richtig."]
},
"old-19":{
0:["Ein SAN bietet zentrale leistungsfähige Blockspeicher, benötigt aber dedizierte Netzwerkkomponenten und ist teurer als direkt angebundener lokaler Speicher.","SAN passt bei gemeinsamen Speicherressourcen für mehrere Hosts und Cluster."],
1:["Ein NAS teilt Daten über das LAN mit mehreren Clients. Netzwerkprotokolle und gemeinsame Infrastruktur bringen mehr Aufwand als ein kurzer lokaler Host-Anschluss.","NAS passt für gemeinsam genutzte Ordner, Backups und Netzdateien."]
},
"old-20":{
0:["Verfügbarkeitsfeatures wie Live-Migration oder HA sind gerade typische Vorteile einer virtuellen Umgebung.","Virtuelle Umgebungen sind sinnvoll, wenn hochverfügbare VM-Cluster benötigt werden."],
1:["Eine dynamische Verschiebung und Optimierung von Workloads ist ein Merkmal von Virtualisierung; physische Server besitzen keine vergleichbare VM-Verlagerung.","Dynamische Optimierung passt zu einem Hypervisor-Cluster mit DRS."],
3:["VMs sind durch abstrahierte Hardware leichter zwischen unterschiedlichen Hostsystemen verschiebbar; physische Installationen hängen stärker an konkreter Hardware.","Plattformunabhängigkeit ist ein Argument für Virtualisierung und Migration."]
},
"old-21":{
0:["SDS abstrahiert tatsächlich die Storage-Hardware. Die Aussage stimmt, gefragt ist aber die falsche.","Abstraktion ermöglicht, unterschiedliche Speichersysteme softwaregesteuert zu verwalten."],
1:["SDS ist eine Architektur für softwarebasierte Speicherbereitstellung. Das ist zutreffend und daher nicht die falsche Aussage.","Sie kommt zum Einsatz, wenn Storagefunktionen von spezifischen Hardwaregeräten entkoppelt werden sollen."],
3:["Hardwareunabhängigkeit ist ein angestrebter Vorteil von SDS. Diese Aussage ist folglich nicht die gesuchte falsche.","SDS kann verschiedene kompatible Hardwareplattformen unter einer Verwaltung zusammenfassen."]
},
"old-22":{
0:["Hyperkonvergenz kann Investitions- und Betriebskosten senken; hohe Kosten sind kein grundsätzlicher Nachteil der konsolidierten Architektur.","Mehrkosten können bei proprietären Erweiterungsmodulen oder einer größeren Erstinvestition auftreten."],
1:["HCI soll Bereitstellung und Anpassung beschleunigen, nicht generell die Agilität verschlechtern.","Geringere Agilität tritt eher bei starrer, manuell verwalteter Legacy-Infrastruktur auf."],
2:["HCI vereinfacht gewöhnlich den Betrieb durch einheitliche Verwaltung; mehr Komplexität ist nicht das definierende Problem.","Komplexität kann bei Integration verschiedener Hersteller oder speziellen Legacy-Workloads steigen."]
},
"old-23":{
0:["Die Virtualisierungsebene wird sowohl in IaaS als auch in PaaS in der Regel vom Provider bereitgestellt. Sie ist daher kein trennscharfes Merkmal.","Virtualisierung wäre eine relevante Grenze zwischen eigener Bare-Metal-Hardware und gemieteter Cloud-Infrastruktur."],
1:["Die Anwendung bleibt bei IaaS wie PaaS häufig in der Verantwortung des Kunden; das Paar grenzt die Modelle nicht präzise ab.","Die Anwendungsverantwortung ist hingegen besonders beim Vergleich PaaS mit SaaS relevant."],
3:["Physische Server und Virtualisierung gehören zu beiden vom Provider betriebenen Ebenen, weshalb sie die Servicemodelle nicht unterscheiden.","Dieses Paar beschreibt eher den Infrastrukturunterbau, nicht den Unterschied IaaS zu PaaS."]
},
"old-24":{
0:["Einheitliche Datenschutzregeln sind in einer Multi-Cloud nicht automatisch gegeben; Anbieter haben oft unterschiedliche Standorte, Werkzeuge und Verträge.","Einheitliche Richtlinien können durch eine zusätzliche zentrale Cloud-Governance-Lösung umgesetzt werden."],
1:["Mehrere Provider erzeugen mehrere Benutzerverwaltungen, Verträge und Abrechnungen. Das ist typischerweise komplexer statt einfacher.","Einfache Abrechnung ist eher bei einem einzigen Provider oder zentralem Cloud-Broker zu erwarten."],
3:["Jede weitere Cloud-Plattform erhöht den Integrations- und Betriebsaufwand. Multi-Cloud ist normalerweise komplexer als Single-Cloud.","Geringe Komplexität ist eher bei einer standardisierten Lösung mit einem Anbieter realistisch."]
},
"old-25":{
0:["Ein vollständiger Datensatz pro Medienset ist ein Vorteil der Vollsicherung; eine differenzielle Sicherung enthält nur Änderungen seit der letzten Vollsicherung.","Vollsicherung passt, wenn alle Daten in einem eigenständigen Backup-Satz enthalten sein sollen."],
1:["'Seit der letzten Sicherung' definiert inkrementell, nicht differenziell. Ein Differenzial wächst mit allen Änderungen seit dem letzten Vollbackup.","Inkrementelle Sicherungen sind sinnvoll für möglichst kleine tägliche Änderungsmengen."],
3:["Auch hier werden Änderungen seit der letzten Sicherung behauptet. Das gilt für Inkremente, während differenzielle Backups ab der letzten Vollsicherung wachsen.","Kurze Sicherungsläufe erreicht man typischerweise besonders mit inkrementellen Backups."]
},
"old-26":{
0:["Energieverbrauch beziehungsweise Leistungsbedarf ist ein übliches Kriterium zur Größenklassifikation und daher keine falsche Antwort.","Er hilft, passende Stromversorgung und Kühlleistung zu dimensionieren."],
1:["Raumfläche ist ein typisches Klassifikationsmerkmal, etwa bei der Unterscheidung zwischen Serverraum und Rechenzentrum.","Sie ist bei der Planung der Rackbelegung und der Gebäudefläche relevant."],
2:["Anzahl der Server beziehungsweise Racks ist ein Größenmerkmal und daher kein falsches Kriterium.","Die Geräteanzahl dient der Kapazitätsplanung von Strom, Kühlung und Fläche."]
},
"old-27":{
0:["Fibre Channel kann Glasfaser nutzen, ist aber nicht auf einen optischen Kanal beschränkt. Es handelt sich um eine komplette Übertragungstechnologie für SANs.","Optische Übertragungskanäle sind beispielsweise Glasfaserstrecken innerhalb eines FC-SAN."],
1:["Fibre Channel ist nicht einfach das abstrakte ISO/OSI-Modell, sondern besitzt einen eigenen Protokollaufbau.","Das OSI-Modell dient der konzeptionellen Einordnung von Netzwerkprotokollen."],
3:["Fibre Channel kann über Lichtwellenleiter laufen, ist aber als Standard nicht auf dieses eine Medium reduziert.","Lichtwellenleiter sind eine mögliche physische FC-Verbindung."]
},
"old-28":{
0:["Verdichtete Bauweise im 19-Zoll-Rack kennzeichnet Rack- oder Bladeserver eher als einen freistehenden Tower.","Rackserver sind sinnvoll, wenn viele Server in wenig Fläche untergebracht werden sollen."],
1:["Redundante Lüfter sind bei Enterprise-Rack- oder Blade-Systemen verbreiteter und beim Tower nicht generell vorhanden.","Sie sind wichtig, wenn der Server trotz Ausfall eines Lüfters weiterlaufen soll."],
2:["Einheitliches übergreifendes Remote-Management ist bei vielen Enterprise-Rack- und Blade-Systemen stärker ausgeprägt als bei einfachen Towern.","Es hilft beim zentralen Betrieb größerer Serverflotten."]
},
"old-29":{
0:["Performance-Storage braucht kurze Zugriffszeiten. Tapes arbeiten sequentiell und sind dafür ungeeignet.","Für Performance-Ebenen sind SSDs oder sehr schnelle HDDs besser geeignet."],
1:["Eine reine Kapazitäts-Ebene kann HDD-Systeme umfassen, die schneller und direkter erreichbar sind als Bandarchive.","Festplattenpools eignen sich für große regelmäßig genutzte Datenbestände."]
},
"old-30":{
0:["Optimierte Unterbodenverteilung benötigt weiterhin einen Doppelboden. Dieser soll ausdrücklich vermieden werden.","Diese Kühlung passt, wenn ausreichend Aufbauhöhe für einen Doppelboden und eine Kaltgangeinhausung besteht."],
1:["Auch die einfache vertikale Unterbodenverteilung führt Kaltluft durch einen Doppelboden; das widerspricht der baulichen Vorgabe.","Sie passt bei Serverräumen mit vorhandenem Doppelboden und geeigneter Raumhöhe."],
2:["Offene Fenster bieten keine kontrollierbare Temperatur, Luftfeuchte und Filterung und gefährden die Betriebssicherheit.","Natürliche Außenluft kann nur über ein professionell geregeltes Free-Cooling-System genutzt werden."]
},
"old-31":{
0:["MPSA ist ein flexibles Einkaufs- und Verwaltungsprogramm, verlangt aber nicht dieselbe verpflichtende Vollstandardisierung wie Enterprise Agreement.","MPSA wäre bei differenziertem Lizenzbedarf ohne unternehmensweite Standardisierung interessant."],
1:["Open License war für kleinere Volumenanforderungen gedacht und bildet keine umfassende Standardisierung mit Wartung ab.","Es wäre bei kleineren punktuellen Lizenzkäufen sinnvoll."],
3:["Open Value Companywide adressiert kleinere und mittlere Organisationen; bei 810 Arbeitsplätzen passt das auf große Unternehmen zugeschnittene Enterprise Agreement besser.","Open Value Companywide wäre für kleinere standardisierte Organisationen passend."]
},
"old-32":{
1:["Reduzierte Anschaffungskosten betreffen in erster Linie die finanzielle Perspektive, nicht den strategischen Zugang zu Innovation.","Die Aussage wäre die richtige Antwort auf die Frage nach einer finanziellen Cloud-Chance."],
2:["Weniger Administration und Wartung sind vor allem operative Entlastungen im Tagesgeschäft.","Das ist eine korrekte operative Cloud-Chance."],
3:["Schnelle Kapazitätserweiterung ist vor allem ein operativer beziehungsweise technischer Vorteil der Cloud.","Dies wäre richtig bei einer Frage nach bedarfsgerechter Skalierung oder Rapid Elasticity."]
},
"old-33":{
0:["Jede Vollsicherung dauert elf Stunden; viermal täglich wäre das zeitlich unmöglich und würde viel Daten übertragen.","Vollsicherungen sind sinnvoll bei kleinen Datenbeständen oder als periodische Basis für Änderungsbackups."],
1:["Synthetische Vollbackups kombinieren vorhandene Sicherungsdaten, aber der konkrete tägliche Viertages-Rhythmus mit minimalem Datenzuwachs wird unmittelbar durch inkrementelle Laufzeiten erreicht.","Eine synthetische Sicherung passt als regelmäßige Konsolidierung inkrementeller Sicherungsketten."],
3:["Differenzielle Sicherungen erfassen alle Änderungen seit der letzten Vollsicherung und wachsen daher bis zur nächsten Vollsicherung.","Sie sind passend, wenn die Wiederherstellung mit nur zwei Backup-Sätzen wichtiger ist als kleinste Laufzeiten."]
},
"old-34":{
1:["Multi-Cloud bezeichnet die parallele Nutzung mehrerer Cloud-Anbieter, nicht spezifisch die Kombination interner Private Cloud mit externer Public Cloud.","Multi-Cloud wäre die passende Bezeichnung für Dienste beispielsweise bei zwei verschiedenen Public-Cloud-Providern."],
2:["Selective Cloud ist kein hier definiertes Standard-Bereitstellungsmodell für die Kombination von Private und Public Cloud.","Eine selektive Cloud-Nutzung beschreibt höchstens eine Auswahlstrategie, kein eigenständiges Bereitstellungsmodell."],
3:["Community Cloud wird gemeinsam von Organisationen mit gemeinsamen Anforderungen genutzt und beschreibt nicht das interne-plus-öffentliche Szenario.","Sie passt bei einer gemeinsamen Branchen- oder Behördencloud."]
},
"old-35":{
0:["Double Loop schafft redundante Pfade zu Disks, ersetzt aber bei Ausfall des einzigen Controllers nicht dessen Steuerfunktion.","Double Loop passt zur Absicherung gegen Verbindungs- oder Kabelausfälle."],
2:["Ein MetroCluster schützt auch gegen Standortausfälle, wäre für die geforderte kostengünstige Controller-Redundanz zu aufwendig.","Er wäre passend für zwei getrennte Rechenzentren mit synchron gespiegelt gespeicherten Daten."],
3:["Single Loop besitzt weder redundanten Controller noch einen alternativen Verbindungspfad und erfüllt den Ausfallschutz nicht.","Single Loop kommt bei einfachen Installationen ohne diese Redundanzanforderung infrage."]
},
"old-36":{
0:["RTO ist die Zielzeit bis zur Wiederherstellung nach einem Ausfall; es sagt nichts über das Alter des letzten Datenstands aus.","RTO wäre richtig bei der Frage, wie lange die Betriebsunterbrechung dauern darf."],
1:["Mean Time to Recovery beschreibt eine durchschnittliche Wiederanlaufdauer, nicht den Datenverlust-Zeitpunkt.","Diese Kennzahl ist zur Bewertung durchschnittlicher Reparatur- beziehungsweise Wiederherstellungszeiten geeignet."],
3:["Mean-Time to Desaster ist keine standardisierte Kennzahl für den maximal tolerierbaren Datenrückstand.","RPO ist die relevante Zielgröße für die zeitliche Datenverlustgrenze."]
},
"old-37":{
0:["Hyperconverged Infrastructure geht über das Zusammenfassen hinaus und virtualisiert beziehungsweise automatisiert Rechenleistung, Netzwerk und Speicher mit einer Softwareebene.","HCI ist passend, wenn zusätzlich ein softwarezentriertes, einheitlich gemanagtes System gefordert ist."],
1:["Traditional Infrastructure trennt die drei Bereiche bewusst in eigenständige Systeme und erfüllt damit gerade nicht die kombinierte Form.","Traditionelle Infrastruktur passt bei individuell verwalteten getrennten Computing-, Storage- und Netzwerkkomponenten."],
2:["Cloud Infrastructure beschreibt die Bereitstellung als nutzbare Dienste, nicht allein die feste Kombination von Hardwarekomponenten.","Cloud Infrastructure ist richtig, wenn Self-Service, Elastizität und Dienstbereitstellung gefragt sind."]
},
"old-38":{
1:["SDN trennt die Steuerungslogik von der Datenweiterleitung. Abstrahiert wird vor allem die Control Plane, nicht die Weiterleitungsfunktion als solche.","Data-Plane-Programmierung betrifft die Paketweiterleitung nach Regeln des SDN-Controllers."],
2:["SDN führt Infrastruktur und Konfiguration gerade nicht untrennbar zusammen, sondern löst die Steuerung von einzelnen Hardwaregeräten.","Eine enge Fusion findet sich bei klassischen proprietären Netzgeräten."],
3:["Die SDN-Weiterleitung ist häufig flow-basiert, sodass Regeln weitere Paketmerkmale berücksichtigen können als nur das Ziel.","Ein reines destination-based Forwarding gehört zu klassischen IP-Routingansätzen."]
},
"old-39":{
0:["DAS braucht gerade vergleichsweise wenig zusätzliche Hardware, weil kein separater Storage-Switch nötig ist.","Hoher Hardwareaufwand trifft eher auf komplexe SAN-Installationen zu."],
1:["Durch die direkte Anbindung sind Latenzen oft geringer als bei einer zusätzlichen Netzwerkebene.","Höhere Zugriffszeiten können bei überlasteten Netzspeichern oder entfernten Verbindungen auftreten."],
3:["DAS benötigt normalerweise weniger zusätzlichen Netzwerk-Protokollaufwand als NAS.","Netzwerkprotokoll-Overhead ist besonders bei SMB-/NFS-Zugriffen über ein LAN zu beachten."]
},
"old-40":{
0:["Measured Service bedeutet das Erfassen und Abrechnen genutzter Ressourcen, nicht das schnelle Skalieren dieser Ressourcen.","Measured Service wäre richtig, wenn nach Verbrauchsmessung oder nutzungsabhängiger Abrechnung gefragt wird."],
2:["On-Demand Self-Service erlaubt Nutzern, Ressourcen selbst anzufordern. Die schnelle dynamische Kapazitätsänderung ist zusätzlich Rapid Elasticity.","Self-Service wäre richtig, wenn es um Bereitstellung ohne manuelle Anbieterinteraktion geht."],
3:["Broad Network Access bedeutet, dass Dienste über Netzwerke und Standardgeräte erreichbar sind, nicht dass ihre Kapazität dynamisch wächst.","Es wäre richtig, wenn nach dem Zugriff von verschiedenen Endgeräten und Standorten gefragt wird."]
},
"old-41":{
1:["Ein Notstromaggregat erzeugt elektrische Energie als Ersatzversorgung und speichert keine Kälte.","Es ist wichtig für längere Stromausfälle nach Überbrückung durch die USV."],
2:["Eine Kältemaschine erzeugt Kühlleistung, ein Kaltwassertank speichert bereits bereitgestelltes kaltes Wasser beziehungsweise Kälteenergie.","Die Kältemaschine ist richtig, wenn gefragt wird, womit Kälte aktiv erzeugt wird."],
3:["Batterien speichern elektrische Energie für die USV und keine thermische Kälteenergie.","Batterien passen zur kurzfristigen Stromversorgung bei Netzausfall."]
},
"old-42":{
0:["RAID 0 besitzt keine redundanten Daten oder Parität; ein Plattenausfall kann deshalb alle Daten unlesbar machen.","Vollständige Spiegelung der Daten wird durch RAID 1 erreicht."],
2:["Write Penalty tritt bei paritätsbasierten RAIDs wie RAID 5 und 6 auf, weil Parität bei Schreibvorgängen neu berechnet werden muss.","Das wäre als Nachteil von RAID 5 oder RAID 6 richtig."],
3:["RAID 0 stellt normalerweise die Summe der Nutzkapazitäten bereit und verdoppelt nicht wegen Redundanz den Plattenbedarf.","Der doppelte physische Bedarf ist typisch für eine zweifache Spiegelung bei RAID 1."]
},
"old-43":{
0:["DAS ist an einzelne Hosts gebunden; die Aufnahmen sollen jedoch von mehreren Computern über TCP/IP erreichbar sein.","DAS wäre sinnvoll für lokalen Hochleistungsspeicher an einem Server."],
1:["Ein FC-SAN bietet hochperformanten gemeinsamen Blockspeicher, ist aber für preiswerte IP-basierte Videoablage typischerweise überdimensioniert.","SAN wäre richtig bei einer leistungsfähigen Virtualisierungs- oder Datenbankinfrastruktur." ]
},
"old-44":{
0:["Hardwareunabhängigkeit erlaubt, virtuelle Maschinen zwischen geeigneten physischen Hosts zu bewegen; sie beschreibt nicht die explizite Ressourcenzuteilung.","Sie wäre richtig, wenn es um VM-Migration zwischen unterschiedlichen Hostmodellen geht."],
1:["Isolierung trennt VMs, damit sie sich nicht gegenseitig manipulieren; sie weist nicht selbst bestimmte CPU- oder RAM-Anteile zu.","Isolierung ist wichtig, wenn sich mehrere Gastsysteme einen Host sicher teilen."],
2:["Einkapselung bündelt den VM-Zustand in transportierbaren virtuellen Objekten, nicht die Aufteilung der physischen Ressourcen.","Einkapselung ist relevant für VM-Kopien, Snapshots und Migration."]
},
"old-45":{
0:["Endpoint Protection braucht tiefen Betriebssystemzugriff für Bedrohungserkennung und Treiber; eine gewöhnliche App-V-Paketierung ist dafür ungeeignet.","Endpoint Protection wird üblicherweise nativ und mit den erforderlichen Systemrechten installiert."],
2:["Druckertreiber greifen in das Betriebssystem und dessen Gerätesteuerung ein; sie sind keine gewöhnlichen isolierten Anwendungsdateien.","Treiber werden als Systemkomponenten über dafür vorgesehene Mechanismen installiert."],
3:["Windows-Hotfixes aktualisieren Systemdateien und Dienste, statt als abgeschlossene Benutzeranwendung zu laufen.","Sie werden über Patch-Management des Betriebssystems ausgerollt."]
},
"old-46":{
0:["First In – Last Out ist keine übliche Generationenrotation für definierte tägliche, wöchentliche und monatliche Wiederherstellungspunkte.","Ein LIFO-Prinzip ist bei Stapelstrukturen ein Begriff, nicht die hier gesuchte Backup-Rotation."],
1:["FIFO löscht die älteste Sicherung zuerst und kennt dabei nicht automatisch die drei Aufbewahrungsgenerationen.","FIFO eignet sich für einfache Speicherringe mit begrenzter Kapazität."],
3:["Türme von Hanoi verteilt Medien nach mathematischen Intervallen und ist nicht die explizit tägliche, wöchentliche, monatliche Generationenstrategie.","Dieses Verfahren passt, wenn mit wenigen Medien gestaffelte Sicherungszeitpunkte aufgebaut werden sollen."]
},
"old-47":{
0:["Differenziell sichert Veränderungen seit einer unveränderten Vollsicherung; es beschreibt keine fortlaufende synthetische Konsolidierung.","Differenzielle Backups passen, wenn ein Restore aus Vollbackup und letztem Differenzial bestehen soll."],
1:["Bei einer reinen Vollsicherung werden sämtliche Daten erneut gelesen. Incremental Forever vermeidet genau diese ständige vollständige Neusicherung.","Vollsicherungen passen für einfache eigenständige Backup-Sätze."],
3:["'Incremental Forever' wird außerhalb dieser vereinfachten Zuordnung durchaus für fortlaufende inkrementelle Backups verwendet. Der Begriff ist deshalb technisch nicht klar falsch; die Klausur ordnet ihn der synthetischen Konsolidierung zu.","Inkrementell ist richtig, wenn nur die seit der letzten Sicherung geänderten Daten erfasst werden sollen."]
},
"old-48":{
1:["'Desktopserver' ist kein üblicher standardisierter Rackformfaktor. Die Frage verlangt einen Einbau im vorhandenen 19-Zoll-Schrank.","Ein Desktop-PC kann für einfache lokale Aufgaben dienen, ist aber nicht die passende Rackbauform."],
2:["Towerserver sind freistehende Gehäuse und lassen sich nicht ohne Weiteres passend in ein 19-Zoll-Rack einschieben.","Ein Tower wäre sinnvoll, wenn der Server im Büro ohne Rack stehen soll."],
3:["Blades benötigen ein spezielles Chassis und gemeinsam genutzte Infrastruktur. Für nur einen lokalen Druckserver wäre das unnötig aufwendig.","Blades passen für dicht gepackte standardisierte Serverumgebungen mit mehreren Modulen."]
}
};
