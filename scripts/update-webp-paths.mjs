/**
 * update-webp-paths.mjs
 *
 * Rewrites image src paths in source files to use .webp versions
 * wherever the corresponding .webp file exists in public/.
 *
 * Safe rules:
 *  - Only rewrites /path.png → /path.webp when public/path.webp exists
 *  - Never touches GIF, video, or external (https://) paths
 *  - Reports every substitution made
 */

import { readFile, writeFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT    = join(fileURLToPath(import.meta.url), '../..');
const PUBLIC  = join(ROOT, 'public');

const SOURCE_FILES = [
  'src/data/portfolio.ts',
  'src/data/films.ts',
  'src/pages/about.astro',
  'src/pages/films.astro',
  'src/pages/index.astro',
];

async function webpExists(publicPath) {
  const webpPath = join(PUBLIC, publicPath.replace(/\.(png|jpe?g)$/i, '.webp'));
  try { await access(webpPath); return true; } catch { return false; }
}

async function updateFile(relPath) {
  const full = join(ROOT, relPath);
  let src;
  try { src = await readFile(full, 'utf8'); } catch { return; }

  // Match quoted paths like '/portfolio/foo/bar.png' or "/films/x.jpg"
  const re = /(['"`])(\/(portfolio|films|about|ui)[^'"`]+\.(png|jpe?g))(['"`])/gi;

  let changed = 0;
  const updated = await replaceAsync(src, re, async (match, q1, path, _dir, _ext, q2) => {
    if (await webpExists(path)) {
      const newPath = path.replace(/\.(png|jpe?g)$/i, '.webp');
      console.log(`  ${relPath}: ${path} → ${newPath}`);
      changed++;
      return `${q1}${newPath}${q2}`;
    }
    return match;
  });

  if (changed > 0) {
    await writeFile(full, updated, 'utf8');
    console.log(`  ✔ ${relPath} — ${changed} path(s) updated\n`);
  } else {
    console.log(`  — ${relPath} — nothing to update\n`);
  }
}

async function replaceAsync(str, regex, asyncFn) {
  const matches = [];
  str.replace(regex, (...args) => { matches.push(args); return args[0]; });
  const replacements = await Promise.all(matches.map(m => asyncFn(...m)));
  let i = 0;
  return str.replace(regex, () => replacements[i++]);
}

console.log('\nUpdating image paths to .webp…\n');
for (const f of SOURCE_FILES) await updateFile(f);
console.log('Done.');
