import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/25.json')) {
        console.log("Skipping 25")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Marie ordered one chicken meal that costs $12, {{x1}} packs of milk that costs $3 each, {{x2}} apples that cost $1.50 each, and some boxes of pizza. Marie paid a total of $50. How many boxes of pizza did Marie order if each box costs $8.50?', [], [{'input': {'x1': 5, 'x2': 4}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 25,
        "question": 'Marie ordered one chicken meal that costs $12, 5 packs of milk that costs $3 each, 4 apples that cost $1.50 each, and some boxes of pizza. Marie paid a total of $50. How many boxes of pizza did Marie order if each box costs $8.50?',
        "answer": 2,
        "examples": [{'input': {'x1': 5, 'x2': 4}, 'output': 2}],
        });
    fs.writeFileSync('json/25.json', json);
}
doit();
