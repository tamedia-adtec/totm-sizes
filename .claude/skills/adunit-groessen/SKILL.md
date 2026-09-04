---
name: adunit-groessen
description: Nutzen wenn eine Adunit-Groesse fuer eine Publikation hinzugefuegt, entfernt oder gesperrt werden soll, wenn eine Groesse nicht ausgeliefert wird, bei extends, overwrites, blockedSizes, forcedSizes, loadingRatio, oder wenn unklar ist welche Groessen ein Slot am Ende bekommt.
---

# Adunit-Groessen

Dieses Repo ist die einzige Quelle fuer Adunit-Groessen. **Das Format steht
vollstaendig in der [README.md](../../../README.md)** — die vier Bloecke
(`sizes`, `blockedSizes`, `forcedSizes`, `options`), die Vererbung ueber
`extends`/`overwrites` und die Merge-Semantik dort nachlesen, nicht raten.

Diese Datei ist die Kurzfassung fuer die Arbeit daran: was zuerst zu pruefen
ist, woran es erfahrungsgemaess scheitert, und wie man das Ergebnis
gegenprueft.

## Vor der Aenderung

**1. Ist es ueberhaupt eine Groessen-Aenderung?** Nur was immer gilt, gehoert
hierher. Alles, was von Pagetype, Geraet oder Targeting abhaengt, gehoert in
TOTM in die `config_<build>.js` der Site, ueber `removeSize`/`addSize` in
`onTATMInit`. Siehe dort den `site-config`-Skill.

**2. Welche Datei?** `01_defaultSizes/sizes.js` trifft alle Publikationen,
`<publikation>/sizes.js` nur die eine. Bei NEWSNET gibt es **eine** gemeinsame
Datei fuer alle Publikationen — eine Aenderung dort trifft tagesanzeiger,
bazonline, tdg, 24heures und die uebrigen gemeinsam.

**3. Beide Adserver.** `sizes.dfp` und `sizes.appnexus` sind getrennte Listen.
Wer nur eine pflegt, laesst Prebid auf eine Groesse bieten, die GAM nicht
ausspielen kann — oder umgekehrt.

## Woran es scheitert

| Symptom | Ursache |
| --- | --- |
| Neue Publikation bekommt gar keine Groessen | Der Ordnername hat kein Gegenstueck unter `src/pages/<name>/` in TOTM. Der Ordner wird **stillschweigend** uebersprungen — kein Fehler, keine Warnung. |
| Aenderung an einer NEWSNET-Publikation wirkt nicht | Ein Ordner je Publikation unterhalb von `NEWSNET/` wird nie gebundelt. Die gemeinsame `NEWSNET/sizes.js` aendern. |
| `overwrites` hat mehr ersetzt als gedacht — oder weniger | Es ersetzt **nur die Arrays, die man selbst hinschreibt**. Was man nicht erwaehnt, kommt weiter vom Elternteil. |
| Geerbte Liste laesst sich nicht leeren | Unter `overwrites` mit einem leeren Array. Unter `extends` bewirkt das nichts, dort wird angehaengt. |
| Groesse ist konfiguriert, kommt aber nicht an | `loadingRatio` filtert schmale Groessen auf breiten Slots. `forcedSizes` umgehen den Filter. |
| Reihenfolge im File wirkt nicht | Sie bestimmt nichts. Die erste Groesse an DFP und Prebid entscheidet `config.sizePrioOrder` in TOTM. |
| Build bricht ab | `extends` **und** `overwrites` am selben Adunit, unbekanntes Elternteil, oder ein Zirkel. `copySizes` nennt den Fall. |

## Danach

```bash
# in TOTM
npx grunt sizes    # klont dieses Repo neu und erzeugt die sizes.js
```

`copySizes` protokolliert jede aufgeloeste Vererbung und meldet Fehler und
Warnungen gebuendelt je Site. Eine Aenderung hier wirkt **erst mit dem
naechsten TOTM-Build** — ein Merge in diesem Repo ist kein Release.

Gegenprobe auf der Dummy-Seite von TOTM:

```js
const au = TATM.gptadslots.find(a => a.adUnitName === "inside-full-top");
au.adUnitConf.sizes.dfp.map(s => s.join("x"))    // was konfiguriert ist
au.getPossibleSizesForAdunitName("dfp", false)   // was nach den Filtern bleibt
```

Weichen die beiden ab, hat ein Filter zugeschlagen — dann ist nicht die Config
falsch, sondern die Erwartung. Die vollstaendige Filterkette steht in TOTM
unter `.claude/skills/site-config/`.
