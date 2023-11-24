import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/621.json')) {
        console.log("Skipping 621")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John injured his back and needs to go to physical therapy.  He went to physical therapy for {{x1}} weeks.  Each week he went twice for {{x2}} hours at a time.  If the sessions cost $125 per hour how much did the physical therapy cost?', [], [{'input': {'x1': 6, 'x2': 2}, 'output': 3000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 621,
        "question": 'John injured his back and needs to go to physical therapy.  He went to physical therapy for 6 weeks.  Each week he went twice for 2 hours at a time.  If the sessions cost $125 per hour how much did the physical therapy cost?',
        "answer": 3000,
        "examples": [{'input': {'x1': 6, 'x2': 2}, 'output': 3000}],
        });
    fs.writeFileSync('json/621.json', json);
}
doit();
