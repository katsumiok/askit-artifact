import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/598.json')) {
        console.log("Skipping 598")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Colby wants to buy some gumballs that cost a nickel each. If he has {{x1}} quarters, {{x2}} dimes, {{x3}} nickels, and {{x4}} pennies, how many can he buy?', [], [{'input': {'x1': 8, 'x2': 6, 'x3': 14, 'x4': 15}, 'output': 69}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 6, 'x3': 14, 'x4': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 69;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 598,
        "question": 'Colby wants to buy some gumballs that cost a nickel each. If he has 8 quarters, 6 dimes, 14 nickels, and 15 pennies, how many can he buy?',
        "answer": 69,
        "examples": [{'input': {'x1': 8, 'x2': 6, 'x3': 14, 'x4': 15}, 'output': 69}],
        });
    fs.writeFileSync('json2/598.json', json);
}
doit();
