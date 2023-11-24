import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/5.json')) {
        console.log("Skipping 5")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Kylar went to the store to buy glasses for his new apartment. One glass costs $5, but every second glass costs only 60% of the price. Kylar wants to buy {{x1}} glasses. How much does he need to pay for them?', [], [{'input': {'x1': 16}, 'output': 64}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 5,
        "question": 'Kylar went to the store to buy glasses for his new apartment. One glass costs $5, but every second glass costs only 60% of the price. Kylar wants to buy 16 glasses. How much does he need to pay for them?',
        "answer": 64,
        "examples": [{'input': {'x1': 16}, 'output': 64}],
        });
    fs.writeFileSync('json2/5.json', json);
}
doit();
