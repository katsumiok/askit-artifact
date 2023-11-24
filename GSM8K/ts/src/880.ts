import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/880.json')) {
        console.log("Skipping 880")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Sarah has a rope that is {{x1}} meters long. Her friend wants to buy the rope for $2 a meter. Sarah plans to use the profit to buy a new rope, which at the store costs $1.5 a meter. How much money will she have left over after she buys the new rope?', [], [{'input': {'x1': 20}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 880,
        "question": 'Sarah has a rope that is 20 meters long. Her friend wants to buy the rope for $2 a meter. Sarah plans to use the profit to buy a new rope, which at the store costs $1.5 a meter. How much money will she have left over after she buys the new rope?',
        "answer": 10,
        "examples": [{'input': {'x1': 20}, 'output': 10}],
        });
    fs.writeFileSync('json/880.json', json);
}
doit();
