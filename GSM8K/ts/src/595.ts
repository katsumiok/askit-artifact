import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/595.json')) {
        console.log("Skipping 595")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jerry is twice as old as he was {{x1}} years ago. How old will Jerry be in {{x2}} years?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 595,
        "question": 'Jerry is twice as old as he was 5 years ago. How old will Jerry be in 3 years?',
        "answer": 13,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 13}],
        });
    fs.writeFileSync('json/595.json', json);
}
doit();
