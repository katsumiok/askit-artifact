import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/8.json')) {
        console.log("Skipping 8")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('John drives for {{x1}} hours at a speed of {{x2}} mph and then turns around because he realizes he forgot something very important at home.  He tries to get home in {{x3}} hours but spends the first {{x4}} hours in standstill traffic.  He spends the next half-hour driving at a speed of 30mph, before being able to drive the remaining time of the {{x5}} hours going at {{x6}} mph.  How far is he from home at the end of those {{x7}} hours?', [], [{'input': {'x1': 3, 'x2': 60, 'x3': 4, 'x4': 2, 'x5': 4, 'x6': 80, 'x7': 4}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 60, 'x3': 4, 'x4': 2, 'x5': 4, 'x6': 80, 'x7': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 8,
        "question": 'John drives for 3 hours at a speed of 60 mph and then turns around because he realizes he forgot something very important at home.  He tries to get home in 4 hours but spends the first 2 hours in standstill traffic.  He spends the next half-hour driving at a speed of 30mph, before being able to drive the remaining time of the 4 hours going at 80 mph.  How far is he from home at the end of those 4 hours?',
        "answer": 45,
        "examples": [{'input': {'x1': 3, 'x2': 60, 'x3': 4, 'x4': 2, 'x5': 4, 'x6': 80, 'x7': 4}, 'output': 45}],
        });
    fs.writeFileSync('json2/8.json', json);
}
doit();
