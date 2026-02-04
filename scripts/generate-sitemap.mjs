#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import memes from "../memes.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prefix = "https://www.louiechristie.com/memes";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${prefix}/</loc>
  </url>
${memes
  .filter((meme) => !meme.unlisted)
  .map((meme) => {
    if (meme.youtube) {
      return `  
  <video:video>
    <video:thumbnail_loc>
        ${meme.image}
    </video:thumbnail_loc>
    <video:title>
        ${meme.title}
    </video:title>
    ${
      meme.caption
        ? `    <video:description>
        ${meme.caption}
    </video:description>`
        : ""
    }
    <video:player_loc>
        ${prefix}/${meme.url}
    </video:player_loc>
  </video:video>`;
    }

    return;
    `  <url>
    <loc>${prefix}/${meme.url}/</loc>
  </url>`;
  })
  .join("\n")}
</urlset>`;

const outputPath = path.join(__dirname, "..", "out", "sitemap.xml");
const outputDir = path.dirname(outputPath);

fs.writeFileSync(outputPath, sitemap, "utf-8");
console.log(`✓ Generated sitemap.xml (${memes.length} items)`);
