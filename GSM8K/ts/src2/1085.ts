import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1085.json')) {
        console.log("Skipping 1085")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A crocodile grows {{x1}} inches long in {{x2}} years. At this rate, how many inches will it grow in {{x3}} years?', [], [{'input': {'x1': 8, 'x2': 4, 'x3': 13}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 13});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1085,
        "question": 'A crocodile grows 8 inches long in 4 years. At this rate, how many inches will it grow in 13 years?',
        "answer": 26,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 13}, 'output': 26}],
        });
    fs.writeFileSync('json2/1085.json', json);
}
doit();
