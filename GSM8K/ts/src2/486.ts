import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/486.json')) {
        console.log("Skipping 486")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('James runs {{x1}} miles a day for {{x2}} days a week.  If he runs {{x3}} miles an hour how many hours does he run a week?', [], [{'input': {'x1': 12, 'x2': 5, 'x3': 10}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 5, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 486,
        "question": 'James runs 12 miles a day for 5 days a week.  If he runs 10 miles an hour how many hours does he run a week?',
        "answer": 6,
        "examples": [{'input': {'x1': 12, 'x2': 5, 'x3': 10}, 'output': 6}],
        });
    fs.writeFileSync('json2/486.json', json);
}
doit();
