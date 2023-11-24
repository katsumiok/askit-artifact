import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/402.json')) {
        console.log("Skipping 402")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mark is making a quadruple batch of brownies. The normal recipe calls for {{x1}} cups of flour and {{x2}} cup milk. If flour is sold in 2-cup bags and milk is sold in 2-cup bottles, how many more bags of flour than bottles of milk does Mark have to buy?', [], [{'input': {'x1': 3, 'x2': 1}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 1});
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
        "id": 402,
        "question": 'Mark is making a quadruple batch of brownies. The normal recipe calls for 3 cups of flour and 1 cup milk. If flour is sold in 2-cup bags and milk is sold in 2-cup bottles, how many more bags of flour than bottles of milk does Mark have to buy?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 1}, 'output': 4}],
        });
    fs.writeFileSync('json/402.json', json);
}
doit();
