import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/717.json')) {
        console.log("Skipping 717")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A pencil cost $0.50, and an eraser cost $0.25. If you bought {{x1}} pencils and {{x2}} erasers and paid $10, how much change would you get?', [], [{'input': {'x1': 6, 'x2': 8}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8});
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
        "id": 717,
        "question": 'A pencil cost $0.50, and an eraser cost $0.25. If you bought 6 pencils and 8 erasers and paid $10, how much change would you get?',
        "answer": 5,
        "examples": [{'input': {'x1': 6, 'x2': 8}, 'output': 5}],
        });
    fs.writeFileSync('json2/717.json', json);
}
doit();
