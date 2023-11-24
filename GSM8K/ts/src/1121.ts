import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1121.json')) {
        console.log("Skipping 1121")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In {{x1}} days, Sofie will walk twice as far as Brian. If Sofie plans to walk {{x2}} miles every day, how many miles will Brian walk in seven days?', [], [{'input': {'x1': 7, 'x2': 10}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1121,
        "question": 'In 7 days, Sofie will walk twice as far as Brian. If Sofie plans to walk 10 miles every day, how many miles will Brian walk in seven days?',
        "answer": 35,
        "examples": [{'input': {'x1': 7, 'x2': 10}, 'output': 35}],
        });
    fs.writeFileSync('json/1121.json', json);
}
doit();
