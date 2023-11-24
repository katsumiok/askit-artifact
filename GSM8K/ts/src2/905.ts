import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/905.json')) {
        console.log("Skipping 905")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Harold sleeps for {{x1}} hours a night.  He works {{x2}} hours less than he sleeps and he walks his dog for an hour each day.  How much free time does Harold have left in his day?', [], [{'input': {'x1': 10, 'x2': 2}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 905,
        "question": 'Harold sleeps for 10 hours a night.  He works 2 hours less than he sleeps and he walks his dog for an hour each day.  How much free time does Harold have left in his day?',
        "answer": 5,
        "examples": [{'input': {'x1': 10, 'x2': 2}, 'output': 5}],
        });
    fs.writeFileSync('json2/905.json', json);
}
doit();
