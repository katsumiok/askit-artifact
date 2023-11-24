import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1146.json')) {
        console.log("Skipping 1146")
        return;
    }
    // measure time
    const f = define<number, {}>('Adam has $100 and wants to spend it to open a rock stand. He can buy rocks for $5 each and sell them for $7 each. If he invests all his money in the rock stand but only sells 60% of his inventory, how much money does he lose?', [], [{'input': {}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1146,
        "question": 'Adam has $100 and wants to spend it to open a rock stand. He can buy rocks for $5 each and sell them for $7 each. If he invests all his money in the rock stand but only sells 60% of his inventory, how much money does he lose?',
        "answer": 16,
        "examples": [{'input': {}, 'output': 16}],
        });
    fs.writeFileSync('json2/1146.json', json);
}
doit();
