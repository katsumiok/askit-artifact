import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/620.json')) {
        console.log("Skipping 620")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A DVD can be played {{x1}} times before it breaks. There are two DVDs in the public library, one has been played {{x2}} times and the other has been played {{x3}} times. How many total times can both DVDs be played before they break?', [], [{'input': {'x1': 1000, 'x2': 356, 'x3': 135}, 'output': 1509}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 356, 'x3': 135});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1509;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 620,
        "question": 'A DVD can be played 1000 times before it breaks. There are two DVDs in the public library, one has been played 356 times and the other has been played 135 times. How many total times can both DVDs be played before they break?',
        "answer": 1509,
        "examples": [{'input': {'x1': 1000, 'x2': 356, 'x3': 135}, 'output': 1509}],
        });
    fs.writeFileSync('json2/620.json', json);
}
doit();
