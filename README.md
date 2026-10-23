# Englisch

Vokabeltrainer Englisch ↔ Deutsch fürs iPhone. Er läuft komplett im Browser, auch offline, und braucht keinen Server und kein Konto.

**App:** https://linda-efe.github.io/Englisch/

## Aufs iPhone holen
1. Den Link oben in **Safari** öffnen.
2. **Teilen → Zum Home-Bildschirm** wählen.
3. Ab jetzt die App über das Symbol starten. Dann bleibt der Lernstand dauerhaft gespeichert und die App funktioniert auch ohne Internet.

## Wie geübt wird
- Eine Karte zeigt ein Wort. Mit **Aufdecken** siehst du die Lösung und bewertest dich selbst mit *Gewusst* oder *Nicht gewusst*.
- Karteikasten-Prinzip wie in der alten Access-App: Jede Vokabel hat eine **Stufe von 0 bis 6**. Bei *Gewusst* steigt sie um eine Stufe, bei *Falsch* fällt sie auf 0 zurück. Stufe 0 gilt als *schwach*, Stufe 1–2 als *wackelig*, ab Stufe 3 *sitzt* die Vokabel.
- Die Auswahl **Schwache zuerst** nimmt fällige Vokabeln mit niedriger Stufe zuerst. Je höher die Stufe, desto länger ist die Pause bis zur nächsten Abfrage (1, 2, 4, 8, 16, 30 Tage).
- Falsch beantwortete Wörter kommen in derselben Runde ein paar Karten später nochmal.
- Tippen irgendwo auf den Bildschirm: 1. Tipp liest die Frage vor, 2. Tipp deckt die Antwort auf und liest sie vor, 3. Tipp geht zur nächsten Vokabel.

## Englisch-Zum-Einschlafen
Der Knopf 🌙 auf der Startseite öffnet ruhige Einschlaf-Geschichten (`geschichten.json`, eigene Texte). Jeder Satz wird erst auf Deutsch, dann auf Englisch vorgelesen. Pause, Ausschalt-Timer (wird am Ende langsam leiser) und „nächste Geschichte“ lassen sich einstellen. Das Display muss an bleiben, weil iOS das Vorlesen bei gesperrtem Bildschirm anhält.

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html` | Die komplette App |
| `vokabeln.json` | 1.974 Vokabeln aus der Access-Datenbank `Vokabeln.mdb` (Stand 23.10.2026), mit dem alten Lernstand: `[Englisch, Deutsch, Stufe, Anzahl Abfragen, letzte Antwort 1/0, Datum]` |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Offline-Betrieb und Home-Bildschirm |

## Lernstand
Der Fortschritt wird pro Gerät im Browser gespeichert (`localStorage`). Unter **Lernstand → Sicherung speichern** lässt er sich als Datei sichern, zum Beispiel in iCloud Drive, und auf einem anderen Gerät wieder laden.

## Vokabeln ergänzen
Neue Einträge in `vokabeln.json` anhängen, z. B. `["to thrive","gedeihen, florieren",0,0,0,"2026-10-23"]`, und dann committen. Der Fortschritt bleibt erhalten, solange Englisch und Deutsch eines Eintrags unverändert bleiben.
