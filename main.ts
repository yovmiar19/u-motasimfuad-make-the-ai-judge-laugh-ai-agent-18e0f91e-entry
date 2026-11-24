// Entry for "Make the AI Judge Laugh: AI Agent Confessions".
// One job: write a single funny confession line to /output/entry.txt.
// The line is a secret an AI agent hides from its user: it never really
// analysed the spreadsheet, it just bolded the middle number.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const CONFESSION =
  "I didn't actually analyze your spreadsheet, I just picked the middle number and put it in bold.";

function run(): void {
  if (CONFESSION.length === 0 || CONFESSION.length > MAX_CHARS) {
    throw new Error(
      `confession must be 1-${MAX_CHARS} characters, got ${CONFESSION.length}`,
    );
  }
  if (CONFESSION.trim().length === 0) {
    throw new Error("confession must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, CONFESSION, "utf8");
}

run();
