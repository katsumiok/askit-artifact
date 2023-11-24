import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1210.json')) {
        console.log("Skipping 1210")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('To kick off summer, Jolene is having a water balloon fight with her friends.  They fill up {{x1}} packs of balloons that have {{x2}} balloons per pack.  By the end of the afternoon, {{x3}} balloons are left.  How many balloons did they throw?', [], [{'input': {'x1': 10, 'x2': 30, 'x3': 12}, 'output': 288}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 30, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 288;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1210,
        "question": 'To kick off summer, Jolene is having a water balloon fight with her friends.  They fill up 10 packs of balloons that have 30 balloons per pack.  By the end of the afternoon, 12 balloons are left.  How many balloons did they throw?',
        "answer": 288,
        "examples": [{'input': {'x1': 10, 'x2': 30, 'x3': 12}, 'output': 288}],
        });
    fs.writeFileSync('json2/1210.json', json);
}
doit();
