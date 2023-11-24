import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/195.json')) {
        console.log("Skipping 195")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A pen costs as much as a pencil and eraser combined. A pencil costs $1.20 and an eraser costs $0.30. How much will {{x1}} pens cost?', [], [{'input': {'x1': 8}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 195,
        "question": 'A pen costs as much as a pencil and eraser combined. A pencil costs $1.20 and an eraser costs $0.30. How much will 8 pens cost?',
        "answer": 12,
        "examples": [{'input': {'x1': 8}, 'output': 12}],
        });
    fs.writeFileSync('json/195.json', json);
}
doit();
