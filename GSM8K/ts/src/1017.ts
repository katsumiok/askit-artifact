import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1017.json')) {
        console.log("Skipping 1017")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Olivia uploaded {{x1}} pictures to Facebook.  She put the same number of the pics into {{x2}} albums. {{x3}} of the albums were selfies only and {{x4}} of the albums were portraits.  How many portraits and selfies did she have?', [], [{'input': {'x1': 72, 'x2': 8, 'x3': 3, 'x4': 2}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 72, 'x2': 8, 'x3': 3, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1017,
        "question": 'Olivia uploaded 72 pictures to Facebook.  She put the same number of the pics into 8 albums.  3 of the albums were selfies only and 2 of the albums were portraits.  How many portraits and selfies did she have?',
        "answer": 45,
        "examples": [{'input': {'x1': 72, 'x2': 8, 'x3': 3, 'x4': 2}, 'output': 45}],
        });
    fs.writeFileSync('json/1017.json', json);
}
doit();
