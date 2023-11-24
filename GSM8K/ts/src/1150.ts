import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1150.json')) {
        console.log("Skipping 1150")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Patricia has {{x1}} roses. She gave {{x2}} roses to her mother. She bought {{x3}} more roses.  How many roses did she have now?', [], [{'input': {'x1': 30, 'x2': 24, 'x3': 15}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 24, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1150,
        "question": 'Patricia has 30 roses. She gave 24 roses to her mother. She bought 15 more roses.  How many roses did she have now?',
        "answer": 21,
        "examples": [{'input': {'x1': 30, 'x2': 24, 'x3': 15}, 'output': 21}],
        });
    fs.writeFileSync('json/1150.json', json);
}
doit();
