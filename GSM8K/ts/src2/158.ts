import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/158.json')) {
        console.log("Skipping 158")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Raphael went to buy some school supplies. He bought {{x1}} pens which cost $1.5 each, {{x2}} notebooks which cost $4 each, and a rim of bond paper which cost $20. How much did Raphael spend on everything?', [], [{'input': {'x1': 4, 'x2': 2}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 158,
        "question": 'Raphael went to buy some school supplies. He bought 4 pens which cost $1.5 each, 2 notebooks which cost $4 each, and a rim of bond paper which cost $20. How much did Raphael spend on everything?',
        "answer": 34,
        "examples": [{'input': {'x1': 4, 'x2': 2}, 'output': 34}],
        });
    fs.writeFileSync('json2/158.json', json);
}
doit();
