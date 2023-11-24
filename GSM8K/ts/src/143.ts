import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/143.json')) {
        console.log("Skipping 143")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('John buys milk for {{x1}} dollars, eggs for {{x2}} dollars, light bulbs for {{x3}} dollars, cups for {{x4}} dollars, and roach traps for {{x5}} dollars.  If there is a 10% tax on all nonfood items how much did everything cost.', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 3, 'x4': 3, 'x5': 4}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 3, 'x4': 3, 'x5': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 143,
        "question": 'John buys milk for 2 dollars, eggs for 3 dollars, light bulbs for 3 dollars, cups for 3 dollars, and roach traps for 4 dollars.  If there is a 10% tax on all nonfood items how much did everything cost.',
        "answer": 16,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 3, 'x4': 3, 'x5': 4}, 'output': 16}],
        });
    fs.writeFileSync('json/143.json', json);
}
doit();
