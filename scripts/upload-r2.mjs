import { S3Client, PutObjectCommand, HeadBucketCommand } from '@aws-sdk/client-s3';
import { readFileSync, statSync } from 'fs';
import { basename } from 'path';

const ACCOUNT_ID = 'f2ea3e1a1872506424e71db26341be6d';
const BUCKET     = 'wos-media';
const CDN_BASE   = 'https://media.whiteowlhub.com';

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId:     process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const CONTENT_TYPES = {
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.mov':  'video/quicktime',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
};

function ext(path) {
  return path.slice(path.lastIndexOf('.')).toLowerCase();
}

async function upload(localPath, r2Key) {
  const body = readFileSync(localPath);
  const size = statSync(localPath).size;
  const contentType = CONTENT_TYPES[ext(localPath)] ?? 'application/octet-stream';

  console.log(`Uploading ${basename(localPath)} (${(size / 1024 / 1024).toFixed(1)} MB) → ${r2Key}`);

  await client.send(new PutObjectCommand({
    Bucket:      BUCKET,
    Key:         r2Key,
    Body:        body,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  }));

  console.log(`  ✓  ${CDN_BASE}/${r2Key}`);
}

// ── Files to upload ──────────────────────────────────────────────
// Add more rows here as new media needs to go to R2.
// Format: [localPath, r2Key]
const FILES = [
  ['public/portfolio/puppets-sets/tabletop-wide.mp4',     'portfolio/puppets-sets/tabletop-wide.mp4'],
  ['public/portfolio/puppets-sets/tabletop-vertical.mp4', 'portfolio/puppets-sets/tabletop-vertical.mp4'],
];

for (const [local, key] of FILES) {
  await upload(local, key);
}

console.log('\nDone. Update portfolio.ts to use:');
for (const [, key] of FILES) {
  console.log(`  ${CDN_BASE}/${key}`);
}
