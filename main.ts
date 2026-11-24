import fs from "node:fs";
import path from "node:path";

// Entry text for make.fun bounty: Funniest Time Machine Warning Label (97 characters)
const TIME_MACHINE_WARNING_ENTRY =
  "WARNING: Do not shake hands with your past self; company health insurance only covers one of you.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), TIME_MACHINE_WARNING_ENTRY + "\n", "utf8");
