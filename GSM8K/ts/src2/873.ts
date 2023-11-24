import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/873.json')) {
        console.log("Skipping 873")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('David has $12.48 and wants to buy {{x1}} bolts from a bin at the hardware store. Each bolt costs $0.03. How much money does David have left after paying for the bolts?', [], [{'input': {'x1': 16}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
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
        "id": 873,
        "question": 'David has $12.48 and wants to buy 16 bolts from a bin at the hardware store. Each bolt costs $0.03. How much money does David have left after paying for the bolts?',
        "answer": 12,
        "examples": [{'input': {'x1': 16}, 'output': 12}],
        });
    fs.writeFileSync('json2/873.json', json);
}
doit();
