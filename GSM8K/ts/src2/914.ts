import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/914.json')) {
        console.log("Skipping 914")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jon's car needs a tune-up every {{x1}} miles.  He drives {{x2}} miles a day for a {{x3}} day month.  How many tune-ups does he need in that time?", [], [{'input': {'x1': 1000, 'x2': 100, 'x3': 30}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 100, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 914,
        "question": "Jon's car needs a tune-up every 1000 miles.  He drives 100 miles a day for a 30 day month.  How many tune-ups does he need in that time?",
        "answer": 3,
        "examples": [{'input': {'x1': 1000, 'x2': 100, 'x3': 30}, 'output': 3}],
        });
    fs.writeFileSync('json2/914.json', json);
}
doit();
