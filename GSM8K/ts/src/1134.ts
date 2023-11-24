import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1134.json')) {
        console.log("Skipping 1134")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jane has saved $4 of her allowance every week for the past {{x1}} weeks. If she continues to save the same amount each week, how many more weeks will it take for her to have saved a total of $60?', [], [{'input': {'x1': 8}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1134,
        "question": 'Jane has saved $4 of her allowance every week for the past 8 weeks. If she continues to save the same amount each week, how many more weeks will it take for her to have saved a total of $60?',
        "answer": 7,
        "examples": [{'input': {'x1': 8}, 'output': 7}],
        });
    fs.writeFileSync('json/1134.json', json);
}
doit();
