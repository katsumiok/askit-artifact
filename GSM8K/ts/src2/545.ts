import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/545.json')) {
        console.log("Skipping 545")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jeff’s work is {{x1}} miles away.  He walks there and back each day he works.  How many miles does he walk if he has to work {{x2}} times a week?', [], [{'input': {'x1': 3, 'x2': 5}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 545,
        "question": 'Jeff’s work is 3 miles away.  He walks there and back each day he works.  How many miles does he walk if he has to work 5 times a week?',
        "answer": 30,
        "examples": [{'input': {'x1': 3, 'x2': 5}, 'output': 30}],
        });
    fs.writeFileSync('json2/545.json', json);
}
doit();
