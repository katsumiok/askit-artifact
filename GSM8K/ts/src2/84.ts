import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/84.json')) {
        console.log("Skipping 84")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A football team played {{x1}} games. They won {{x2}} more than they lost. How many did they win?', [], [{'input': {'x1': 22, 'x2': 8}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 22, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 84,
        "question": 'A football team played 22 games. They won 8 more than they lost. How many did they win?',
        "answer": 15,
        "examples": [{'input': {'x1': 22, 'x2': 8}, 'output': 15}],
        });
    fs.writeFileSync('json2/84.json', json);
}
doit();
