import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/140.json')) {
        console.log("Skipping 140")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Of the {{x1}} available cars for rent, {{x2}} are automatic cars, {{x3}} are manual cars, and the rest are semi-automatic. What percentage of the cars are semi-automatic?', [], [{'input': {'x1': 20, 'x2': 12, 'x3': 4}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 12, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 140,
        "question": 'Of the 20 available cars for rent, 12 are automatic cars, 4 are manual cars, and the rest are semi-automatic. What percentage of the cars are semi-automatic?',
        "answer": 20,
        "examples": [{'input': {'x1': 20, 'x2': 12, 'x3': 4}, 'output': 20}],
        });
    fs.writeFileSync('json/140.json', json);
}
doit();
