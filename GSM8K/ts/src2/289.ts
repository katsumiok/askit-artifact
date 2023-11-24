import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/289.json')) {
        console.log("Skipping 289")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A car in the fast lane is traveling at {{x1}} miles/hour. A car in the slow lane is traveling at half that speed. If the car in the fast lane traveled for a total of {{x2}} miles, calculate the time the car in the slow lane took to cover the same distance?', [], [{'input': {'x1': 60, 'x2': 480}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 480});
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
        "id": 289,
        "question": 'A car in the fast lane is traveling at 60 miles/hour. A car in the slow lane is traveling at half that speed. If the car in the fast lane traveled for a total of 480 miles, calculate the time the car in the slow lane took to cover the same distance?',
        "answer": 16,
        "examples": [{'input': {'x1': 60, 'x2': 480}, 'output': 16}],
        });
    fs.writeFileSync('json2/289.json', json);
}
doit();
