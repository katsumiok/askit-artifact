import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1063.json')) {
        console.log("Skipping 1063")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("James gets {{x1}} emails a day.  20% of those emails don't require any response.  He responds to the rest of them.  How many emails does he respond to in a {{x2}} day work week?", [], [{'input': {'x1': 80, 'x2': 5}, 'output': 320}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 320;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1063,
        "question": "James gets 80 emails a day.  20% of those emails don't require any response.  He responds to the rest of them.  How many emails does he respond to in a 5 day work week?",
        "answer": 320,
        "examples": [{'input': {'x1': 80, 'x2': 5}, 'output': 320}],
        });
    fs.writeFileSync('json/1063.json', json);
}
doit();
