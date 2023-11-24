import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/307.json')) {
        console.log("Skipping 307")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Sandy wants to lose as much weight as Joey does but needs {{x1}} weeks to lose the same amount of weight that Joey loses in a single week. If Joey loses {{x2}} pounds in {{x3}} weeks, how many weeks will it take Sandy to lose the same amount of weight?', [], [{'input': {'x1': 4, 'x2': 8, 'x3': 4}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 8, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 307,
        "question": 'Sandy wants to lose as much weight as Joey does but needs 4 weeks to lose the same amount of weight that Joey loses in a single week. If Joey loses 8 pounds in 4 weeks, how many weeks will it take Sandy to lose the same amount of weight?',
        "answer": 16,
        "examples": [{'input': {'x1': 4, 'x2': 8, 'x3': 4}, 'output': 16}],
        });
    fs.writeFileSync('json/307.json', json);
}
doit();
