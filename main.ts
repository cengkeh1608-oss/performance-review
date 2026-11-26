import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "He asked me to rate his leadership. I gave him 4/5. He asked what the missing point was. I said: this question.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entry = TEXT.trim();
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${entry.length}`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
