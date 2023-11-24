import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1106.json')) {
        console.log("Skipping 1106")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Marty has {{x1}} centimeters of ribbon that he must cut into {{x2}} equal parts. Each of the cut parts must be divided into {{x3}} equal parts. How long will each final cut be?', [], [{'input': {'x1': 100, 'x2': 4, 'x3': 5}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 4, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1106,
        "question": 'Marty has 100 centimeters of ribbon that he must cut into 4 equal parts. Each of the cut parts must be divided into 5 equal parts. How long will each final cut be?',
        "answer": 5,
        "examples": [{'input': {'x1': 100, 'x2': 4, 'x3': 5}, 'output': 5}],
        });
    fs.writeFileSync('json2/1106.json', json);
}
doit();
