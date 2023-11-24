import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/665.json')) {
        console.log("Skipping 665")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Out of the {{x1}} teachers on the school basketball court, 60% are history teachers. If the rest of the teachers on the court are math teachers, and each teacher sleeps for {{x2}} hours a day, calculate the total time the math teachers collectively spend sleeping in one day.', [], [{'input': {'x1': 150, 'x2': 6}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 6});
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
        "id": 665,
        "question": 'Out of the 150 teachers on the school basketball court, 60% are history teachers. If the rest of the teachers on the court are math teachers, and each teacher sleeps for 6 hours a day, calculate the total time the math teachers collectively spend sleeping in one day.',
        "answer": 360,
        "examples": [{'input': {'x1': 150, 'x2': 6}, 'output': 360}],
        });
    fs.writeFileSync('json2/665.json', json);
}
doit();
