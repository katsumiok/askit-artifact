import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/243.json')) {
        console.log("Skipping 243")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jason has a phone plan of {{x1}} minutes per month. Every day he has a 15-minute call with his boss, and he's had {{x2}} extra minutes of call this month to other people. How many minutes does Jason have left if this month has {{x3}} days?", [], [{'input': {'x1': 1000, 'x2': 300, 'x3': 30}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 300, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 243,
        "question": "Jason has a phone plan of 1000 minutes per month. Every day he has a 15-minute call with his boss, and he's had 300 extra minutes of call this month to other people. How many minutes does Jason have left if this month has 30 days?",
        "answer": 250,
        "examples": [{'input': {'x1': 1000, 'x2': 300, 'x3': 30}, 'output': 250}],
        });
    fs.writeFileSync('json/243.json', json);
}
doit();
