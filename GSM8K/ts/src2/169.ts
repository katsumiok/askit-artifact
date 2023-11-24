import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/169.json')) {
        console.log("Skipping 169")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Pancho walks {{x1}} miles a day. Except on weekends when he walks {{x2}} miles. How many miles does he walk in a week?', [], [{'input': {'x1': 20, 'x2': 10}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 169,
        "question": 'Pancho walks 20 miles a day. Except on weekends when he walks 10 miles. How many miles does he walk in a week?',
        "answer": 120,
        "examples": [{'input': {'x1': 20, 'x2': 10}, 'output': 120}],
        });
    fs.writeFileSync('json2/169.json', json);
}
doit();
