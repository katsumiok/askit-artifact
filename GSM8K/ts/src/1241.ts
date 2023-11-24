import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1241.json')) {
        console.log("Skipping 1241")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Rose bought five dozens of eggs for $2.40 a dozen. She will sell it for $1 for {{x1}} eggs. How much will be Rose's profit?", [], [{'input': {'x1': 3}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1241,
        "question": "Rose bought five dozens of eggs for $2.40 a dozen. She will sell it for $1 for 3 eggs. How much will be Rose's profit?",
        "answer": 8,
        "examples": [{'input': {'x1': 3}, 'output': 8}],
        });
    fs.writeFileSync('json/1241.json', json);
}
doit();
