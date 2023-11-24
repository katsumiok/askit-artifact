import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/226.json')) {
        console.log("Skipping 226")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("James is counting his Pokemon cards. He has {{x1}} fire type, {{x2}} grass type, and {{x3}} water type. If he loses {{x4}} of the water type and buys {{x5}} grass type, what's the percentage chance (rounded to the nearest integer) that a randomly picked card will be a water type?", [], [{'input': {'x1': 30, 'x2': 20, 'x3': 40, 'x4': 8, 'x5': 14}, 'output': 33}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 20, 'x3': 40, 'x4': 8, 'x5': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 33;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 226,
        "question": "James is counting his Pokemon cards. He has 30 fire type, 20 grass type, and 40 water type. If he loses 8 of the water type and buys 14 grass type, what's the percentage chance (rounded to the nearest integer) that a randomly picked card will be a water type?",
        "answer": 33,
        "examples": [{'input': {'x1': 30, 'x2': 20, 'x3': 40, 'x4': 8, 'x5': 14}, 'output': 33}],
        });
    fs.writeFileSync('json2/226.json', json);
}
doit();
