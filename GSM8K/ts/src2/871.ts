import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/871.json')) {
        console.log("Skipping 871")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tobias bought a big pizza with {{x1}} pieces. He ate 2/5 of the pieces on the first day, {{x2}} pieces on the second day, and 7/13 of the remaining pieces on the third day. How many pizza pieces has he eaten so far?', [], [{'input': {'x1': 60, 'x2': 10}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 871,
        "question": 'Tobias bought a big pizza with 60 pieces. He ate 2/5 of the pieces on the first day, 10 pieces on the second day, and 7/13 of the remaining pieces on the third day. How many pizza pieces has he eaten so far?',
        "answer": 48,
        "examples": [{'input': {'x1': 60, 'x2': 10}, 'output': 48}],
        });
    fs.writeFileSync('json2/871.json', json);
}
doit();
