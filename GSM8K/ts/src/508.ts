import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/508.json')) {
        console.log("Skipping 508")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The farm has {{x1}} cows and the zoo has {{x2}} sheep.  The zoo has twice as many cows as the farm does.  The farm has half as many sheep as the zoo does.  How many animals do the farm and zoo have combined?', [], [{'input': {'x1': 30, 'x2': 20}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 20});
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
        "id": 508,
        "question": 'The farm has 30 cows and the zoo has 20 sheep.  The zoo has twice as many cows as the farm does.  The farm has half as many sheep as the zoo does.  How many animals do the farm and zoo have combined?',
        "answer": 120,
        "examples": [{'input': {'x1': 30, 'x2': 20}, 'output': 120}],
        });
    fs.writeFileSync('json/508.json', json);
}
doit();
