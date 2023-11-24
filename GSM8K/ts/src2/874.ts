import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/874.json')) {
        console.log("Skipping 874")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ella earned $33 for {{x1}} hours of dog walking. If she continues to walk dogs at the same rate, how much would she earn after {{x2}} hours?', [], [{'input': {'x1': 3, 'x2': 12}, 'output': 132}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 132;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 874,
        "question": 'Ella earned $33 for 3 hours of dog walking. If she continues to walk dogs at the same rate, how much would she earn after 12 hours?',
        "answer": 132,
        "examples": [{'input': {'x1': 3, 'x2': 12}, 'output': 132}],
        });
    fs.writeFileSync('json2/874.json', json);
}
doit();
