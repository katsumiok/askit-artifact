import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/646.json')) {
        console.log("Skipping 646")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Alisa biked {{x1}} miles per hour for 4.5 hours. Stanley biked at {{x2}} miles per hour for 2.5 hours. How many miles did Alisa and Stanley bike in total?', [], [{'input': {'x1': 12, 'x2': 10}, 'output': 79}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 79;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 646,
        "question": 'Alisa biked 12 miles per hour for 4.5 hours. Stanley biked at 10 miles per hour for 2.5 hours. How many miles did Alisa and Stanley bike in total?',
        "answer": 79,
        "examples": [{'input': {'x1': 12, 'x2': 10}, 'output': 79}],
        });
    fs.writeFileSync('json2/646.json', json);
}
doit();
