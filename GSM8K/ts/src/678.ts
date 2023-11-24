import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/678.json')) {
        console.log("Skipping 678")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lorie earns $10 per hour. Karen earns twice what Lorie earns. How much does Karen earn in two days if she works {{x1}} hours per day?', [], [{'input': {'x1': 3}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 678,
        "question": 'Lorie earns $10 per hour. Karen earns twice what Lorie earns. How much does Karen earn in two days if she works 3 hours per day?',
        "answer": 120,
        "examples": [{'input': {'x1': 3}, 'output': 120}],
        });
    fs.writeFileSync('json/678.json', json);
}
doit();
