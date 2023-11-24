import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1080.json')) {
        console.log("Skipping 1080")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If every second, a bubbling spring creates a new jellyfish, how many jellyfish would {{x1}} springs working at the same rate create in {{x2}} hours?', [], [{'input': {'x1': 5, 'x2': 4}, 'output': 72000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1080,
        "question": 'If every second, a bubbling spring creates a new jellyfish, how many jellyfish would 5 springs working at the same rate create in 4 hours?',
        "answer": 72000,
        "examples": [{'input': {'x1': 5, 'x2': 4}, 'output': 72000}],
        });
    fs.writeFileSync('json/1080.json', json);
}
doit();
