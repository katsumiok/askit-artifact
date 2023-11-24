import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1096.json')) {
        console.log("Skipping 1096")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Billy is volunteering his time to help people do their taxes. He can help {{x1}} people per hour for {{x2}} hours a day. If he takes 20% of the days between March 1st and April 19th off, and helps people on all the other days. How many people does he help? (Remember there are {{x3}} days in March.)', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 31}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 31});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1096,
        "question": 'Billy is volunteering his time to help people do their taxes. He can help 2 people per hour for 3 hours a day. If he takes 20% of the days between March 1st and April 19th off, and helps people on all the other days. How many people does he help? (Remember there are 31 days in March.)',
        "answer": 240,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 31}, 'output': 240}],
        });
    fs.writeFileSync('json2/1096.json', json);
}
doit();
