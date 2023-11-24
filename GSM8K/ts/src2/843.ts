import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/843.json')) {
        console.log("Skipping 843")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Craig has {{x1}} twenty dollar bills. He buys six squirt guns for $2 each.  He also buys {{x2}} packs of water balloons for $3 each.  How much money does he have left?', [], [{'input': {'x1': 2, 'x2': 3}, 'output': 19}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 19;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 843,
        "question": 'Craig has 2 twenty dollar bills. He buys six squirt guns for $2 each.  He also buys 3 packs of water balloons for $3 each.  How much money does he have left?',
        "answer": 19,
        "examples": [{'input': {'x1': 2, 'x2': 3}, 'output': 19}],
        });
    fs.writeFileSync('json2/843.json', json);
}
doit();
