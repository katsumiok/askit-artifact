import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/929.json')) {
        console.log("Skipping 929")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A bus travels {{x1}} miles per hour for {{x2}} hours. A car travels {{x3}} miles per hour for {{x4}} hours. How much farther did the bus go than the car, in miles?', [], [{'input': {'x1': 60, 'x2': 5, 'x3': 30, 'x4': 8}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 5, 'x3': 30, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 929,
        "question": 'A bus travels 60 miles per hour for 5 hours. A car travels 30 miles per hour for 8 hours. How much farther did the bus go than the car, in miles?',
        "answer": 60,
        "examples": [{'input': {'x1': 60, 'x2': 5, 'x3': 30, 'x4': 8}, 'output': 60}],
        });
    fs.writeFileSync('json2/929.json', json);
}
doit();
