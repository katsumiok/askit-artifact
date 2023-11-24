import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/272.json')) {
        console.log("Skipping 272")
        return;
    }
    // measure time
    const f = define<number, {}>('A mother goes shopping. She buys cocoa at $4.20, laundry at $9.45 and a package of pasta at $1.35. She pays $20. How much change does the cashier give back?', [], [{'input': {}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 272,
        "question": 'A mother goes shopping. She buys cocoa at $4.20, laundry at $9.45 and a package of pasta at $1.35. She pays $20. How much change does the cashier give back?',
        "answer": 5,
        "examples": [{'input': {}, 'output': 5}],
        });
    fs.writeFileSync('json2/272.json', json);
}
doit();
