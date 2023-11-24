import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/330.json')) {
        console.log("Skipping 330")
        return;
    }
    // measure time
    const f = define<number, {}>('A customer’s loyalty card at a store gives them rewards of $1 off their next purchase for every $20 they spend. Their last shopping trip, they spent $80. This shopping trip, they spent $43, used their rewards, and applied a coupon that took twice the amount of rewards off the price. How many dollars did the customer pay on this shopping trip?', [], [{'input': {}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 330,
        "question": 'A customer’s loyalty card at a store gives them rewards of $1 off their next purchase for every $20 they spend. Their last shopping trip, they spent $80. This shopping trip, they spent $43, used their rewards, and applied a coupon that took twice the amount of rewards off the price. How many dollars did the customer pay on this shopping trip?',
        "answer": 31,
        "examples": [{'input': {}, 'output': 31}],
        });
    fs.writeFileSync('json2/330.json', json);
}
doit();
