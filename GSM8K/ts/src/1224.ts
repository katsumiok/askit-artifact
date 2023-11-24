import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1224.json')) {
        console.log("Skipping 1224")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('It rained {{x1}} inches on Monday and is expected to rain {{x2}} more inch than twice of Monday’s total on Tuesday. How many inches of rain will there be on Tuesday?', [], [{'input': {'x1': 2, 'x2': 1}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 1});
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
        "id": 1224,
        "question": 'It rained 2 inches on Monday and is expected to rain 1 more inch than twice of Monday’s total on Tuesday. How many inches of rain will there be on Tuesday?',
        "answer": 5,
        "examples": [{'input': {'x1': 2, 'x2': 1}, 'output': 5}],
        });
    fs.writeFileSync('json/1224.json', json);
}
doit();
