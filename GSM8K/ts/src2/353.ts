import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/353.json')) {
        console.log("Skipping 353")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John decides to do several activities while out on vacation.  He spends {{x1}} hours boating and half that time swimming.  He also watched {{x2}} different shows which were {{x3}} hours each.  This was 30% of the time he spent.  He spent 40% of his time sightseeing.  How much time did he spend sightseeing?', [], [{'input': {'x1': 6, 'x2': 3, 'x3': 2}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3, 'x3': 2});
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
        "id": 353,
        "question": 'John decides to do several activities while out on vacation.  He spends 6 hours boating and half that time swimming.  He also watched 3 different shows which were 2 hours each.  This was 30% of the time he spent.  He spent 40% of his time sightseeing.  How much time did he spend sightseeing?',
        "answer": 20,
        "examples": [{'input': {'x1': 6, 'x2': 3, 'x3': 2}, 'output': 20}],
        });
    fs.writeFileSync('json2/353.json', json);
}
doit();
