import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1115.json')) {
        console.log("Skipping 1115")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Anna is trying to buy books for her local library. She had a budget of $16, and she has already spent $4. She also bought {{x1}} books today, and both books cost her the same amount of money. If Anna has $2 left in her budget, how much did each of the books cost?', [], [{'input': {'x1': 2}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 1115,
        "question": 'Anna is trying to buy books for her local library. She had a budget of $16, and she has already spent $4. She also bought 2 books today, and both books cost her the same amount of money. If Anna has $2 left in her budget, how much did each of the books cost?',
        "answer": 5,
        "examples": [{'input': {'x1': 2}, 'output': 5}],
        });
    fs.writeFileSync('json/1115.json', json);
}
doit();
