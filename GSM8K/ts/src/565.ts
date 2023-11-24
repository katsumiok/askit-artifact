import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/565.json')) {
        console.log("Skipping 565")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Cody and Trevor had {{x1}} sandwiches. Cody ate a third of the sandwiches, and Trevor ate a quarter of the sandwiches. How many sandwiches are left?', [], [{'input': {'x1': 12}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
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
        "id": 565,
        "question": 'Cody and Trevor had 12 sandwiches. Cody ate a third of the sandwiches, and Trevor ate a quarter of the sandwiches. How many sandwiches are left?',
        "answer": 5,
        "examples": [{'input': {'x1': 12}, 'output': 5}],
        });
    fs.writeFileSync('json/565.json', json);
}
doit();
