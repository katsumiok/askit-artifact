import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/532.json')) {
        console.log("Skipping 532")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jame will turn {{x1}} in {{x2}} years.  In {{x3}} years his cousin will be {{x4}} years younger than twice his age.  How many years separate the age of the two now?', [], [{'input': {'x1': 27, 'x2': 5, 'x3': 8, 'x4': 5}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27, 'x2': 5, 'x3': 8, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 532,
        "question": 'Jame will turn 27 in 5 years.  In 8 years his cousin will be 5 years younger than twice his age.  How many years separate the age of the two now?',
        "answer": 25,
        "examples": [{'input': {'x1': 27, 'x2': 5, 'x3': 8, 'x4': 5}, 'output': 25}],
        });
    fs.writeFileSync('json/532.json', json);
}
doit();
