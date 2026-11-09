import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist', 'partykub');
const files = [
  ['Rummikub-PartyKub-Local.html', 'index.html'],
  'Baloo2-ExtraBold.ttf',
  'PartyKub-3d-table.js',
  'PartyKub-fondo-mesa.png',
  'PartyKub-splash-background.png',
  'PartyKub-splash-balloon.png',
  'PartyKub-splash-four-tile-crop.png',
  'PartyKub-splash-hat.png',
  'PartyKub-splash-left-tiles.png',
  'PartyKub-splash-rainbow-ribbon.png',
  'PartyKub-splash-star.png',
  'PartyKub-splash-word-hd.png',
  'partykub-new-logo.png'
];

await mkdir(output, { recursive: true });
for (const entry of files) {
  const [source, destination = source] = Array.isArray(entry) ? entry : [entry];
  await copyFile(resolve(root, source), resolve(output, destination));
}

console.log(`Built PartyKub static site in ${output}`);
