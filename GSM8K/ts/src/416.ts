import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/416.json')) {
        console.log("Skipping 416")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A herd consists of camels and dromedaries. There are {{x1}} heads and {{x2}} bumps. How many dromedaries are there if camels have two humps each and dromedaries have one hump each?', [], [{'input': {'x1': 180, 'x2': 304}, 'output': 56}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 180, 'x2': 304});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 56;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 416,
        "question": 'A herd consists of camels and dromedaries. There are 180 heads and 304 bumps. How many dromedaries are there if camels have two humps each and dromedaries have one hump each?',
        "answer": 56,
        "examples": [{'input': {'x1': 180, 'x2': 304}, 'output': 56}],
        });
    fs.writeFileSync('json/416.json', json);
}
doit();
