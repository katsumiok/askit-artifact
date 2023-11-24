import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/492.json')) {
        console.log("Skipping 492")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Sally buys one small pizza at $8 and one family-size pizza that costs {{x1}} times as much as the small pizza. How much does she spend in all?', [], [{'input': {'x1': 3}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
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
        "id": 492,
        "question": 'Sally buys one small pizza at $8 and one family-size pizza that costs 3 times as much as the small pizza. How much does she spend in all?',
        "answer": 32,
        "examples": [{'input': {'x1': 3}, 'output': 32}],
        });
    fs.writeFileSync('json/492.json', json);
}
doit();
