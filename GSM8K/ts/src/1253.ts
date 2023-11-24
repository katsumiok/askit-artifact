import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1253.json')) {
        console.log("Skipping 1253")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Tim spends {{x1}} hours each day at work answering phones.  It takes him {{x2}} minutes to deal with a call.  How many calls does he deal with during his {{x3}} day work week?', [], [{'input': {'x1': 6, 'x2': 15, 'x3': 5}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 15, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1253,
        "question": 'Tim spends 6 hours each day at work answering phones.  It takes him 15 minutes to deal with a call.  How many calls does he deal with during his 5 day work week?',
        "answer": 120,
        "examples": [{'input': {'x1': 6, 'x2': 15, 'x3': 5}, 'output': 120}],
        });
    fs.writeFileSync('json/1253.json', json);
}
doit();
