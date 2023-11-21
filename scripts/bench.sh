#!/usr/bin/env bash

if [ ! -f ./tests/test.js ]; then
    curl -o ./tests/test.js https://raw.githubusercontent.com/prettier/prettier/main/src/language-js/utils/index.js
fi

args=()
args+=("node ./scripts/bench.js babel")
args+=("node ./scripts/bench.js meriyah")

hyperfine --warmup 3 "${args[@]}" --show-output
