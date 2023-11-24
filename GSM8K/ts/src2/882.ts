import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/882.json')) {
        console.log("Skipping 882")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Kelly is grocery shopping at a supermarket and is making sure she has enough in her budget for the items in her cart. Her {{x1}} packs of bacon cost $10 in total and she has {{x2}} packets of chicken which each cost twice as much as a pack of bacon. She also has {{x3}} packs of strawberries, priced at $4 each, and {{x4}} packs of apples, each priced at half the price of a pack of strawberries. If Kelly’s budget is $65 then how much money, in dollars, does she have left in her budget?', [], [{'input': {'x1': 5, 'x2': 6, 'x3': 3, 'x4': 7}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 6, 'x3': 3, 'x4': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 882,
        "question": 'Kelly is grocery shopping at a supermarket and is making sure she has enough in her budget for the items in her cart. Her 5 packs of bacon cost $10 in total and she has 6 packets of chicken which each cost twice as much as a pack of bacon. She also has 3 packs of strawberries, priced at $4 each, and 7 packs of apples, each priced at half the price of a pack of strawberries. If Kelly’s budget is $65 then how much money, in dollars, does she have left in her budget?',
        "answer": 5,
        "examples": [{'input': {'x1': 5, 'x2': 6, 'x3': 3, 'x4': 7}, 'output': 5}],
        });
    fs.writeFileSync('json2/882.json', json);
}
doit();
