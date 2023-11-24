import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/48.json')) {
        console.log("Skipping 48")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tracy used a piece of wire {{x1}} feet long to support tomato plants in the garden. The wire was cut into pieces {{x2}} inches long. How many pieces did she obtain?', [], [{'input': {'x1': 4, 'x2': 6}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 48,
        "question": 'Tracy used a piece of wire 4 feet long to support tomato plants in the garden. The wire was cut into pieces 6 inches long. How many pieces did she obtain?',
        "answer": 8,
        "examples": [{'input': {'x1': 4, 'x2': 6}, 'output': 8}],
        });
    fs.writeFileSync('json/48.json', json);
}
doit();
