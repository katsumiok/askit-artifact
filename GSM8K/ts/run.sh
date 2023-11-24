#!/bin/sh

export ASKIT_MODEL=gpt-4

npm install
npx tsc
ls src2/askit/*.ts.jsonl | xargs -I{} npx askgen {}
npx tsc
ls dist/src/*.js | xargs -I{} node {}
ls dist/src2/*.js | xargs -I{} node {}
