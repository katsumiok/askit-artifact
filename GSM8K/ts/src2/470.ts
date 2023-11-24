import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/470.json')) {
        console.log("Skipping 470")
        return;
    }
    // measure time
    const f = define<number, {}>('Theo bought a pen for $2 and a piece of paper that cost $1 less than three times the price of the pen. She gave the cashier $10. What is the amount of change Theo received?', [], [{'input': {}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 470,
        "question": 'Theo bought a pen for $2 and a piece of paper that cost $1 less than three times the price of the pen. She gave the cashier $10. What is the amount of change Theo received?',
        "answer": 3,
        "examples": [{'input': {}, 'output': 3}],
        });
    fs.writeFileSync('json2/470.json', json);
}
doit();
