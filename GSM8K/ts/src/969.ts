import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/969.json')) {
        console.log("Skipping 969")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John decides to buy new phones for him, his {{x1}} kids, and his wife.  Each phone after the first {{x2}} is half price.  If the phone price is $600 how much did he pay for them all?', [], [{'input': {'x1': 2, 'x2': 2}, 'output': 1800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 969,
        "question": 'John decides to buy new phones for him, his 2 kids, and his wife.  Each phone after the first 2 is half price.  If the phone price is $600 how much did he pay for them all?',
        "answer": 1800,
        "examples": [{'input': {'x1': 2, 'x2': 2}, 'output': 1800}],
        });
    fs.writeFileSync('json/969.json', json);
}
doit();
