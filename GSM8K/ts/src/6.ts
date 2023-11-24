import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/6.json')) {
        console.log("Skipping 6")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Toulouse has twice as many sheep as Charleston. Charleston has {{x1}} times as many sheep as Seattle. How many sheep do Toulouse, Charleston, and Seattle have together if Seattle has {{x2}} sheep?', [], [{'input': {'x1': 4, 'x2': 20}, 'output': 260}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 260;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 6,
        "question": 'Toulouse has twice as many sheep as Charleston. Charleston has 4 times as many sheep as Seattle. How many sheep do Toulouse, Charleston, and Seattle have together if Seattle has 20 sheep?',
        "answer": 260,
        "examples": [{'input': {'x1': 4, 'x2': 20}, 'output': 260}],
        });
    fs.writeFileSync('json/6.json', json);
}
doit();
