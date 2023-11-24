import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/662.json')) {
        console.log("Skipping 662")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Gus spent $20.00 at the grocery store.  He bought {{x1}} bag of chips for $2.00 each, a bucket of fried chicken for $8.00 and a bottle of soda for $1.00.  How much did the apple pie cost?', [], [{'input': {'x1': 2}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 662,
        "question": 'Gus spent $20.00 at the grocery store.  He bought 2 bag of chips for $2.00 each, a bucket of fried chicken for $8.00 and a bottle of soda for $1.00.  How much did the apple pie cost?',
        "answer": 7,
        "examples": [{'input': {'x1': 2}, 'output': 7}],
        });
    fs.writeFileSync('json2/662.json', json);
}
doit();
