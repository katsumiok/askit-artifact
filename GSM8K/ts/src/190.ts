import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/190.json')) {
        console.log("Skipping 190")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John collects peaches for {{x1}} hours.  He can collect {{x2}} peaches a minute.  How many peaches does he collect?', [], [{'input': {'x1': 3, 'x2': 2}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 190,
        "question": 'John collects peaches for 3 hours.  He can collect 2 peaches a minute.  How many peaches does he collect?',
        "answer": 360,
        "examples": [{'input': {'x1': 3, 'x2': 2}, 'output': 360}],
        });
    fs.writeFileSync('json/190.json', json);
}
doit();
