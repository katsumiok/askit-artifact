import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/652.json')) {
        console.log("Skipping 652")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('James hires a horse-drawn carriage from {{x1}} PM to {{x2}} PM.  He gets {{x3}} hour free.  The first paid hour is $15 and each hour after that is twice the cost.  How much did he pay?', [], [{'input': {'x1': 5, 'x2': 9, 'x3': 1}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 9, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 652,
        "question": 'James hires a horse-drawn carriage from 5 PM to 9 PM.  He gets 1 hour free.  The first paid hour is $15 and each hour after that is twice the cost.  How much did he pay?',
        "answer": 75,
        "examples": [{'input': {'x1': 5, 'x2': 9, 'x3': 1}, 'output': 75}],
        });
    fs.writeFileSync('json2/652.json', json);
}
doit();
