# Redesign honzabrzak.cz — shrnutí rozhodnutí

## Výchozí stav (Analytics, 28 dní)
- 104 uživatelů celkem, 21 organic (google), 78 direct/none (pravděpodobně boti/bookmarks)
- Blog: 21 uživatelů, 4s engagement, 0 konverzí — v současné podobě nefunguje jako lead gen
- Kontakt stránka: 43% všech key events — funguje dobře
- CR na key event z homepage traffic: cca 4%

## Cíl
Víc leadů z webu. Do budoucna PPC kampaně na vlastní web. Prodávat message "systematický přístup, ne bezhlavé klikání" — postavenou na vlastních PPC automatizacích (neprodávat nástroje, prodávat metodu/expertízu).

## Rozhodnutí

**Tech stack:** Vibecoding v Cursoru, statický web (žádný Next.js/Vercel — overkill pro statické HTML s formulářem).

**Hosting:** Netlify (ne GitHub Pages) — kvůli Netlify Forms (řeší kontaktní formulář bez backendu, free tier 100 submissions/měsíc).

**Workflow nasazení:**
1. Nový repo v Cursoru → push na GitHub
2. Netlify napojený na repo → automatický deploy, preview URL (noindex, needndexuje se)
3. Testování a feedback na preview URL, stará Tilda běží dál
4. Až hotovo → custom domain honzabrzak.cz v Netlify → změna DNS na Wedosu

**Měření:** Zůstává GA4 + GTM + Cookiebot (stávající GTM container GTM-T5WG856 se přenese 1:1 do nového webu — žádné nové nastavení tagů). Umami zvážen a zamítnut pro tento web — nejde napojit na Google Ads conversions nativně, řešení by bylo přes GCLID + Ads API, overkill na objem dat.

**SEO — zachování trafficu:**
- Zachovat identickou URL strukturu stávajících stránek
- Zachovat klíčová slova na stejných místech (PPC specialista, Google Ads, Sklik, Meta Ads)
- 301 redirecty pro cokoliv, co se přece jen změní
- Testovat na preview URL, přepnout DNS až po ověření

## Struktura nového webu

**Stávající URL k zachování:**
- `/` — homepage
- `/cenik`
- `/kontakt`
- `/reference`
- `/jak_funguje_spoluprace_se_mnou`
- `/blog`
- `/jednorazove_nastaveni_google_ads`

**Homepage — hybrid model (rozhodnuto kvůli SEO i UX):**
Kratší one-pager s kotvami (4–5 sekcí), klíčový obsah žije na separátních URL a rankuje samostatně:
1. Hero + CTA
2. Diferenciátor (systematický přístup, automatizace jako důkaz metody)
3. Vybrané reference (výběr, link na `/reference`)
4. Ceník přehledně (link na `/cenik`)
5. Kontaktní formulář

**Nová stránka:** `/jak-pracuji` (nebo podobný název) — diferenciátor, systematický přístup, automatizace jako proof of process.

**Blog — kompletně nový, jen pár článků, cíleně na konkrétní keywords:**
- "Jak nastavit Google Ads pro e-shop na Shoptetu"
- "PPC specialista vs. agentura — co se víc vyplatí"
- "Kolik stojí správa Google Ads v Česku"

## Otevřené body
- Vizuální reference webu — doplní se později
- Konkrétní obsah/copy pro jednotlivé stránky
- Finální název pro stránku o automatizacích/přístupu
