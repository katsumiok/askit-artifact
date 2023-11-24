import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/872.json')) {
        console.log("Skipping 872")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Seven bottles of soda cost $21.00 while {{x1}} bottles of water cost $8. If David wants to buy {{x2}} bottles of soda and {{x3}} bottles of water, how much will that cost?', [], [{'input': {'x1': 4, 'x2': 3, 'x3': 2}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 3, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 872,
        "question": 'Seven bottles of soda cost $21.00 while 4 bottles of water cost $8. If David wants to buy 3 bottles of soda and 2 bottles of water, how much will that cost?',
        "answer": 13,
        "examples": [{'input': {'x1': 4, 'x2': 3, 'x3': 2}, 'output': 13}],
        });
    fs.writeFileSync('json2/872.json', json);
}
doit();
