import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/60.json')) {
        console.log("Skipping 60")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A basket contains {{x1}} oranges among which {{x2}} is bad, 20% are unripe, {{x3}} are sour and the rest are good. How many oranges are good?', [], [{'input': {'x1': 25, 'x2': 1, 'x3': 2}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 1, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 60,
        "question": 'A basket contains 25 oranges among which 1 is bad, 20% are unripe, 2 are sour and the rest are good. How many oranges are good?',
        "answer": 17,
        "examples": [{'input': {'x1': 25, 'x2': 1, 'x3': 2}, 'output': 17}],
        });
    fs.writeFileSync('json2/60.json', json);
}
doit();
