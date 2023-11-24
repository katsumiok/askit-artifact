import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/519.json')) {
        console.log("Skipping 519")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Royce takes {{x1}} minutes more than double Rob to shingle a house. If Rob takes {{x2}} hours, how many minutes does Royce take?', [], [{'input': {'x1': 40, 'x2': 2}, 'output': 280}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 280;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 519,
        "question": 'Royce takes 40 minutes more than double Rob to shingle a house. If Rob takes 2 hours, how many minutes does Royce take?',
        "answer": 280,
        "examples": [{'input': {'x1': 40, 'x2': 2}, 'output': 280}],
        });
    fs.writeFileSync('json/519.json', json);
}
doit();
