import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/328.json')) {
        console.log("Skipping 328")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The cell-phone recharges at the rate of {{x1}} percentage-point of charge per {{x2}} minutes. Now, the phone is at 60% charged. How long will it take to fully charge, in hours?', [], [{'input': {'x1': 1, 'x2': 3}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 328,
        "question": 'The cell-phone recharges at the rate of 1 percentage-point of charge per 3 minutes. Now, the phone is at 60% charged. How long will it take to fully charge, in hours?',
        "answer": 2,
        "examples": [{'input': {'x1': 1, 'x2': 3}, 'output': 2}],
        });
    fs.writeFileSync('json/328.json', json);
}
doit();
