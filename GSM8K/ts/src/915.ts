import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/915.json')) {
        console.log("Skipping 915")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Bruce works for {{x1}} hours on Tuesday. On Wednesday he works twice the time he works on Tuesday. On Thursday he works {{x2}} hours less than the time he works on Wednesday. How many hours does Bruce work in all these three days?', [], [{'input': {'x1': 5, 'x2': 2}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 915,
        "question": 'Bruce works for 5 hours on Tuesday. On Wednesday he works twice the time he works on Tuesday. On Thursday he works 2 hours less than the time he works on Wednesday. How many hours does Bruce work in all these three days?',
        "answer": 23,
        "examples": [{'input': {'x1': 5, 'x2': 2}, 'output': 23}],
        });
    fs.writeFileSync('json/915.json', json);
}
doit();
