import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/485.json')) {
        console.log("Skipping 485")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Jillian's handbag cost $20 less than {{x1}} times as much as her shoes cost. If her shoes cost $80, how much did her bag cost?", [], [{'input': {'x1': 3}, 'output': 220}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 220;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 485,
        "question": "Jillian's handbag cost $20 less than 3 times as much as her shoes cost. If her shoes cost $80, how much did her bag cost?",
        "answer": 220,
        "examples": [{'input': {'x1': 3}, 'output': 220}],
        });
    fs.writeFileSync('json2/485.json', json);
}
doit();
