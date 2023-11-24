import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/656.json')) {
        console.log("Skipping 656")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Mike's teacher, leaves as homework the reading of a 200-page book. The assignment is to be completed within {{x1}} days. Mike plans to read {{x2}} pages a day. How many days before the deadline will Mike finish his reading?", [], [{'input': {'x1': 30, 'x2': 10}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 656,
        "question": "Mike's teacher, leaves as homework the reading of a 200-page book. The assignment is to be completed within 30 days. Mike plans to read 10 pages a day. How many days before the deadline will Mike finish his reading?",
        "answer": 10,
        "examples": [{'input': {'x1': 30, 'x2': 10}, 'output': 10}],
        });
    fs.writeFileSync('json/656.json', json);
}
doit();
