import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/238.json')) {
        console.log("Skipping 238")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mary is two years younger than Joan, who is five years older than Jessa. If Jessa is {{x1}} years old, what is the sum of the ages of the three girls?', [], [{'input': {'x1': 20}, 'output': 68}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 68;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 238,
        "question": 'Mary is two years younger than Joan, who is five years older than Jessa. If Jessa is 20 years old, what is the sum of the ages of the three girls?',
        "answer": 68,
        "examples": [{'input': {'x1': 20}, 'output': 68}],
        });
    fs.writeFileSync('json/238.json', json);
}
doit();
