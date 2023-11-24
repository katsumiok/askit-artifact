import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/606.json')) {
        console.log("Skipping 606")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Every {{x1}} miles a car drives the tires rotate {{x2}} times.  Jeremy drives {{x3}} miles a month.  If each tire can undergo 10,440,000 rotations how many years before the tire needs to be replaced?', [], [{'input': {'x1': 2, 'x2': 725, 'x3': 400}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 725, 'x3': 400});
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
        "id": 606,
        "question": 'Every 2 miles a car drives the tires rotate 725 times.  Jeremy drives 400 miles a month.  If each tire can undergo 10,440,000 rotations how many years before the tire needs to be replaced?',
        "answer": 6,
        "examples": [{'input': {'x1': 2, 'x2': 725, 'x3': 400}, 'output': 6}],
        });
    fs.writeFileSync('json/606.json', json);
}
doit();
