import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/636.json')) {
        console.log("Skipping 636")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Julie operates the cash register exactly twice as fast as her less-experienced colleague Jewel. Daily, Jewel processes {{x1}} customers. What is the total weekly production for the two if they work all days of the week?', [], [{'input': {'x1': 50}, 'output': 1050}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1050;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 636,
        "question": 'Julie operates the cash register exactly twice as fast as her less-experienced colleague Jewel. Daily, Jewel processes 50 customers. What is the total weekly production for the two if they work all days of the week?',
        "answer": 1050,
        "examples": [{'input': {'x1': 50}, 'output': 1050}],
        });
    fs.writeFileSync('json/636.json', json);
}
doit();
