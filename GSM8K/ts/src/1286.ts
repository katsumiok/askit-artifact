import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1286.json')) {
        console.log("Skipping 1286")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('James likes to check the coin return of the vending machine for change. One day he finds a quarter, two nickels, and {{x1}} dimes. How much money in cents does James have?', [], [{'input': {'x1': 7}, 'output': 105}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 105;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1286,
        "question": 'James likes to check the coin return of the vending machine for change. One day he finds a quarter, two nickels, and 7 dimes. How much money in cents does James have?',
        "answer": 105,
        "examples": [{'input': {'x1': 7}, 'output': 105}],
        });
    fs.writeFileSync('json/1286.json', json);
}
doit();
