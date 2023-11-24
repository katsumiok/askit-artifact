import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/816.json')) {
        console.log("Skipping 816")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John goes to the market and buys {{x1}} goats for $500 each and {{x2}} cows for $1500 each.  How much money did he spend?', [], [{'input': {'x1': 3, 'x2': 2}, 'output': 4500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 816,
        "question": 'John goes to the market and buys 3 goats for $500 each and 2 cows for $1500 each.  How much money did he spend?',
        "answer": 4500,
        "examples": [{'input': {'x1': 3, 'x2': 2}, 'output': 4500}],
        });
    fs.writeFileSync('json/816.json', json);
}
doit();
