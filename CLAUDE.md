# honzabrzak.cz

Web PPC freelancera Honzy Brzáka. Statické HTML, hosting Netlify
(Forms, preview deploye). Žádný framework, žádný build kromě vložení
navigace. Tady se dělají úpravy webu: obsah, SEO, GEO, technika.

Honza není programátor. Ke každé změně napiš česky a bez žargonu,
co se stane a proč (viz globální CLAUDE.md).

## Vztah k ostatním repům

- **tohle repo** — kód a texty webu.
- **ppc-knowledge** (`~/ppc-knowledge`) — analýzy, data a kontext
  o webu jako o „klientovi" `honza-brzak`:
  `clients/honza-brzak/context.md`, `learnings.md`, `analyses/`.
  Nové analýzy návštěvnosti a SEO vznikají tam, ne tady.
- **ppc-automation** (`~/Projects/ppc-automation`) — kód platformy.
  Z webu se volá jen keyword research (viz níž), kód se tady nemění.

Ceny a popis služeb na webu musí sedět s
`~/ppc-knowledge/offers/pricing-and-services.md`. Při změně ceníku
nebo služeb na webu ho porovnej a rozdíl Honzovi řekni.

Nic dalšího mimo tyhle tři složky nehledej. Když potřebuješ cestu,
zeptej se.

## SEO/GEO podklady

`docs/seo/` — kopie z `~/ppc-knowledge/clients/honza-brzak/analyses/`:

- `traffic-seo-geo-report-2026-10-24.md` — návštěvnost, kanály,
  SEO a GEO, **sekce 6 „Návrhy" je seznam práce na webu**.
- `gsc-performance-3m-2026-10-24.md` — export Search Console
  (dotazy, stránky) za 23.07.–22.10.2026.

Složka je v `.gitignore`. **Repo je na GitHubu veřejné** a reporty
obsahují útratu v Ads a údaje o poptávkách. Nic z `docs/seo/` ani
jiná interní čísla necommituj.

Zdroj pravdy jsou soubory v ppc-knowledge. Tady jsou jen pro čtení.
Když vznikne novější report, zkopíruj ho sem znovu, kopie needituj.

Než začneš na SEO/GEO úkolu, přečti si sekci 5 a 6 reportu.
Hlavní body (podrobnosti a čísla jsou v reportu):

1. 301 přesměrování všech starých URL z Tildy (podtržítka, `/faq`,
   `/certifikaty`, `/en`, 15 starých článků `/blog/xxxx-…`) +
   sjednocení koncového lomítka. Pak nová sitemapa do GSC.
2. Vrátit FAQ (stránka nebo sekce) se strukturovanými daty `FAQPage`.
3. Title a H1 homepage na „PPC freelancer / specialista na Google Ads
   a Sklik", jednou zmínit „dříve AdWords".
4. Obnovit 2–3 vybrané články blogu, zbytek přesměrovat.
5. GEO: stránka „Agentura, nebo freelancer?" (otázka → krátká
   odpověď), `Person` + `ProfessionalService` na homepage, ceny jako
   text v HTML, povolit AI roboty v `robots.txt`, volitelně `llms.txt`.

Co je hotové, se poznamenává v `TODO.md` tady (úkoly webu). Výsledek
s čísly (např. dopad přesměrování v GSC) patří do
`~/ppc-knowledge/clients/honza-brzak/learnings.md`.

## Keyword research (Collabim)

Návrhy klíčových slov a hledanost se zjišťují příkazem z platformy.
Bere seed slova, přes Collabim najde podobná, doplní hledanost, vyřadí
slova pod 10 hledání měsíčně a AI je roztřídí podle relevance. Výsledek
je CSV.

```
cd ~/Projects/ppc-automation/platform
npm run keyword-research -- --client=honza-brzak \
  --seeds="ppc freelancer,správa google ads" \
  --out=$HOME/Projects/honzabrzak.cz/docs/seo/kw-collabim-<popis>-RRRR-MM-DD.csv
```

- `--client=honza-brzak` vezme popis byznysu z `accounts.json`, AI podle
  něj hodnotí relevanci. `--context="…"` ho doplní.
- Seed slova ber z GSC dotazů v `docs/seo/` a z tématu stránky, kterou
  zrovna píšeš. Delší seznam dej do souboru (`--seeds-file=`, slovo na řádek).
- Výstup ukládej do `docs/seo/` (necommituje se).
- Každé spuštění stojí kredity v Collabimu. Spouštěj jen na Honzův pokyn
  a seznam seed slov mu předem ukaž.
- Když běh vyprší, nespouštěj znovu, navaž přes `--suggestions-ota=<id>`
  nebo `--volume-ota=<id>` (ID je ve výpisu).
- Potřebuje `COLLABIM_API_KEY` a `OPENAI_API_KEY` v
  `~/Projects/ppc-automation/platform/.env`. Když chybí, řekni to Honzovi.
  `.env` nečti ani nezapisuj.

## Struktura

- Každá stránka = složka s `index.html` (`/cenik/index.html` → `/cenik/`).
  Homepage je `index.html` v kořeni.
- `css/tokens.css` + `css/site.css` sdílené, k tomu CSS pro stránku
  (`home.css`, `cenik.css`…).
- `partials/header.html`, `footer.html`, `nav.json` — hlavička,
  patička a menu. **Needituj je ručně ve stránkách.** Uprav partial
  nebo `nav.json` a spusť `node scripts/inject-nav.js`, který je
  vloží do všech stránek s `<header class="site-header">`. Netlify
  ho pouští při každém nasazení.
- `assets/` — obrázky, loga, favicony.
- `docs/` — design systém (`design-system.md`), shrnutí rozhodnutí
  z redesignu (`web-redesign-shrnuti.md`), pracovní texty. Na webu
  se nezobrazuje.
- `mockups/` — archiv starých mockupů, needitovat.
- `netlify.toml` — build, hlavičky, **přesměrování**
  (`[[redirects]]`). Přesměrování přidávej sem, ne do `_redirects`.
- `robots.txt`, `sitemap.xml` — ručně udržované.

## Pravidla úprav

- Nová veřejná stránka: složka + `index.html` se `site-header`
  a `site-footer` (vzor vezmi z existující stránky), záznam do
  `sitemap.xml`, případně do `partials/nav.json`, a spustit
  `inject-nav.js`.
- Změněná nebo zrušená URL vždy dostane 301 v `netlify.toml`
  (s lomítkem i bez).
- Při změně stránky aktualizuj `<lastmod>` v `sitemap.xml`.
- Každá stránka má vlastní `<title>`, `meta description`, `og:*`
  a jeden `H1`.
- GTM kontejner `GTM-T5WG856` neměnit a nemazat. Formuláře přes
  Netlify Forms (`data-netlify="true"`), měření poptávek na ně
  navazuje. Změnu formuláře nebo `/dekuji/` Honzovi výslovně ohlas.
- `robots.txt` dnes blokuje `/blog/`. Při obnově článků to uprav.
- Texty česky, Honza píše v první osobě jednotného čísla („dělám",
  ne „děláme"), krátké věty, bez pomlček mezi větami, bez anglického
  žargonu, kde jde česky.

## Náhled a nasazení

Lokální náhled (absolutní cesty potřebují HTTP server):

```
npx --yes serve .
```

Kód se nasazuje přes GitHub (`HonzaBBB/honzabrzak.cz`) do Netlify.
Jak přesně se push na `main` propisuje na produkci: [DOPLNIT].
Commit a push jen na výslovnou žádost. Po dokončené práci je
aktivně nabídni.
