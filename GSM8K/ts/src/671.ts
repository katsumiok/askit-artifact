import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/671.json')) {
        console.log("Skipping 671")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Adam went to a store to buy some sweets. He bought {{x1}} candies of type A and {{x2}} candies of type B. One candy of type A costs $0.5, and one candy of type B costs $0.75. How much change did Adam get, if he paid the cashier $15?', [], [{'input': {'x1': 7, 'x2': 10}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 671,
        "question": 'Adam went to a store to buy some sweets. He bought 7 candies of type A and 10 candies of type B. One candy of type A costs $0.5, and one candy of type B costs $0.75. How much change did Adam get, if he paid the cashier $15?',
        "answer": 4,
        "examples": [{'input': {'x1': 7, 'x2': 10}, 'output': 4}],
        });
    fs.writeFileSync('json/671.json', json);
}
doit();
