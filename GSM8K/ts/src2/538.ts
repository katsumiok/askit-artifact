import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/538.json')) {
        console.log("Skipping 538")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Emma can make and upload {{x1}} vlogs per month. But she was only able to make {{x2}} vlogs for the first week, {{x3}} vlogs for the second week, and {{x4}} vlogs for the third week. How many vlogs should she do to complete the {{x5}} vlogs per month?', [], [{'input': {'x1': 72, 'x2': 18, 'x3': 21, 'x4': 15, 'x5': 72}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 72, 'x2': 18, 'x3': 21, 'x4': 15, 'x5': 72});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 538,
        "question": 'Emma can make and upload 72 vlogs per month. But she was only able to make 18 vlogs for the first week, 21 vlogs for the second week, and 15 vlogs for the third week. How many vlogs should she do to complete the 72 vlogs per month?',
        "answer": 18,
        "examples": [{'input': {'x1': 72, 'x2': 18, 'x3': 21, 'x4': 15, 'x5': 72}, 'output': 18}],
        });
    fs.writeFileSync('json2/538.json', json);
}
doit();
