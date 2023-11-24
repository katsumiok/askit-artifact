import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/51.json')) {
        console.log("Skipping 51")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Tom's ship can travel at {{x1}} miles per hour.  He is sailing from {{x2}} to {{x3}} PM.  He then travels back at a rate of {{x4}} mph.  How long does it take him to get back?", [], [{'input': {'x1': 10, 'x2': 1, 'x3': 4, 'x4': 6}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 1, 'x3': 4, 'x4': 6});
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
        "id": 51,
        "question": "Tom's ship can travel at 10 miles per hour.  He is sailing from 1 to 4 PM.  He then travels back at a rate of 6 mph.  How long does it take him to get back?",
        "answer": 5,
        "examples": [{'input': {'x1': 10, 'x2': 1, 'x3': 4, 'x4': 6}, 'output': 5}],
        });
    fs.writeFileSync('json/51.json', json);
}
doit();
