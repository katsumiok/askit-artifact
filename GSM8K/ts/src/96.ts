import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/96.json')) {
        console.log("Skipping 96")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Harry slept {{x1}} hours last night. His friend James slept only 2/3 of what Harry slept. How many more hours did Harry sleep than James?', [], [{'input': {'x1': 9}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 96,
        "question": 'Harry slept 9 hours last night. His friend James slept only 2/3 of what Harry slept. How many more hours did Harry sleep than James?',
        "answer": 3,
        "examples": [{'input': {'x1': 9}, 'output': 3}],
        });
    fs.writeFileSync('json/96.json', json);
}
doit();
