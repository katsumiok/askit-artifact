import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1151.json')) {
        console.log("Skipping 1151")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Sid traveled {{x1}} miles in {{x2}} hours. If Sid then traveled an additional {{x3}} miles in {{x4}} hours, what's the average speed he was traveling?", [], [{'input': {'x1': 110, 'x2': 2, 'x3': 140, 'x4': 3}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 110, 'x2': 2, 'x3': 140, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1151,
        "question": "Sid traveled 110 miles in 2 hours. If Sid then traveled an additional 140 miles in 3 hours, what's the average speed he was traveling?",
        "answer": 50,
        "examples": [{'input': {'x1': 110, 'x2': 2, 'x3': 140, 'x4': 3}, 'output': 50}],
        });
    fs.writeFileSync('json2/1151.json', json);
}
doit();
