import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/380.json')) {
        console.log("Skipping 380")
        return;
    }
    // measure time
    const f = define<number, {}>('Karan borrowed $3,650 for five months at an interest rate of 10%. She has to pay an equal amount every month. How much does she have to pay per month?', [], [{'input': {}, 'output': 803}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 803;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 380,
        "question": 'Karan borrowed $3,650 for five months at an interest rate of 10%. She has to pay an equal amount every month. How much does she have to pay per month?',
        "answer": 803,
        "examples": [{'input': {}, 'output': 803}],
        });
    fs.writeFileSync('json/380.json', json);
}
doit();
