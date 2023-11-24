import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1054.json')) {
        console.log("Skipping 1054")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('My kitchen floor has a total area of {{x1}} SqFt. I want to install new square floor tiles that cost $12 each, and each tile side is 1ft in length. How much will it cost me to renovate my kitchen floor?', [], [{'input': {'x1': 200}, 'output': 2400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1054,
        "question": 'My kitchen floor has a total area of 200 SqFt. I want to install new square floor tiles that cost $12 each, and each tile side is 1ft in length. How much will it cost me to renovate my kitchen floor?',
        "answer": 2400,
        "examples": [{'input': {'x1': 200}, 'output': 2400}],
        });
    fs.writeFileSync('json/1054.json', json);
}
doit();
