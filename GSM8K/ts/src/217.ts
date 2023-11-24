import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/217.json')) {
        console.log("Skipping 217")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are {{x1}} roses in the vase. There are {{x2}} more dahlias than roses in the vase. How many flowers are there in the vase in total?', [], [{'input': {'x1': 4, 'x2': 7}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 217,
        "question": 'There are 4 roses in the vase. There are 7 more dahlias than roses in the vase. How many flowers are there in the vase in total?',
        "answer": 15,
        "examples": [{'input': {'x1': 4, 'x2': 7}, 'output': 15}],
        });
    fs.writeFileSync('json/217.json', json);
}
doit();
