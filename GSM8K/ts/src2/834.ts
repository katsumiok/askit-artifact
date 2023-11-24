import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/834.json')) {
        console.log("Skipping 834")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mason is on his bike journey at a rate of {{x1}} miles per hour. He travels for {{x2}} hours, takes some rest, and then goes on for another {{x3}} hours. How many miles has he traveled in total?', [], [{'input': {'x1': 8, 'x2': 4, 'x3': 6}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 834,
        "question": 'Mason is on his bike journey at a rate of 8 miles per hour. He travels for 4 hours, takes some rest, and then goes on for another 6 hours. How many miles has he traveled in total?',
        "answer": 80,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 6}, 'output': 80}],
        });
    fs.writeFileSync('json2/834.json', json);
}
doit();
