import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/706.json')) {
        console.log("Skipping 706")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The local firefighters are doing a “fill the boot” fundraiser. Their goal is to raise $6300. After the first {{x1}} hours, they have raised $2100.  For how many hours do they have to fundraise in total to reach their goal, assuming an equal amount raised in every hour?', [], [{'input': {'x1': 3}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 706,
        "question": 'The local firefighters are doing a “fill the boot” fundraiser. Their goal is to raise $6300. After the first 3 hours, they have raised $2100.  For how many hours do they have to fundraise in total to reach their goal, assuming an equal amount raised in every hour?',
        "answer": 9,
        "examples": [{'input': {'x1': 3}, 'output': 9}],
        });
    fs.writeFileSync('json/706.json', json);
}
doit();
