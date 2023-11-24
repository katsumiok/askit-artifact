import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/841.json')) {
        console.log("Skipping 841")
        return;
    }
    // measure time
    const f = define<number, {}>('Gabriel wants to buy a car for $10000 and a phone for $800. Gabriel has $5000 from working on weekends and his brother gave him $200 to help him. How much money does he still need?', [], [{'input': {}, 'output': 5600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 841,
        "question": 'Gabriel wants to buy a car for $10000 and a phone for $800. Gabriel has $5000 from working on weekends and his brother gave him $200 to help him. How much money does he still need?',
        "answer": 5600,
        "examples": [{'input': {}, 'output': 5600}],
        });
    fs.writeFileSync('json/841.json', json);
}
doit();
