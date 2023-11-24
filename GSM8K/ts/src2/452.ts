import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/452.json')) {
        console.log("Skipping 452")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("A car is on a road trip and drives {{x1}} mph for {{x2}} hours, and then {{x3}} mph for {{x4}} hour. What is the car's average speed in mph during this trip?", [], [{'input': {'x1': 60, 'x2': 2, 'x3': 30, 'x4': 1}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 2, 'x3': 30, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 452,
        "question": "A car is on a road trip and drives 60 mph for 2 hours, and then 30 mph for 1 hour. What is the car's average speed in mph during this trip?",
        "answer": 50,
        "examples": [{'input': {'x1': 60, 'x2': 2, 'x3': 30, 'x4': 1}, 'output': 50}],
        });
    fs.writeFileSync('json2/452.json', json);
}
doit();
