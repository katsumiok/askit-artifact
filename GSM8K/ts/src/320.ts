import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/320.json')) {
        console.log("Skipping 320")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('At the beginning of the party, there were {{x1}} men and {{x2}} women. After an hour, 1/4 of the total number of people left. How many women are left if {{x3}} men stayed at the party?', [], [{'input': {'x1': 25, 'x2': 15, 'x3': 22}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 15, 'x3': 22});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 320,
        "question": 'At the beginning of the party, there were 25 men and 15 women. After an hour, 1/4 of the total number of people left. How many women are left if 22 men stayed at the party?',
        "answer": 8,
        "examples": [{'input': {'x1': 25, 'x2': 15, 'x3': 22}, 'output': 8}],
        });
    fs.writeFileSync('json/320.json', json);
}
doit();
