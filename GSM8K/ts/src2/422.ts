import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/422.json')) {
        console.log("Skipping 422")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bill is signing up for a new streaming service. He got a special introductory deal where the first {{x1}} months were $8 a month, then it went up to the normal price of $12 a month. After {{x2}} months of the normal rate, the service increased its price to $14 a month. How much do {{x3}} years of the service cost him?', [], [{'input': {'x1': 6, 'x2': 8, 'x3': 2}, 'output': 284}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 284;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 422,
        "question": 'Bill is signing up for a new streaming service. He got a special introductory deal where the first 6 months were $8 a month, then it went up to the normal price of $12 a month. After 8 months of the normal rate, the service increased its price to $14 a month. How much do 2 years of the service cost him?',
        "answer": 284,
        "examples": [{'input': {'x1': 6, 'x2': 8, 'x3': 2}, 'output': 284}],
        });
    fs.writeFileSync('json2/422.json', json);
}
doit();
