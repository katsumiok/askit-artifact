import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/637.json')) {
        console.log("Skipping 637")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Reggie, Lynn, and Paisley ran together. Paisley ran {{x1}} miles. Reggie ran {{x2}} times what Paisley ran and {{x3}} miles farther than Lynn. How many miles did Lynn run?', [], [{'input': {'x1': 4, 'x2': 5, 'x3': 3}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 637,
        "question": 'Reggie, Lynn, and Paisley ran together. Paisley ran 4 miles. Reggie ran 5 times what Paisley ran and 3 miles farther than Lynn. How many miles did Lynn run?',
        "answer": 17,
        "examples": [{'input': {'x1': 4, 'x2': 5, 'x3': 3}, 'output': 17}],
        });
    fs.writeFileSync('json/637.json', json);
}
doit();
