import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1280.json')) {
        console.log("Skipping 1280")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Steve put together a puzzle that took {{x1}} hours of hard work to complete. Anna put together the same puzzle in {{x2}} hours more than half Steve's time. How long did it take Anna to finish the difficult puzzle?", [], [{'input': {'x1': 10, 'x2': 2}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1280,
        "question": "Steve put together a puzzle that took 10 hours of hard work to complete. Anna put together the same puzzle in 2 hours more than half Steve's time. How long did it take Anna to finish the difficult puzzle?",
        "answer": 7,
        "examples": [{'input': {'x1': 10, 'x2': 2}, 'output': 7}],
        });
    fs.writeFileSync('json2/1280.json', json);
}
doit();
