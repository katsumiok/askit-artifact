import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/26.json')) {
        console.log("Skipping 26")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mishka bought {{x1}} pairs of shorts, {{x2}} pairs of pants, and {{x3}} pairs of shoes. One pair of shorts costs $16.50. One pair of pants costs $22.50 and one pair of shoes costs $42. How many dollars did Mishka spend on all the clothing items?', [], [{'input': {'x1': 3, 'x2': 3, 'x3': 3}, 'output': 243}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 243;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 26,
        "question": 'Mishka bought 3 pairs of shorts, 3 pairs of pants, and 3 pairs of shoes. One pair of shorts costs $16.50. One pair of pants costs $22.50 and one pair of shoes costs $42. How many dollars did Mishka spend on all the clothing items?',
        "answer": 243,
        "examples": [{'input': {'x1': 3, 'x2': 3, 'x3': 3}, 'output': 243}],
        });
    fs.writeFileSync('json2/26.json', json);
}
doit();
