import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1008.json')) {
        console.log("Skipping 1008")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Matteo traveled at {{x1}} miles per hour for {{x2}} hours. Shandy traveled at {{x3}} miles per hour for {{x4}} hours. How many miles farther did Shandy drive than Matteo?', [], [{'input': {'x1': 55, 'x2': 4, 'x3': 45, 'x4': 10}, 'output': 230}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 55, 'x2': 4, 'x3': 45, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 230;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1008,
        "question": 'Matteo traveled at 55 miles per hour for 4 hours. Shandy traveled at 45 miles per hour for 10 hours. How many miles farther did Shandy drive than Matteo?',
        "answer": 230,
        "examples": [{'input': {'x1': 55, 'x2': 4, 'x3': 45, 'x4': 10}, 'output': 230}],
        });
    fs.writeFileSync('json2/1008.json', json);
}
doit();
