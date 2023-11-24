import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/955.json')) {
        console.log("Skipping 955")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A hospital has a capacity of {{x1}} beds with 1/5 occupied. Due to the coronavirus outbreak, {{x2}} patients are admitted into the hospital each day. Calculate the total number of unoccupied beds in the hospital after {{x3}} weeks.', [], [{'input': {'x1': 1000, 'x2': 50, 'x3': 2}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 50, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 955,
        "question": 'A hospital has a capacity of 1000 beds with 1/5 occupied. Due to the coronavirus outbreak, 50 patients are admitted into the hospital each day. Calculate the total number of unoccupied beds in the hospital after 2 weeks.',
        "answer": 100,
        "examples": [{'input': {'x1': 1000, 'x2': 50, 'x3': 2}, 'output': 100}],
        });
    fs.writeFileSync('json/955.json', json);
}
doit();
