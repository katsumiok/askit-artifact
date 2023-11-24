import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/633.json')) {
        console.log("Skipping 633")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bob is {{x1}} miles ahead of Tom, driving {{x2}} miles per hour. Tom is driving {{x3}} miles per hour. How long will it take Tom to catch up with Bob?', [], [{'input': {'x1': 75, 'x2': 55, 'x3': 70}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 75, 'x2': 55, 'x3': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 633,
        "question": 'Bob is 75 miles ahead of Tom, driving 55 miles per hour. Tom is driving 70 miles per hour. How long will it take Tom to catch up with Bob?',
        "answer": 5,
        "examples": [{'input': {'x1': 75, 'x2': 55, 'x3': 70}, 'output': 5}],
        });
    fs.writeFileSync('json2/633.json', json);
}
doit();
