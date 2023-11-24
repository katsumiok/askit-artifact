import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/463.json')) {
        console.log("Skipping 463")
        return;
    }
    // measure time
    const f = define<number, {}>("Ashley's pizza delivery costs $15. What is the total amount that Ashley should give the delivery man if she wants to give a tip that is equal to 1/5 of the amount she ordered?", [], [{'input': {}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 463,
        "question": "Ashley's pizza delivery costs $15. What is the total amount that Ashley should give the delivery man if she wants to give a tip that is equal to 1/5 of the amount she ordered?",
        "answer": 18,
        "examples": [{'input': {}, 'output': 18}],
        });
    fs.writeFileSync('json/463.json', json);
}
doit();
