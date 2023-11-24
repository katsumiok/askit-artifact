import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/624.json')) {
        console.log("Skipping 624")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Two sports coaches went shopping together. The baseball coach bought {{x1}} new baseballs for $3 each. The basketball coach bought {{x2}} new basketballs for $14 each. How much more did the basketball coach spend than the baseball coach?', [], [{'input': {'x1': 9, 'x2': 8}, 'output': 85}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 85;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 624,
        "question": 'Two sports coaches went shopping together. The baseball coach bought 9 new baseballs for $3 each. The basketball coach bought 8 new basketballs for $14 each. How much more did the basketball coach spend than the baseball coach?',
        "answer": 85,
        "examples": [{'input': {'x1': 9, 'x2': 8}, 'output': 85}],
        });
    fs.writeFileSync('json2/624.json', json);
}
doit();
