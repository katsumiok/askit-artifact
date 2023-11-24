import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/549.json')) {
        console.log("Skipping 549")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Jonathan was sad to learn he needed {{x1}} more toys than he already had to have enough toys to make a sorted play set five times larger than James's play set, which had {{x2}} toys. How many toys does Jonathan currently have?", [], [{'input': {'x1': 2, 'x2': 80}, 'output': 398}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 398;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 549,
        "question": "Jonathan was sad to learn he needed 2 more toys than he already had to have enough toys to make a sorted play set five times larger than James's play set, which had 80 toys. How many toys does Jonathan currently have?",
        "answer": 398,
        "examples": [{'input': {'x1': 2, 'x2': 80}, 'output': 398}],
        });
    fs.writeFileSync('json/549.json', json);
}
doit();
