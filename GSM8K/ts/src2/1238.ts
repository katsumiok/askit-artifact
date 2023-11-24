import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1238.json')) {
        console.log("Skipping 1238")
        return;
    }
    // measure time
    const f = define<number, {}>('Bud makes homemade macaroni and cheese once a week.  The pasta costs $1.00 a box, and he spends $3.00 on cheddar cheese and twice that amount for the gruyere cheese.  How much money does Bud spend on making macaroni and cheese in one year?', [], [{'input': {}, 'output': 520}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 520;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1238,
        "question": 'Bud makes homemade macaroni and cheese once a week.  The pasta costs $1.00 a box, and he spends $3.00 on cheddar cheese and twice that amount for the gruyere cheese.  How much money does Bud spend on making macaroni and cheese in one year?',
        "answer": 520,
        "examples": [{'input': {}, 'output': 520}],
        });
    fs.writeFileSync('json2/1238.json', json);
}
doit();
