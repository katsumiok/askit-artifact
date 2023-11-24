import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/117.json')) {
        console.log("Skipping 117")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John buys {{x1}} pairs of shoes for each of his {{x2}} children.  They cost $60 each.  How much did he pay?', [], [{'input': {'x1': 2, 'x2': 3}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 117,
        "question": 'John buys 2 pairs of shoes for each of his 3 children.  They cost $60 each.  How much did he pay?',
        "answer": 360,
        "examples": [{'input': {'x1': 2, 'x2': 3}, 'output': 360}],
        });
    fs.writeFileSync('json2/117.json', json);
}
doit();
