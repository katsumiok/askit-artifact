import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1173.json')) {
        console.log("Skipping 1173")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("A regular box of {{x1}} dishwasher pods costs $12. There's currently a special size box for the same price that has 20% more pods. How many dishwashing cycles with the new box can you run for $1 if you use {{x2}} pod per cycle?", [], [{'input': {'x1': 100, 'x2': 1}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1173,
        "question": "A regular box of 100 dishwasher pods costs $12. There's currently a special size box for the same price that has 20% more pods. How many dishwashing cycles with the new box can you run for $1 if you use 1 pod per cycle?",
        "answer": 10,
        "examples": [{'input': {'x1': 100, 'x2': 1}, 'output': 10}],
        });
    fs.writeFileSync('json/1173.json', json);
}
doit();
