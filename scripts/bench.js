import fs from "node:fs";
import path from "node:path";

import { parse } from "@babel/parser";
import { parseModule } from "meriyah";

function readTestFile() {
  const file = path.join(process.cwd(), "tests", "test.js");
  return fs.readFileSync(file, "utf8");
}

function runBabel() {
  const source = readTestFile();
  parse(source, {
    sourceType: "module",
  });
}

function runMeriyah() {
  const source = readTestFile();
  parseModule(source);
}

function run() {
  const args = process.argv.slice(2);
  const [parser] = args;
  if (parser == "babel") {
    for (let i = 0; i < 100; i++) {
      runBabel();
    }
  } else if (parser == "meriyah") {
    for (let i = 0; i < 100; i++) {
      runMeriyah();
    }
  }
}

run();
