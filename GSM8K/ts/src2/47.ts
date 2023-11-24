import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/47.json')) {
        console.log("Skipping 47")
        return;
    }
    // measure time
    const f = define<number, {}>('John buys twice as many red ties as blue ties.  The red ties cost 50% more than blue ties.  He spent $200 on blue ties that cost $40 each. How much did he spend on ties?', [], [{'input': {}, 'output': 800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 47,
        "question": 'John buys twice as many red ties as blue ties.  The red ties cost 50% more than blue ties.  He spent $200 on blue ties that cost $40 each. How much did he spend on ties?',
        "answer": 800,
        "examples": [{'input': {}, 'output': 800}],
        });
    fs.writeFileSync('json2/47.json', json);
}
doit();
