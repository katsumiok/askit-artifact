import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/144.json')) {
        console.log("Skipping 144")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Kim has started his own housekeeping business and is calculating how much profit he will make from his clients. He already has {{x1}} clients, but is talking to another {{x2}} potential clients and feels confident enough to include them in his calculations. Each client’s home will need {{x3}} bottles of bleach and a pack of cloths to clean. Bottles of bleach will cost $2 each and packs of cloths will cost $5 each. These are his only expenses. He calculates that his total income each week will be $92. Profit is the difference between total income and total expenses, so how much profit, in dollars, will Lucas make each week?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 2}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 144,
        "question": 'Kim has started his own housekeeping business and is calculating how much profit he will make from his clients. He already has 3 clients, but is talking to another 5 potential clients and feels confident enough to include them in his calculations. Each client’s home will need 2 bottles of bleach and a pack of cloths to clean. Bottles of bleach will cost $2 each and packs of cloths will cost $5 each. These are his only expenses. He calculates that his total income each week will be $92. Profit is the difference between total income and total expenses, so how much profit, in dollars, will Lucas make each week?',
        "answer": 20,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 2}, 'output': 20}],
        });
    fs.writeFileSync('json/144.json', json);
}
doit();
