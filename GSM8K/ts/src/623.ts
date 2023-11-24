import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/623.json')) {
        console.log("Skipping 623")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Charmaine will be {{x1}} years old in {{x2}} years. How old will she be {{x3}} years from now?', [], [{'input': {'x1': 16, 'x2': 12, 'x3': 4}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 12, 'x3': 4});
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
        "id": 623,
        "question": 'Charmaine will be 16 years old in 12 years. How old will she be 4 years from now?',
        "answer": 8,
        "examples": [{'input': {'x1': 16, 'x2': 12, 'x3': 4}, 'output': 8}],
        });
    fs.writeFileSync('json/623.json', json);
}
doit();
