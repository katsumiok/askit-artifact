import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/134.json')) {
        console.log("Skipping 134")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Tom gets {{x1}} car washes a month.  If each car wash costs $15 how much does he pay in a year?', [], [{'input': {'x1': 4}, 'output': 720}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 720;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 134,
        "question": 'Tom gets 4 car washes a month.  If each car wash costs $15 how much does he pay in a year?',
        "answer": 720,
        "examples": [{'input': {'x1': 4}, 'output': 720}],
        });
    fs.writeFileSync('json2/134.json', json);
}
doit();
