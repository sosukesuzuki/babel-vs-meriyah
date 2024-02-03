import fs from "node:fs";
import path from "node:path";

import * as prettier from "prettier";

function readTestFile() {
  const file = path.join(process.cwd(), "tests", "test.js");
  return fs.readFileSync(file, "utf8");
}

async function runBabel() {
  const source = readTestFile();
  await prettier.format(source, { parser: "babel-ts" });
}

async function runMeriyah() {
  const source = readTestFile();
  await prettier.format(source, { parser: "meriyah" });
}

async function runTypeScript() {
  const source = readTestFile();
  await prettier.format(source, { parser: "typescript" });
}

async function run() {
  const args = process.argv.slice(2);
  const [parser] = args;
  if (parser == "babel-ts") {
    for (let i = 0; i < 100; i++) {
      await runBabel();
    }
  } else if (parser == "meriyah") {
    for (let i = 0; i < 100; i++) {
      await runMeriyah();
    }
  } else if (parser == "typescript") {
    for (let i = 0; i < 100; i++) {
      await runTypeScript();
    }
  }
}

await run();
