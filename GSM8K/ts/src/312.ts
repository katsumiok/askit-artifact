import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/312.json')) {
        console.log("Skipping 312")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Trent is {{x1}} years older than Jane, and Jane is {{x2}} years younger than Quinn. If Quinn is 30, how old is Trent?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
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
        "id": 312,
        "question": 'Trent is 5 years older than Jane, and Jane is 3 years younger than Quinn. If Quinn is 30, how old is Trent?',
        "answer": 32,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 32}],
        });
    fs.writeFileSync('json/312.json', json);
}
doit();
