#!/bin/sh

export ASKIT_MODEL=gpt-3.5-turbo-16k

npm install

# Transpile
npx tsc
# Generate code until it finishes successfully
until npx askgen src/askit/top50def.ts.jsonl; do
    echo "Process crashed with exit code $?.  Respawning.." >&2
    sleep 1
done
# Transpile the generated code
npx tsc
# Run codable tasks
node dist/top50def.js
