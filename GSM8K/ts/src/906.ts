import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/906.json')) {
        console.log("Skipping 906")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Tim has a box with {{x1}} blue shoe boxes and {{x2}} red shoe boxes. If he uses {{x3}} blue shoeboxes and 1/3 red of his shoeboxes to go fishing, how many red and blue shoe boxes are left in Tim's box?", [], [{'input': {'x1': 7, 'x2': 9, 'x3': 3}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 9, 'x3': 3});
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
        "id": 906,
        "question": "Tim has a box with 7 blue shoe boxes and 9 red shoe boxes. If he uses 3 blue shoeboxes and 1/3 red of his shoeboxes to go fishing, how many red and blue shoe boxes are left in Tim's box?",
        "answer": 10,
        "examples": [{'input': {'x1': 7, 'x2': 9, 'x3': 3}, 'output': 10}],
        });
    fs.writeFileSync('json/906.json', json);
}
doit();
