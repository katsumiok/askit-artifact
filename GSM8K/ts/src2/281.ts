import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/281.json')) {
        console.log("Skipping 281")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A cobra, which has {{x1}} spots, has twice as many spots as a mamba. If there are {{x2}} cobras and {{x3}} mambas in a snake park, what is half the number of spots they all have combined?', [], [{'input': {'x1': 70, 'x2': 40, 'x3': 60}, 'output': 2450}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 70, 'x2': 40, 'x3': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2450;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 281,
        "question": 'A cobra, which has 70 spots, has twice as many spots as a mamba. If there are 40 cobras and 60 mambas in a snake park, what is half the number of spots they all have combined?',
        "answer": 2450,
        "examples": [{'input': {'x1': 70, 'x2': 40, 'x3': 60}, 'output': 2450}],
        });
    fs.writeFileSync('json2/281.json', json);
}
doit();
