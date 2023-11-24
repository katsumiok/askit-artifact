import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/473.json')) {
        console.log("Skipping 473")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Benny saw a 10-foot shark with {{x1}} 6-inch remoras attached to it. What percentage of the shark's body length is the combined length of the remoras?", [], [{'input': {'x1': 2}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 473,
        "question": "Benny saw a 10-foot shark with 2 6-inch remoras attached to it. What percentage of the shark's body length is the combined length of the remoras?",
        "answer": 10,
        "examples": [{'input': {'x1': 2}, 'output': 10}],
        });
    fs.writeFileSync('json2/473.json', json);
}
doit();
