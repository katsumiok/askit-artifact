import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/50.json')) {
        console.log("Skipping 50")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lloyd has an egg farm. His chickens produce {{x1}} eggs per day and he sells them for $2 per dozen. How much does Lloyd make on eggs per week?', [], [{'input': {'x1': 252}, 'output': 294}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 252});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 294;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 50,
        "question": 'Lloyd has an egg farm. His chickens produce 252 eggs per day and he sells them for $2 per dozen. How much does Lloyd make on eggs per week?',
        "answer": 294,
        "examples": [{'input': {'x1': 252}, 'output': 294}],
        });
    fs.writeFileSync('json/50.json', json);
}
doit();
