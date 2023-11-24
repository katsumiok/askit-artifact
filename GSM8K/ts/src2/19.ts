import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/19.json')) {
        console.log("Skipping 19")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Marissa is hiking a 12-mile trail. She took {{x1}} hour to walk the first {{x2}} miles, then another hour to walk the next two miles. If she wants her average speed to be {{x3}} miles per hour, what speed (in miles per hour) does she need to walk the remaining distance?', [], [{'input': {'x1': 1, 'x2': 4, 'x3': 4}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 4, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 19,
        "question": 'Marissa is hiking a 12-mile trail. She took 1 hour to walk the first 4 miles, then another hour to walk the next two miles. If she wants her average speed to be 4 miles per hour, what speed (in miles per hour) does she need to walk the remaining distance?',
        "answer": 6,
        "examples": [{'input': {'x1': 1, 'x2': 4, 'x3': 4}, 'output': 6}],
        });
    fs.writeFileSync('json2/19.json', json);
}
doit();
