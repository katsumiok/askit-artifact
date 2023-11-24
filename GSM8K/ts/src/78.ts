import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/78.json')) {
        console.log("Skipping 78")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Vincent can buy flowers in packages of {{x1}} for $2.50 or in packages of {{x2}} for $1. How much money does he save by buying {{x3}} flowers at the better price?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 18}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 78,
        "question": 'Vincent can buy flowers in packages of 3 for $2.50 or in packages of 2 for $1. How much money does he save by buying 18 flowers at the better price?',
        "answer": 6,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 18}, 'output': 6}],
        });
    fs.writeFileSync('json/78.json', json);
}
doit();
