import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/162.json')) {
        console.log("Skipping 162")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('If a bag of marbles costs $20 and the price increases by 20% of the original price every two months, how much would a bag of marbles cost after {{x1}} months?', [], [{'input': {'x1': 36}, 'output': 92}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 36});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 92;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 162,
        "question": 'If a bag of marbles costs $20 and the price increases by 20% of the original price every two months, how much would a bag of marbles cost after 36 months?',
        "answer": 92,
        "examples": [{'input': {'x1': 36}, 'output': 92}],
        });
    fs.writeFileSync('json2/162.json', json);
}
doit();
