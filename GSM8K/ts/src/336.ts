import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/336.json')) {
        console.log("Skipping 336")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Maria buys {{x1}} shares of a stock for $8 each. The stock price increases 50% the first year Maria holds it, then decreases 25% in the second year. What is the final value of all Maria's shares?", [], [{'input': {'x1': 8}, 'output': 72}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 336,
        "question": "Maria buys 8 shares of a stock for $8 each. The stock price increases 50% the first year Maria holds it, then decreases 25% in the second year. What is the final value of all Maria's shares?",
        "answer": 72,
        "examples": [{'input': {'x1': 8}, 'output': 72}],
        });
    fs.writeFileSync('json/336.json', json);
}
doit();
