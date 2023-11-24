import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/552.json')) {
        console.log("Skipping 552")
        return;
    }
    // measure time
    const f = define<number, {}>('A marketing company pays its employees on a commission-based salary system. If you sell goods worth $1000, you earn a 30% commission. Sales over $1000 get you an additional 10% commission. Calculate the amount of money Antonella earned if she sold goods worth $2500.', [], [{'input': {}, 'output': 450}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 450;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 552,
        "question": 'A marketing company pays its employees on a commission-based salary system. If you sell goods worth $1000, you earn a 30% commission. Sales over $1000 get you an additional 10% commission. Calculate the amount of money Antonella earned if she sold goods worth $2500.',
        "answer": 450,
        "examples": [{'input': {}, 'output': 450}],
        });
    fs.writeFileSync('json/552.json', json);
}
doit();
