import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/387.json')) {
        console.log("Skipping 387")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('An eraser costs $2 and a pencil costs $3. How much do {{x1}} erasers and {{x2}} pencils cost?', [], [{'input': {'x1': 6, 'x2': 8}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 387,
        "question": 'An eraser costs $2 and a pencil costs $3. How much do 6 erasers and 8 pencils cost?',
        "answer": 36,
        "examples": [{'input': {'x1': 6, 'x2': 8}, 'output': 36}],
        });
    fs.writeFileSync('json2/387.json', json);
}
doit();
