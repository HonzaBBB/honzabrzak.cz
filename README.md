# honzabrzak.cz

Statický web PPC freelancera Honzy Brzáka. Hosting: **Netlify** (Forms + preview deploys).

## Struktura

```
/
├── index.html              ← homepage
├── cenik/                  ← /cenik
├── jak-pracuji/            ← nová stránka (diferenciátor)
├── kontakt/
├── reference/
├── jak_funguje_spoluprace_se_mnou/   ← URL zachována ze starého webu
├── jednorazove_nastaveni_google_ads/
├── blog/
├── pripadova-studie-eshop/
├── dekuji/                 ← thank-you po odeslání formuláře
├── gdpr/
├── obchodni-podminky/
├── css/
├── assets/
├── mockups/                ← staré HTML mockupy (archiv)
├── docs/                   ← design systém, shrnutí rozhodnutí
└── netlify.toml
```

## Lokální náhled

Nejjednodušší: v kořeni projektu spustit lokální server (absolutní cesty `/css/...` potřebují HTTP, ne `file://`):

```bash
npx --yes serve .
# nebo: python3 -m http.server 8080
```

## Nasazení

1. Push na GitHub
2. V Netlify: New site from Git → vybrat repo
3. Publish directory: `.` (kořen), build command prázdný
4. Netlify Forms se detekují automaticky z `data-netlify="true"`
5. Preview URL = noindex (nastaveno v `netlify.toml`)
6. Až hotovo → custom domain `honzabrzak.cz` + DNS na Wedosu

## Měření

GTM container `GTM-T5WG856` je v HTML. Cookiebot doplnit NAD GTM (snippet z Tildy).

## Zdroj textů

Finální copy je v HTML souborech. `docs/texty.md` je jen pracovní poznámky.
