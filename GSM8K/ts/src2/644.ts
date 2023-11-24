import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/644.json')) {
        console.log("Skipping 644")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Steve is {{x1}} years old. His wife is {{x2}} years older than him. Their son is currently half as old as his mom and their son's wife is {{x3}} years younger than her husband. How old is Steve's son's wife?", [], [{'input': {'x1': 60, 'x2': 4, 'x3': 3}, 'output': 29}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 4, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 29;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 644,
        "question": "Steve is 60 years old. His wife is 4 years older than him. Their son is currently half as old as his mom and their son's wife is 3 years younger than her husband. How old is Steve's son's wife?",
        "answer": 29,
        "examples": [{'input': {'x1': 60, 'x2': 4, 'x3': 3}, 'output': 29}],
        });
    fs.writeFileSync('json2/644.json', json);
}
doit();
