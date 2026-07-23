# Design systém — honzabrzak.cz

Referenční dokument pro projekt. Platí pro veškerý nový kód/komponenty na webu — viz `tokens.css` pro hotové CSS proměnné a `mockup.html` pro živou ukázku.

Inspirace: Olivine Marketing, Soapbox Retail. Minimalismus, ostré hrany, žádné gradienty, žádné zbytečné animace. Pro PPC freelancera to dává smysl i obsahově — čistý design = signál, že nezdobíš výsledky barevnými grafy, ale ukazuješ čísla na rovinu.

---

## 1. Barvy

Brand barva `#243E88` je vytažená přímo z loga (změřeno z dodaného PNG). Zbytek palety je postavený kolem ní — neutrály jsou čisté, takže modrá z loga zůstává jediný akcent na stránce.

| Název | Hex | Použití | Proč |
|---|---|---|---|
| Ink | `#121214` | primární text, nadpisy | nejvyšší kontrast, čitelnost — záměrně černá, ne modrá, aby brand modrá vynikla jen tam, kde má (CTA, linky) |
| Paper | `#FFFFFF` | hlavní pozadí | čistota, žádný šum |
| Fog | `#F4F4F2` | pozadí sekcí (ceník, recenze) | neutrální odlišení sekcí bez stínů — nemodří se, brand modrá zůstává jediný akcent |
| Slate | `#5A5F66` | sekundární text, popisky | hierarchie bez měnění velikosti písma |
| Line | `#E3E3E0` | hairline borders, oddělovače | nahrazuje stíny — "ostré" řešení |
| **Brand** | `#243E88` | accent — CTA, linky, highlight, logo | barva z loga, jediný akcent v systému |

**Brand barevná škála** (tinty/odstíny pro hover, badge pozadí, focus stavy — odvozeno matematicky z Brand, ne odhadem od oka):

| Token | Hex | Použití |
|---|---|---|
| Brand-50 | `#E9ECF3` | velmi světlé pozadí (badge, subtle highlight) |
| Brand-100 | `#BDC5DB` | světlejší pozadí, disabled stavy |
| Brand-300 | `#7C8BB8` | sekundární prvky na brand pozadí |
| Brand-600 | `#243E88` | základní brand barva (= barva loga) |
| Brand-800 | `#1D326D` | hover/active stav primárního tlačítka |
| Brand-900 | `#172858` | dark varianta (patička, jedna dark sekce) — namísto generické černé patičky použijeme nejtmavší odstín brand barvy, takže i dark sekce zůstane vizuálně "vlastní" |

**Pravidla:**
- Žádné gradienty mezi barvami, nikdy.
- Žádné barevné stíny (box-shadow s barvou).
- Max. 1 accent barva (Brand) viditelná na obrazovku najednou — neutrály a Brand škála to neporušují, protože jsou odstíny téže barvy.

---

## 2. Typografie

