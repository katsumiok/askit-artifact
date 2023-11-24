import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/214.json')) {
        console.log("Skipping 214")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jerry has two pools, both with leaks emptying them out at {{x1}} gallons/minute. {{x2}} minutes ago, the big pool had twice as much water as the small pool. Now the big pool has four times as much water as the small pool. How much water does the small pool have now?', [], [{'input': {'x1': 4, 'x2': 4}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4});
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
        "id": 214,
        "question": 'Jerry has two pools, both with leaks emptying them out at 4 gallons/minute. 4 minutes ago, the big pool had twice as much water as the small pool. Now the big pool has four times as much water as the small pool. How much water does the small pool have now?',
        "answer": 8,
        "examples": [{'input': {'x1': 4, 'x2': 4}, 'output': 8}],
        });
    fs.writeFileSync('json/214.json', json);
}
doit();
