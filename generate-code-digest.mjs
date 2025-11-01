// generate-code-digest.mjs
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const extensions = [".ts", ".tsx", ".json", ".css", ".mjs"];
const output = [];

async function buildTree(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  let tree = "";
  const filtered = entries
    .filter((entry) => {
      if (entry.isDirectory()) return true;
      return extensions.some((ext) => entry.name.endsWith(ext));
    })
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  for (let i = 0; i < filtered.length; i++) {
    const entry = filtered[i];
    const isLast = i === filtered.length - 1;
    const currentPrefix = isLast ? "└── " : "├── ";
    const nextPrefix = isLast ? "    " : "│   ";

    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      tree += `${prefix}${currentPrefix}${entry.name}/\n`;
      tree += await buildTree(fullPath, prefix + nextPrefix);
    } else {
      tree += `${prefix}${currentPrefix}${entry.name}\n`;
    }
  }
  return tree;
}

async function walk(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      await walk(fullPath);
    } else if (extensions.some((ext) => file.name.endsWith(ext))) {
      output.push(fullPath);
    }
  }
}

async function main() {
  await walk("src");
  output.sort();

  const tree = await buildTree("src");

  let content = `# Project Digest: rahal-tourism-site\n\n`;
  content += `This digest contains all relevant source files for AI analysis.\n`;
  content += `Generated on: ${new Date().toISOString()}\n\n`;

  content += `## Directory Structure (Relevant Files Only)\n\n`;
  content += "```\n";
  content += "src/\n";
  content += tree;
  content += "```\n\n";

  content += `## File Contents\n\n`;

  for (const file of output) {
    const data = await readFile(file, "utf8");
    content += `============================================================\n`;
    content += `FILE: ${file}\n`;
    content += `============================================================\n`;
    content += data + "\n\n";
  }

  await writeFile("code-full.txt", content, "utf8");
  console.log(
    "✅ code-full.txt generated successfully with enhanced structure!"
  );
}

main().catch(console.error);
