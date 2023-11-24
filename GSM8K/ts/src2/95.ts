import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/95.json')) {
        console.log("Skipping 95")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Out of the {{x1}} Grade {{x2}} students, 2/5 are boys and 2/3 of the girls are in the girl scout. How many girls are not in the girl scout?', [], [{'input': {'x1': 200, 'x2': 5}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 95,
        "question": 'Out of the 200 Grade 5 students, 2/5 are boys and 2/3 of the girls are in the girl scout. How many girls are not in the girl scout?',
        "answer": 40,
        "examples": [{'input': {'x1': 200, 'x2': 5}, 'output': 40}],
        });
    fs.writeFileSync('json2/95.json', json);
}
doit();
