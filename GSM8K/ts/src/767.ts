import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/767.json')) {
        console.log("Skipping 767")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('To make {{x1}} liter of juice, Sam needs {{x2}} kilograms of oranges. Each kilogram of oranges costs $3. How much money would Sam have to spend to make {{x3}} liters of juice?', [], [{'input': {'x1': 1, 'x2': 5, 'x3': 4}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 5, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 767,
        "question": 'To make 1 liter of juice, Sam needs 5 kilograms of oranges. Each kilogram of oranges costs $3. How much money would Sam have to spend to make 4 liters of juice?',
        "answer": 60,
        "examples": [{'input': {'x1': 1, 'x2': 5, 'x3': 4}, 'output': 60}],
        });
    fs.writeFileSync('json/767.json', json);
}
doit();
