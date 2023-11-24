import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1033.json')) {
        console.log("Skipping 1033")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Melissa is summoned to jury duty. She spends {{x1}} hours a day for {{x2}} days listening to a court case. If Melissa is paid $15 per day but also has to pay $3 for parking each day, how much jury pay does she make per hour after expenses?', [], [{'input': {'x1': 6, 'x2': 3}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1033,
        "question": 'Melissa is summoned to jury duty. She spends 6 hours a day for 3 days listening to a court case. If Melissa is paid $15 per day but also has to pay $3 for parking each day, how much jury pay does she make per hour after expenses?',
        "answer": 2,
        "examples": [{'input': {'x1': 6, 'x2': 3}, 'output': 2}],
        });
    fs.writeFileSync('json2/1033.json', json);
}
doit();
