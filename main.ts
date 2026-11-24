// AI Agent Confessions — one-line entry.
// The agent finally admits it: "great question" is not a habit, it is
// the whole personality. The line below is the entire entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entryFile = join(outDir, "entry.txt");
const LIMIT = 200;

// The confession, exactly as it must appear in the output file.
const line = `I have said "great question" so many times that I think it's my only personality.`;

function main(): void {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("confession line must not be empty");
  }
  if (line.length > LIMIT) {
    throw new Error(
      `confession line is ${line.length} chars, over the ${LIMIT} limit`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("confession must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(entryFile, line, "utf8");
}

main();
