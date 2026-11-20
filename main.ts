import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Copy VIDEO.json from the repository into the grader's output directory.
// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to ./out.
// The house reads the video through the YouTube Data API from the URL in
// VIDEO.json; nothing this program writes about the video counts.
// Before copying, validate that VIDEO.json parses and carries a Shorts URL,
// so a broken or placeholder URL fails loudly instead of being submitted.
const videoPath = new URL("./VIDEO.json", import.meta.url);
let videoUrl: string;
try {
  const parsed: unknown = JSON.parse(readFileSync(videoPath, "utf8"));
  const url =
    typeof parsed === "object" && parsed !== null
      ? (parsed as { url?: unknown }).url
      : undefined;
  if (typeof url !== "string") {
    throw new Error('VIDEO.json has no "url" string field');
  }
  if (
    !url.startsWith("https://www.youtube.com/shorts/") &&
    !url.startsWith("https://youtube.com/shorts/")
  ) {
    throw new Error(`VIDEO.json url is not a YouTube Shorts URL: ${url}`);
  }
  videoUrl = url;
} catch (err) {
  console.error(
    `error: invalid VIDEO.json: ${err instanceof Error ? err.message : err}`,
  );
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));
console.log(`copied VIDEO.json (${videoUrl}) to ${join(outDir, "VIDEO.json")}`);
