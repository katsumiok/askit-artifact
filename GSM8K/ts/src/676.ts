import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/676.json')) {
        console.log("Skipping 676")
        return;
    }
    // measure time
    const f = define<number, {}>("Three people invested $1200 in a joint savings account.  After Dylan's investment of 2/5 of the total amount, Frances invested 2/3 of the remaining amount.  Skyler's investment accounted for the rest. How much money was Skyler's investment?", [], [{'input': {}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 676,
        "question": "Three people invested $1200 in a joint savings account.  After Dylan's investment of 2/5 of the total amount, Frances invested 2/3 of the remaining amount.  Skyler's investment accounted for the rest. How much money was Skyler's investment?",
        "answer": 240,
        "examples": [{'input': {}, 'output': 240}],
        });
    fs.writeFileSync('json/676.json', json);
}
doit();
