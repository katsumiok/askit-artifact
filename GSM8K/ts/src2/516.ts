import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/516.json')) {
        console.log("Skipping 516")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('On average Joe throws {{x1}} punches per minute.  A fight lasts {{x2}} rounds of {{x3}} minutes.  How many punches did he throw?', [], [{'input': {'x1': 25, 'x2': 5, 'x3': 3}, 'output': 375}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 375;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 516,
        "question": 'On average Joe throws 25 punches per minute.  A fight lasts 5 rounds of 3 minutes.  How many punches did he throw?',
        "answer": 375,
        "examples": [{'input': {'x1': 25, 'x2': 5, 'x3': 3}, 'output': 375}],
        });
    fs.writeFileSync('json2/516.json', json);
}
doit();
