import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/38.json')) {
        console.log("Skipping 38")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John runs {{x1}} miles a week. He runs {{x2}} days a week.  He runs {{x3}} hours the first day and half as much the other two days he runs.  How fast does he run?', [], [{'input': {'x1': 60, 'x2': 3, 'x3': 3}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 3, 'x3': 3});
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
        "id": 38,
        "question": 'John runs 60 miles a week. He runs 3 days a week.  He runs 3 hours the first day and half as much the other two days he runs.  How fast does he run?',
        "answer": 10,
        "examples": [{'input': {'x1': 60, 'x2': 3, 'x3': 3}, 'output': 10}],
        });
    fs.writeFileSync('json/38.json', json);
}
doit();
