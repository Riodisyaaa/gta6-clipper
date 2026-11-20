import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy VIDEO.json from the repository into the grader's output directory.
// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to ./out.
// The house reads the video through the YouTube Data API from the URL in
// VIDEO.json; nothing this program writes about the video counts.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./VIDEO.json", import.meta.url), join(outDir, "VIDEO.json"));
