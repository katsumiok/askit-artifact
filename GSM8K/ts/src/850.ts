import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/850.json')) {
        console.log("Skipping 850")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mr. Smith has two farms, Farm X and Farm Y. He has {{x1}} goats in Farm X and {{x2}} goats in Farm Y. He sold {{x3}} goats from Farm X and twice as many goats from Farm Y. How many goats are left in the two farms altogether?', [], [{'input': {'x1': 55, 'x2': 45, 'x3': 10}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 55, 'x2': 45, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 850,
        "question": 'Mr. Smith has two farms, Farm X and Farm Y. He has 55 goats in Farm X and 45 goats in Farm Y. He sold 10 goats from Farm X and twice as many goats from Farm Y. How many goats are left in the two farms altogether?',
        "answer": 70,
        "examples": [{'input': {'x1': 55, 'x2': 45, 'x3': 10}, 'output': 70}],
        });
    fs.writeFileSync('json/850.json', json);
}
doit();
