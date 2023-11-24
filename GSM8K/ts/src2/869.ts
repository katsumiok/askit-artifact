import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/869.json')) {
        console.log("Skipping 869")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('An electronics seller bought {{x1}} phones for $700 each and gives the seller $4000 in dollar bills. How much will the seller give back in change?', [], [{'input': {'x1': 5}, 'output': 500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 869,
        "question": 'An electronics seller bought 5 phones for $700 each and gives the seller $4000 in dollar bills. How much will the seller give back in change?',
        "answer": 500,
        "examples": [{'input': {'x1': 5}, 'output': 500}],
        });
    fs.writeFileSync('json2/869.json', json);
}
doit();
