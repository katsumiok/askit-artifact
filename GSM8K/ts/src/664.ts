import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/664.json')) {
        console.log("Skipping 664")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John decides to take a cooking class.  The class meets {{x1}} times a week for {{x2}} hours each time for {{x3}} weeks.  If he learns a new recipe for every 1.5 hours of class time, how many recipes does he learn?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 6}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 664,
        "question": 'John decides to take a cooking class.  The class meets 4 times a week for 2 hours each time for 6 weeks.  If he learns a new recipe for every 1.5 hours of class time, how many recipes does he learn?',
        "answer": 32,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 6}, 'output': 32}],
        });
    fs.writeFileSync('json/664.json', json);
}
doit();
