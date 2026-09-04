# totm-sizes

Ad unit sizes for TOTM. This repository is the single source for them — TOTM
carries none of its own.

A TOTM build clones this repository (`gitclone:sizes`), merges the default
sizes with each site config (`copySizes`) and writes a generated `sizes.js`
into the matching page folder of TOTM. **A merge here is not a release:** the
change reaches the delivered file only with the next TOTM build.

```bash
# in TOTM, after changing something here
npx grunt sizes      # clone this repo and regenerate the sizes.js files
```

## Layout

```
01_defaultSizes/sizes.js    base, available to every publication
<publication>/sizes.js      overrides and additions for that site
```

Each file is a `module.exports = {}` keyed by ad unit name. `copySizes` first
resolves inheritance inside `01_defaultSizes`, then merges the site on top —
the site wins.

Four rules about the folders:

- **The folder name must match a page folder in TOTM** (`src/pages/<name>/`).
  Without one the folder is **silently skipped** — no error, no warning, the
  sizes simply never arrive. This is the most common reason a new publication
  ends up with no sizes.
- **NEWSNET is a single site.** Every NEWSNET publication imports the same
  `NEWSNET/sizes.js`. A per-publication folder below `NEWSNET/` is never
  bundled; `copySizes` warns about it.
- A folder **without a `sizes.js`** is reported as an error.
- Hidden folders (`.git`, `.idea`) are ignored, and no file is ever generated
  for `01_defaultSizes` itself.

An error in one site does not abort the others — `copySizes` collects them and
reports them together.

## Configuring an ad unit

```js
'inside-full-top': {
    options: {
        loadingRatio: 0.66,        // default 0 (off)
        percentageViewable: 50,    // default: not checked
        checkContainerWidth: true, // default false — checks the viewport
        onlyWidthMatters: true     // default false — width AND height
    },

    sizes: {
        dfp:      [[994, 250], [994, 118], [300, 250]],
        appnexus: [[994, 250], [994, 118], [300, 250]]
    },

    blockedSizes: {
        dfp:      [[994, 250]],
        appnexus: [[994, 250]]
    },

    forcedSizes: {
        all:     [],
        mobile:  [[828, 910]],
        desktop: [[960, 800]]
    }
}
```

### sizes

What goes to the respective ad server. **`dfp` and `appnexus` are separate
lists.** Maintaining only one leaves prebid bidding on a size GAM cannot serve,
or the other way round.

### blockedSizes

Takes an inherited size back out. Only useful in a site config, to drop
something that comes from `01_defaultSizes`.

### forcedSizes

Always appended for the given device, and they **bypass the filters** —
including `loadingRatio`. The way to keep a format that would otherwise be
dropped.

- **all** — forced on mobile and desktop
- **mobile** / **desktop** — forced on that device only

### options

These steer the size selection inside TOTM.

- **loadingRatio** — number between 0 and 1. Drops sizes that are narrow
  relative to the widest fitting one. At `0.66` with 994 px as the widest, the
  threshold is 656 px, so a 300 px size is dropped on desktop but survives on
  mobile, where the widest size is itself a 300.
- **percentageViewable** — integer between 0 and 100. How much of the ad unit
  has to be viewable when loading.
- **checkContainerWidth** — measure against the container instead of the
  viewport. For slots that do not span the full width (sidebar, gallery).
- **onlyWidthMatters** — check the width only. By default width and height are
  both checked against the viewport.

## Inheritance: extends and overwrites

An ad unit can inherit from another one **in the same file**, after the default
and site configs have been merged:

```js
'inside-full-pos1': {
    extends: 'inside-full',        // arrays are combined
    options: { explicit: true }
},
'paid-inside-full-top': {
    overwrites: 'inside-full-top'  // arrays are replaced
}
```

| | arrays the child redefines | arrays and blocks it leaves alone | scalars |
| --- | --- | --- | --- |
| `extends` | inherited **plus** own | inherited | child wins |
| `overwrites` | **own only** | inherited | child wins |

So `overwrites` does not replace the whole entry, only the arrays you actually
write down. A `blockedSizes` block you do not mention still comes from the
parent.

**An empty array under `overwrites` clears.** `sizes: {dfp: []}` or
`forcedSizes: {mobile: []}` is how you deliberately empty an inherited list.
Under `extends` it does nothing, because there the arrays are appended.

Two details about the arrays: **duplicates are removed**, with the first
occurrence deciding the order, and **`[300,600]` and `[600,300]` count as
different sizes** — transposed is not the same.

Inheritance resolves recursively. Chains across several ad units work, and the
declaration order in the file does not matter — a child may be declared before
its parent. The directives themselves never appear in the generated file.

### What stops the build

`copySizes` validates while resolving and reports an **error** when

- an ad unit declares both `extends` and `overwrites` (neither is applied),
- the name it inherits from does not exist,
- the inheritance is circular (`a -> b -> a`).

An ad unit inheriting from **its own name** is only a **warning**. The
directive is dropped: at that point the site config has already been merged
into the defaults, so it would have had no effect anyway.

## What TOTM does with the list afterwards

The list is not used as written. In order: sort ascending by width, filter
against viewport or container, apply `loadingRatio`, append `forcedSizes`,
deduplicate, then sort by TOTM's global `sizePrioOrder`. Two consequences:

- A size that is configured here is not necessarily delivered — `loadingRatio`
  may remove it.
- **The order in this file determines nothing.** Which size goes first to DFP
  and prebid is decided by `config.sizePrioOrder` in TOTM.

## Checking a change

`copySizes` logs every resolved inheritance and all errors and warnings. After
that, on TOTM's dummy page:

```js
const au = TATM.gptadslots.find(a => a.adUnitName === "inside-full-top");
au.adUnitConf.sizes.dfp.map(s => s.join("x"))    // what is configured
au.getPossibleSizesForAdunitName("dfp", false)   // what survives the filters
```

If those two differ, a filter removed something — the expectation is wrong,
not the config.
