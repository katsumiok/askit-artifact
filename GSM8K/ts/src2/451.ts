import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/451.json')) {
        console.log("Skipping 451")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('On a certain day, the total cost of filling up {{x1}} helium balloons was $900. Two days later, the cost of filling each balloon was increased by $20. How much did Bentley pay to fill {{x2}} balloons if he went to fill them after the price increase?', [], [{'input': {'x1': 20, 'x2': 170}, 'output': 11050}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 170});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11050;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 451,
        "question": 'On a certain day, the total cost of filling up 20 helium balloons was $900. Two days later, the cost of filling each balloon was increased by $20. How much did Bentley pay to fill 170 balloons if he went to fill them after the price increase?',
        "answer": 11050,
        "examples": [{'input': {'x1': 20, 'x2': 170}, 'output': 11050}],
        });
    fs.writeFileSync('json2/451.json', json);
}
doit();
