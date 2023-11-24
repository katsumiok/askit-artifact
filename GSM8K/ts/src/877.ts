import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/877.json')) {
        console.log("Skipping 877")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('To make a profit of $2000, Isaias has to sell the chickens he planned to take to the market from his farm at $50 per chicken. If Isaias has {{x1}} chickens on his farm and plans to sell 3/5 of them, for how much money did Isaias buy the chicken he took to the market for sale?', [], [{'input': {'x1': 300}, 'output': 7000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 877,
        "question": 'To make a profit of $2000, Isaias has to sell the chickens he planned to take to the market from his farm at $50 per chicken. If Isaias has 300 chickens on his farm and plans to sell 3/5 of them, for how much money did Isaias buy the chicken he took to the market for sale?',
        "answer": 7000,
        "examples": [{'input': {'x1': 300}, 'output': 7000}],
        });
    fs.writeFileSync('json/877.json', json);
}
doit();
