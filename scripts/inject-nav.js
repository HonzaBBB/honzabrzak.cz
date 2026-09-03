#!/usr/bin/env node
/**
 * Vloží sdílený header/footer do všech produkčních HTML stránek.
 *
 * Zdroj pravdy:
 *   partials/nav.json   — položky menu (pořadí, texty, slugy, kotvy na homepage)
 *   partials/header.html
 *   partials/footer.html
 *
 * Spuštění: node scripts/inject-nav.js
 * Netlify:  nastaveno jako build command
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PARTIALS = path.join(ROOT, 'partials');

const SKIP_DIRS = new Set(['mockups', 'partials', 'scripts', 'node_modules', '.git']);

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function renderLinks(items, hrefForItem, indent) {
  return items
    .map((item) => `${indent}<a href="${hrefForItem(item)}">${item.label}</a>`)
    .join('\n');
}

function renderPartial(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in vars)) {
      throw new Error(`Chybí placeholder {{${key}}} v šabloně`);
    }
    return vars[key];
  });
}

function collectPages() {
  const pages = [];

  const rootIndex = path.join(ROOT, 'index.html');
  if (fs.existsSync(rootIndex) && read(rootIndex).includes('site-header')) {
    pages.push({ file: rootIndex, isHome: true });
  }

  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) {
      continue;
    }
    const indexPath = path.join(ROOT, entry.name, 'index.html');
    if (!fs.existsSync(indexPath)) continue;
    const html = read(indexPath);
    // Přesměrovací stránky bez headeru přeskočit
    if (!html.includes('site-header')) continue;
    pages.push({ file: indexPath, isHome: false });
  }

  return pages;
}

function injectPage(page, headerTpl, footerTpl, items) {
  const assetPrefix = page.isHome ? '' : '../';
  const rootHref = page.isHome ? './' : '../';

  const headerNav = renderLinks(
    items,
    (item) => (page.isHome ? item.home : `${assetPrefix}${item.slug}`),
    '      '
  );
  const footerNav = renderLinks(
    items,
    (item) => `${assetPrefix}${item.slug}`,
    '        '
  );

  const header = renderPartial(headerTpl, {
    ROOT: rootHref,
    ASSET_PREFIX: assetPrefix,
    NAV_LINKS: headerNav,
  }).trimEnd();

  const footer = renderPartial(footerTpl, {
    ROOT: rootHref,
    ASSET_PREFIX: assetPrefix,
    FOOTER_NAV_LINKS: footerNav,
  }).trimEnd();

  let html = read(page.file);
  const original = html;

  if (!/<header class="site-header">[\s\S]*?<\/header>/.test(html)) {
    throw new Error(`Nenalezen <header class="site-header"> v ${path.relative(ROOT, page.file)}`);
  }
  if (!/<footer class="site-footer">[\s\S]*?<\/footer>/.test(html)) {
    throw new Error(`Nenalezen <footer class="site-footer"> v ${path.relative(ROOT, page.file)}`);
  }

  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, header);
  html = html.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footer);

  if (html === original) {
    return { changed: false };
  }

  fs.writeFileSync(page.file, html, 'utf8');
  return { changed: true };
}

function main() {
  const nav = JSON.parse(read(path.join(PARTIALS, 'nav.json')));
  const headerTpl = read(path.join(PARTIALS, 'header.html'));
  const footerTpl = read(path.join(PARTIALS, 'footer.html'));
  const pages = collectPages();

  let changed = 0;
  for (const page of pages) {
    const result = injectPage(page, headerTpl, footerTpl, nav.items);
    const rel = path.relative(ROOT, page.file);
    if (result.changed) {
      changed += 1;
      console.log(`updated  ${rel}`);
    } else {
      console.log(`ok       ${rel}`);
    }
  }

  console.log(`\nHotovo: ${pages.length} stránek, ${changed} změněno.`);
}

main();
