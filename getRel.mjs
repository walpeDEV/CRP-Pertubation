// Der Code durchsucht alle info.txt Dateien und extrahiert die relevanten Features und gibt sie aus, damit sie anschließend für feature_visualization.ipynb genutzt werden können

import fs from 'fs/promises';
import path from 'path';

// Startordner
// const rootFolder = './results_calc/';
const rootFolder = './results_show/';

async function getInfoFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getInfoFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'info.txt') {
      console.log(fullPath);
      files.push(fullPath);
    }
  }

  return files;
}

async function extractNumbers() {
  const infoFiles = await getInfoFiles(rootFolder);
  const numbers = new Set();

  for (const file of infoFiles) {
    const content = await fs.readFile(file, 'utf-8');
    const lines = content.split(/\r?\n/).slice(1); // ab 2. Zeile

    for (const line of lines) {
      const match = line.match(/^(\d+):/); // Zahl am Anfang bis Doppelpunkt
      if (match) {
        numbers.add(match[1]);
      }
    }
  }

  console.log('Gefundene Nummern:');
  console.log([...numbers].join(', '));
}

extractNumbers().catch((err) => console.error(err));
