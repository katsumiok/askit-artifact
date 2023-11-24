import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/82.json')) {
        console.log("Skipping 82")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Grace weighs {{x1}} pounds. Alex weighs {{x2}} pounds less than {{x3}} times what Grace weighs. What are their combined weights in pounds?', [], [{'input': {'x1': 125, 'x2': 2, 'x3': 4}, 'output': 623}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 125, 'x2': 2, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 623;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 82,
        "question": 'Grace weighs 125 pounds. Alex weighs 2 pounds less than 4 times what Grace weighs. What are their combined weights in pounds?',
        "answer": 623,
        "examples": [{'input': {'x1': 125, 'x2': 2, 'x3': 4}, 'output': 623}],
        });
    fs.writeFileSync('json/82.json', json);
}
doit();
