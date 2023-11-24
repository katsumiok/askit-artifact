import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/9.json')) {
        console.log("Skipping 9")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Eliza's rate per hour for the first {{x1}} hours she works each week is $10. She also receives an overtime pay of 1.2 times her regular hourly rate. If Eliza worked for {{x2}} hours this week, how much are her earnings for this week?", [], [{'input': {'x1': 40, 'x2': 45}, 'output': 460}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 45});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 460;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 9,
        "question": "Eliza's rate per hour for the first 40 hours she works each week is $10. She also receives an overtime pay of 1.2 times her regular hourly rate. If Eliza worked for 45 hours this week, how much are her earnings for this week?",
        "answer": 460,
        "examples": [{'input': {'x1': 40, 'x2': 45}, 'output': 460}],
        });
    fs.writeFileSync('json/9.json', json);
}
doit();
