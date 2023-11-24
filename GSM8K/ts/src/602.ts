import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/602.json')) {
        console.log("Skipping 602")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A plane travels {{x1}} miles in {{x2}} hours. At the same rate, how many additional hours would it take to travel an additional {{x3}} miles?', [], [{'input': {'x1': 1200, 'x2': 3, 'x3': 2000}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1200, 'x2': 3, 'x3': 2000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 602,
        "question": 'A plane travels 1200 miles in 3 hours. At the same rate, how many additional hours would it take to travel an additional 2000 miles?',
        "answer": 5,
        "examples": [{'input': {'x1': 1200, 'x2': 3, 'x3': 2000}, 'output': 5}],
        });
    fs.writeFileSync('json/602.json', json);
}
doit();
