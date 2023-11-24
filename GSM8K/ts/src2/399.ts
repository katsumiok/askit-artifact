import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/399.json')) {
        console.log("Skipping 399")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Alice is {{x1}} years older than Beth, who is {{x2}} years older than Erica. What is the difference between the ages of Alice and Erica, if Erica is {{x3}} years old?', [], [{'input': {'x1': 7, 'x2': 5, 'x3': 30}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 5, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 399,
        "question": 'Alice is 7 years older than Beth, who is 5 years older than Erica. What is the difference between the ages of Alice and Erica, if Erica is 30 years old?',
        "answer": 12,
        "examples": [{'input': {'x1': 7, 'x2': 5, 'x3': 30}, 'output': 12}],
        });
    fs.writeFileSync('json2/399.json', json);
}
doit();
