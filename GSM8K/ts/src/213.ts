import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/213.json')) {
        console.log("Skipping 213")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('While at the dollar store, Sloane counts {{x1}} customers entering the store. The next day, she counts {{x2}} more customers than the first day. If the total number of customers by the third day was 500, how many customers did she count on the third day?', [], [{'input': {'x1': 100, 'x2': 50}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 213,
        "question": 'While at the dollar store, Sloane counts 100 customers entering the store. The next day, she counts 50 more customers than the first day. If the total number of customers by the third day was 500, how many customers did she count on the third day?',
        "answer": 250,
        "examples": [{'input': {'x1': 100, 'x2': 50}, 'output': 250}],
        });
    fs.writeFileSync('json/213.json', json);
}
doit();
