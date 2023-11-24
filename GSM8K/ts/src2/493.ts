import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/493.json')) {
        console.log("Skipping 493")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Heather's razors come {{x1}} to a pack and cost $4.00 a pack.  They are currently on sale for buy one get one free.  She also has a $2.00 coupon.  How much will each individual razor cost, in cents, after the discount if she buys {{x2}} packs of razors?", [], [{'input': {'x1': 4, 'x2': 2}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 493,
        "question": "Heather's razors come 4 to a pack and cost $4.00 a pack.  They are currently on sale for buy one get one free.  She also has a $2.00 coupon.  How much will each individual razor cost, in cents, after the discount if she buys 2 packs of razors?",
        "answer": 25,
        "examples": [{'input': {'x1': 4, 'x2': 2}, 'output': 25}],
        });
    fs.writeFileSync('json2/493.json', json);
}
doit();
