import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/298.json')) {
        console.log("Skipping 298")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carmen goes to an auction to win an antique desk. She accepts the opening bid of $200 and continues bidding until she wins. The bids on the desk rise by $50 each time and {{x1}} other people each bid once. Carmen bids after each of the {{x2}} other people and eventually wins. How much money, in dollars, does the desk cost her?', [], [{'input': {'x1': 3, 'x2': 3}, 'output': 500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 298,
        "question": 'Carmen goes to an auction to win an antique desk. She accepts the opening bid of $200 and continues bidding until she wins. The bids on the desk rise by $50 each time and 3 other people each bid once. Carmen bids after each of the 3 other people and eventually wins. How much money, in dollars, does the desk cost her?',
        "answer": 500,
        "examples": [{'input': {'x1': 3, 'x2': 3}, 'output': 500}],
        });
    fs.writeFileSync('json2/298.json', json);
}
doit();
