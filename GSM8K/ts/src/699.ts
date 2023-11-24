import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/699.json')) {
        console.log("Skipping 699")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There is space for {{x1}} pencils in the box. If there are {{x2}} pencils missing from the box, how many pairs of pencils are in the box?', [], [{'input': {'x1': 20, 'x2': 4}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 699,
        "question": 'There is space for 20 pencils in the box. If there are 4 pencils missing from the box, how many pairs of pencils are in the box?',
        "answer": 8,
        "examples": [{'input': {'x1': 20, 'x2': 4}, 'output': 8}],
        });
    fs.writeFileSync('json/699.json', json);
}
doit();
