import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/555.json')) {
        console.log("Skipping 555")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John plans to save money from working.  He gets paid $2 per hour and works {{x1}} hours a day for {{x2}} days a week.  If he wants to save $80 how many weeks will it take him?', [], [{'input': {'x1': 5, 'x2': 4}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 555,
        "question": 'John plans to save money from working.  He gets paid $2 per hour and works 5 hours a day for 4 days a week.  If he wants to save $80 how many weeks will it take him?',
        "answer": 2,
        "examples": [{'input': {'x1': 5, 'x2': 4}, 'output': 2}],
        });
    fs.writeFileSync('json/555.json', json);
}
doit();
