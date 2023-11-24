import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/123.json')) {
        console.log("Skipping 123")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Rosie can run {{x1}} miles per hour for {{x2}} hours. After that, she runs {{x3}} miles per hour. How many miles can she run in {{x4}} hours?', [], [{'input': {'x1': 10, 'x2': 3, 'x3': 5, 'x4': 7}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 3, 'x3': 5, 'x4': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 123,
        "question": 'Rosie can run 10 miles per hour for 3 hours. After that, she runs 5 miles per hour. How many miles can she run in 7 hours?',
        "answer": 50,
        "examples": [{'input': {'x1': 10, 'x2': 3, 'x3': 5, 'x4': 7}, 'output': 50}],
        });
    fs.writeFileSync('json2/123.json', json);
}
doit();
