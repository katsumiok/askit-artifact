import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/763.json')) {
        console.log("Skipping 763")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Rob, Royce, and Pedro are contractors getting ready to put a new roof on three homes. If the three homes will need {{x1}} cases of shingles, with the first house needing 1/2 of the second, and the third needing double the first. How many cases of shingles will the third house need?', [], [{'input': {'x1': 250}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 250});
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
        "id": 763,
        "question": 'Rob, Royce, and Pedro are contractors getting ready to put a new roof on three homes. If the three homes will need 250 cases of shingles, with the first house needing 1/2 of the second, and the third needing double the first. How many cases of shingles will the third house need?',
        "answer": 100,
        "examples": [{'input': {'x1': 250}, 'output': 100}],
        });
    fs.writeFileSync('json2/763.json', json);
}
doit();
