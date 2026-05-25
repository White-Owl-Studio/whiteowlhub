/**
 * convert-webp.mjs
 *
 * Converts all PNG/JPG/JPEG images under public/ to WebP siblings.
 * Run after adding new images: npm run convert-webp
 *
 * Rules:
 *  - Skips files that already have an up-to-date .webp sibling
 *    (compares mtime — re-runs are fast)
 *  - Skips GIFs and videos (no WebP needed; browsers handle these)
 *  - Quality 82 — visually lossless for photos, ~60-80% size reduction
 *  - Reports each file: CONVERTED / SKIPPED / ERROR
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const QUALITY    = 82;
const CONVERTABLE = new Set(['.png', '.jpg', '.jpeg']);
const ROOT       = join(fileURLToPath(import.meta.url), '../../public');

let converted = 0, skipped = 0, errors = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (!CONVERTABLE.has(ext)) continue;

      const webpPath = full.replace(/\.(png|jpe?g)$/i, '.webp');
      const srcStat  = await stat(full);

      // Skip if WebP sibling already exists and is newer than the source
      try {
        const dstStat = await stat(webpPath);
        if (dstStat.mtimeMs >= srcStat.mtimeMs) {
          skipped++;
          continue;
        }
      } catch {
        // no sibling yet — fall through to convert
      }

      try {
        await sharp(full).webp({ quality: QUALITY }).toFile(webpPath);
        const srcKB = Math.round(srcStat.size / 1024);
        const dstKB = Math.round((await stat(webpPath)).size / 1024);
        const saving = Math.round((1 - dstKB / srcKB) * 100);
        console.log(`CONVERTED  ${entry.name}  ${srcKB}KB → ${dstKB}KB  (-${saving}%)`);
        converted++;
      } catch (err) {
        console.error(`ERROR      ${entry.name}  ${err.message}`);
        errors++;
      }
    }
  }
}

console.log(`\nScanning public/ for images to convert…\n`);
await walk(ROOT);
console.log(`\nDone. Converted: ${converted}  Skipped (up-to-date): ${skipped}  Errors: ${errors}`);

if (converted > 0) {
  console.log(`\nNext steps:`);
  console.log(`  1. Update image src paths in portfolio.ts / films.ts to use .webp`);
  console.log(`     (or use the update-src-webp script if available)`);
  console.log(`  2. Commit the new .webp files alongside your other changes`);
}
