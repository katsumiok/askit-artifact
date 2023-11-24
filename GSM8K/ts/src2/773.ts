import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/773.json')) {
        console.log("Skipping 773")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Anthony had {{x1}} pencils. He gave 1/2 of his pencils to Brandon, and he gave 3/5 of the remaining pencils to Charlie. He kept the remaining pencils. How many pencils did Anthony keep?', [], [{'input': {'x1': 50}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 773,
        "question": 'Anthony had 50 pencils. He gave 1/2 of his pencils to Brandon, and he gave 3/5 of the remaining pencils to Charlie. He kept the remaining pencils. How many pencils did Anthony keep?',
        "answer": 10,
        "examples": [{'input': {'x1': 50}, 'output': 10}],
        });
    fs.writeFileSync('json2/773.json', json);
}
doit();
