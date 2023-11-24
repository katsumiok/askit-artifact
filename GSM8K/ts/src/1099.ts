import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1099.json')) {
        console.log("Skipping 1099")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('The biggest waterslide at Five Flags is {{x1}} feet long, and people slide down at {{x2}} feet/minute. The second biggest waterslide is {{x3}} feet long, but steeper, so people slide down at {{x4}} feet/minute. How much longer does it take to ride the biggest slide compared to the second biggest slide?', [], [{'input': {'x1': 300, 'x2': 60, 'x3': 240, 'x4': 80}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300, 'x2': 60, 'x3': 240, 'x4': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1099,
        "question": 'The biggest waterslide at Five Flags is 300 feet long, and people slide down at 60 feet/minute. The second biggest waterslide is 240 feet long, but steeper, so people slide down at 80 feet/minute. How much longer does it take to ride the biggest slide compared to the second biggest slide?',
        "answer": 2,
        "examples": [{'input': {'x1': 300, 'x2': 60, 'x3': 240, 'x4': 80}, 'output': 2}],
        });
    fs.writeFileSync('json/1099.json', json);
}
doit();
