import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/435.json')) {
        console.log("Skipping 435")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ray had {{x1}} lollipops. He kept {{x2}} lollipops and shared the remaining equally with his four friends. How many lollipops did each of his friends receive?', [], [{'input': {'x1': 25, 'x2': 5}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 435,
        "question": 'Ray had 25 lollipops. He kept 5 lollipops and shared the remaining equally with his four friends. How many lollipops did each of his friends receive?',
        "answer": 5,
        "examples": [{'input': {'x1': 25, 'x2': 5}, 'output': 5}],
        });
    fs.writeFileSync('json2/435.json', json);
}
doit();
