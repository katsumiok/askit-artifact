import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/548.json')) {
        console.log("Skipping 548")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mark was unwell for {{x1}} months, during which he lost {{x2}} pounds per month. If his final weight was {{x3}} pounds, what was his initial weight?', [], [{'input': {'x1': 3, 'x2': 10, 'x3': 70}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 10, 'x3': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 548,
        "question": 'Mark was unwell for 3 months, during which he lost 10 pounds per month. If his final weight was 70 pounds, what was his initial weight?',
        "answer": 100,
        "examples": [{'input': {'x1': 3, 'x2': 10, 'x3': 70}, 'output': 100}],
        });
    fs.writeFileSync('json/548.json', json);
}
doit();
