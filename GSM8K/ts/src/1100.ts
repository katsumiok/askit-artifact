import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1100.json')) {
        console.log("Skipping 1100")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bobby takes a {{x1}} min lunch and {{x2}} 15 minutes break per day at the office.  After {{x3}} days, how many hours do his lunches and breaks add up to?', [], [{'input': {'x1': 30, 'x2': 2, 'x3': 5}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 2, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1100,
        "question": 'Bobby takes a 30 min lunch and 2 15 minutes break per day at the office.  After 5 days, how many hours do his lunches and breaks add up to?',
        "answer": 5,
        "examples": [{'input': {'x1': 30, 'x2': 2, 'x3': 5}, 'output': 5}],
        });
    fs.writeFileSync('json/1100.json', json);
}
doit();