| Role | Font | Kde | Proč |
|---|---|---|---|
| Display | **Plus Jakarta Sans (700)** | H1, hero claim, velká čísla | dočasně free font — neutrální grotesk bez ozdobných detailů, příjemnější na velkých nadpisech než Inter. Až koupíš placený font (Suisse Int'l / Neue Montreal / Söhne), nahradí tuhle roli |
| Body | **Inter** | běžný text, UI, formuláře | čitelný ve všech velikostech, dobře zvládá českou diakritiku |
| Data / Mono | **IBM Plex Mono** | statistiky, ceny, certifikace, badge | mono dává číslům pocit přesnosti a měřitelnosti — sedí na "čísla na rovinu, žádné cirkusy" |

**Type scale** (16px = 1rem báze):

| Element | Desktop | Mobile | Font / váha |
|---|---|---|---|
| H1 | 64/68px | 40/44px | Inter, 700 |
| H2 | 40/44px | 28/32px | Inter, 700 |
| H3 | 24/28px | 20/24px | Inter, 600 |
| Body | 16/26px | 16/26px | Inter, 400 |
| Small / caption | 13/18px | 13/18px | IBM Plex Mono, 500, uppercase, letter-spacing 0.04em |

---

## 3. Spacing

8px grid: `8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`

Proč 8px báze: konzistentní rytmus mezi sekcemi a snadné škálování — pokud v Cursoru sáhneš po Tailwindu, jeho výchozí spacing scale (`2,4,6,8,12,16,24,32...` × 4px) je s tímhle 1:1 kompatibilní, takže nemusíš nic přemapovávat.

---

## 4. Layout / mřížka

- Max šířka containeru: **1200px**, padding 24px po stranách (16px na mobilu)
- 12-column grid, gutter 24px
- Sekce oddělené **1px hairline** (barva Line) — ne stínem, ne barevným blokem (kromě Fog pozadí u ceníku/recenzí)

---

## 5. Komponenty — pravidla

- **border-radius: 0** všude, bez výjimky (tlačítka, karty, inputy, badge).
- **box-shadow: none.** Oddělení řeší hairline border nebo Fog pozadí, nikdy stín.
- **Žádné hairline-ohraničené "pilulky"/tagy.** Drobné prvky jako tagy, badge nebo sekundární tlačítka nikdy nemají border — vždy jednolité pozadí (typicky Fog). Hairline border je vyhrazený pro strukturální oddělovače (mezi sekcemi, kolem karet), ne pro malé UI prvky — jinak to sklouzne do "AI generated" vzhledu (rámečky všude).
- **Tlačítka:**
  - primární: Ink pozadí + Paper text (hlavní CTA může mít Brand pozadí, hover → Brand-800)
  - sekundární: Fog pozadí + Ink text, žádný border
  - hover: jen prohození barvy pozadí/textu, transition max 120ms, žádný scale/translate
- **Tagy/chipy:** Fog pozadí, žádný border, text Ink nebo Slate.
- **Animace:** žádný scroll-reveal, žádný parallax. Jen fade 80–120ms na hover/focus stavy.
- **Ikony:** linkové, stroke 1.5px, monochrom (Ink nebo Slate). Žádné duotone ani barevné ikony — drží to disciplínu jedné accent barvy.

---

## 6. Signature element

Logo je kruh proražený šipkou/kurzorem — vizuálně to je "cíl + směr/klik". Tenhle motiv se dá použít strukturálně, ne dekorativně:

- **Číslované kroky** (sekce "Jak funguje spolupráce", 01–09) jsou orámované tenkým kruhovým obrysem (1.5px, barva Ink nebo Brand) — echo geometrie loga, ale bez toho, aby šlo o ikonu nebo klipart. Číslo uvnitř kruhu v Plex Mono.
- **Tři klíčová čísla** (roky praxe, počet klientů, počet kampaní) podaná v Plex Mono, hairline-boxed, bez stínu:

```
┌─────────────────┬─────────────────┬─────────────────┐
│  70+             │  5+              │  Google          │
│  KLIENTŮ         │  LET PPC         │  PARTNER         │
└─────────────────┴─────────────────┴─────────────────┘
```

Mono font + hranaté boxy dávají číslům pocit faktu, ne marketingové fráze — to je jediná "drobná odvaha" v systému, zbytek stránky zůstává disciplinovaný a klidný. Žádný odkaz na pilotní background v designu — ten zůstává jen jako text v sekci O mně.

---

## 7. Mapování na současný obsah honzabrzak.cz

| Sekce na webu dnes | Co se změní |
|---|---|
| Hero (claim + 6× ✅ bullet + kontakt) | struktura zůstává, jen se otypuje: H1 Inter 700, mono badge "PPC SPECIALISTA" místo emoji-checkboxů |
| Jak funguje spolupráce (9 kroků) | numbered list 01–09 — justifikováno, je to reálná sekvence kroků |
| Ceník (3 tiery) | karty s hairline borderem, ceny v Plex Mono, žádné "doporučeno" badge s gradientem |
| Klienti (loga) | grid, loga grayscale, barva se vrátí jen na hover |
| Recenze | karty na Fog pozadí, citace bez ozdobných uvozovek |
| FAQ | accordion, rotace ikony max 100ms, žádný bounce |
