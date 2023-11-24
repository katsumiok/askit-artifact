import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/985.json')) {
        console.log("Skipping 985")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Edgar eats {{x1}} pretzels a day. If his brother eats 1/2 as many, how many does his brother eat in a week?', [], [{'input': {'x1': 18}, 'output': 63}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 63;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 985,
        "question": 'Edgar eats 18 pretzels a day. If his brother eats 1/2 as many, how many does his brother eat in a week?',
        "answer": 63,
        "examples": [{'input': {'x1': 18}, 'output': 63}],
        });
    fs.writeFileSync('json/985.json', json);
}
doit();
