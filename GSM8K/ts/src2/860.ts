import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/860.json')) {
        console.log("Skipping 860")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jennifer bought {{x1}} oranges from the market, she gave her three daughters {{x2}} oranges each, and her only boy got {{x3}} oranges. How many oranges did she remain with?', [], [{'input': {'x1': 12, 'x2': 2, 'x3': 3}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 860,
        "question": 'Jennifer bought 12 oranges from the market, she gave her three daughters 2 oranges each, and her only boy got 3 oranges. How many oranges did she remain with?',
        "answer": 3,
        "examples": [{'input': {'x1': 12, 'x2': 2, 'x3': 3}, 'output': 3}],
        });
    fs.writeFileSync('json2/860.json', json);
}
doit();
