import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story = "Letters arrived after her funeral, unread.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story, "utf8");
