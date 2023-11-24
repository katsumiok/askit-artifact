import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/893.json')) {
        console.log("Skipping 893")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mark works at his job for {{x1}} hours a day for {{x2}} days a week.  He used to make $10 an hour but they raised his pay by $2 per hour.  How much does he make a week?', [], [{'input': {'x1': 8, 'x2': 5}, 'output': 480}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 480;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 893,
        "question": 'Mark works at his job for 8 hours a day for 5 days a week.  He used to make $10 an hour but they raised his pay by $2 per hour.  How much does he make a week?',
        "answer": 480,
        "examples": [{'input': {'x1': 8, 'x2': 5}, 'output': 480}],
        });
    fs.writeFileSync('json/893.json', json);
}
doit();
