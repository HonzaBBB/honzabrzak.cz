# TODO — co zbývá dodělat

Stav po složení finálních stránek z mockupů (červenec 2026).

## Hotovo

- [x] Netlify struktura URL (složky + `index.html`)
- [x] Sdílené CSS (`tokens.css`, `site.css` + page CSS)
- [x] Homepage, ceník, jak-pracuji, případová studie (obsah z mockupů)
- [x] Placeholder stránky pro zachované URL + GDPR / OP / děkuji / blog
- [x] Netlify Forms na homepage, ceník, kontakt
- [x] GTM placeholder (`GTM-T5WG856`)
- [x] `netlify.toml` (noindex na preview, security headers)
- [x] Git repo

---

## Obsah a copy

- [ ] **Reference homepage** — doplnit 2 citace ze stávajícího webu (bez PNO / absolutních čísel)
- [ ] **Reference stránka** — kompletní seznam + citace z Tildy
- [ ] **`/jak_funguje_spoluprace_se_mnou`** — přepsat obsah z Tildy (kroky 01–09)
- [x] **`/jednorazove_nastaveni_google_ads`** — přepsat obsah + cenu (14 400 Kč)
- [x] **GDPR + obchodní podmínky** — texty z Tildy; redirect `/obchodni_podminky` → `/obchodni-podminky/`
- [ ] **SLA odpovědi** — doplnit „X pracovních dnů“ na ceníku a kontaktu
- [ ] **GitHub odkaz** na `/jak-pracuji` (transparentnost / demo skripty) — až bude repo veřejné
- [ ] **Blog** — napsat 3 články (Shoptet Google Ads, specialista vs agentura, cena správy v ČR)

## Assety

- [ ] Hero foto → `assets/honza-hero.webp`
- [ ] Loga klientů → `assets/loga/` (z Tildy, ideálně šedá/jednobarevná)
- [ ] Screenshot case study → `assets/case/case-eshop-ads.png`
- [ ] Favicon + případně Open Graph obrázek

## Tech / UX

- [ ] **Cookiebot** snippet NAD GTM (1:1 z Tildy) na všechny stránky
- [ ] **Mobilní menu** (teď je nav na &lt;760px schovaný)
- [ ] Ověřit Netlify Forms po prvním deployi (testovací odeslání)
- [ ] 301 redirecty — až se něco oproti Tildě změní (`netlify.toml`)
- [ ] `robots.txt` + `sitemap.xml` před přepnutím DNS

## Nasazení

- [ ] Push na GitHub (vytvořit remote repo)
- [ ] Napojit Netlify na repo → preview URL
- [ ] Testovat na preview (stará Tilda běží dál)
- [ ] Custom domain + DNS na Wedosu — až bude hotovo

## Později / otevřené

- [ ] Vizuální reference webu (Olivine / Soapbox — už v design systému)
- [ ] Placený display font místo Plus Jakarta Sans
- [ ] Meta Ads v tag row na homepage? (v briefu jsou keywords, v mockupu jen Google/Sklik/GA4)
