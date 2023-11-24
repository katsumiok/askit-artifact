import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/741.json')) {
        console.log("Skipping 741")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jeremy saw {{x1}} birds in their backyard and threw a stone at them, scaring away 1/3 of that number. A few minutes later, {{x2}} more birds joined the fearless birds. How many birds are now in the backyard?', [], [{'input': {'x1': 12, 'x2': 20}, 'output': 28}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 28;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 741,
        "question": 'Jeremy saw 12 birds in their backyard and threw a stone at them, scaring away 1/3 of that number. A few minutes later, 20 more birds joined the fearless birds. How many birds are now in the backyard?',
        "answer": 28,
        "examples": [{'input': {'x1': 12, 'x2': 20}, 'output': 28}],
        });
    fs.writeFileSync('json2/741.json', json);
}
doit();
