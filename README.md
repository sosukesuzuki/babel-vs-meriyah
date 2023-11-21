# `@babel/parser` vs `mariyah`

My goal is for @babel/parser to be as fast as meriyah.

## Requirements

- [hyperfine](https://github.com/sharkdp/hyperfine)

## Current Results

`@babel/parser` 7.23.4 vs `meriyah` 4.3.8

```
Benchmark 1: node ./scripts/bench.js babel
  Time (mean ± σ):     209.3 ms ±   5.3 ms    [User: 359.4 ms, System: 23.1 ms]
  Range (min … max):   202.7 ms … 220.2 ms    13 runs

Benchmark 2: node ./scripts/bench.js meriyah
  Time (mean ± σ):     127.5 ms ±   3.4 ms    [User: 196.1 ms, System: 14.1 ms]
  Range (min … max):   117.8 ms … 132.6 ms    22 runs

Summary
  'node ./scripts/bench.js meriyah' ran
    1.64 ± 0.06 times faster than 'node ./scripts/bench.js babel'
```
