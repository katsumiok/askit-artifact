import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/708.json')) {
        console.log("Skipping 708")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Given a 7-day week, how much does Alex charge for {{x1}} weeks of tutoring if she charges $12 per day?', [], [{'input': {'x1': 2}, 'output': 168}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 168;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 708,
        "question": 'Given a 7-day week, how much does Alex charge for 2 weeks of tutoring if she charges $12 per day?',
        "answer": 168,
        "examples": [{'input': {'x1': 2}, 'output': 168}],
        });
    fs.writeFileSync('json/708.json', json);
}
doit();
