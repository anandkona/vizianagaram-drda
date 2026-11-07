import { promises as fs } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const BASE = "/vizianagaram-drda";
const roots = ["/images/", "/leaders/", "/assets/", "/icons/", "/fonts/"];

async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!/\.(html|css|js|json|map)$/i.test(entry.name)) continue;

    let text = await fs.readFile(file, "utf8");
    const before = text;
    for (const root of roots) {
      const escaped = root.replace(/[.*+?^$()|[\\]\\]/g, "\\$&");
      text = text.replace(new RegExp("(?<![A-Za-z0-9_:/.-])" + escaped, "g"), BASE + root);
    }
    if (text !== before) await fs.writeFile(file, text);
  }
}

await walk(OUT);
console.log("Normalized GitHub Pages public asset paths.");
