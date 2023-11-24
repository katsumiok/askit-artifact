import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/490.json')) {
        console.log("Skipping 490")
        return;
    }
    // measure time
    const f = define<number, {}>('An 8-year old child wants to buy a toy car which costs $12. He already has $4 savings. How many days will it take him to save the remaining amount of money if he promises to save $2 daily from his allowance?', [], [{'input': {}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 490,
        "question": 'An 8-year old child wants to buy a toy car which costs $12. He already has $4 savings. How many days will it take him to save the remaining amount of money if he promises to save $2 daily from his allowance?',
        "answer": 4,
        "examples": [{'input': {}, 'output': 4}],
        });
    fs.writeFileSync('json2/490.json', json);
}
doit();
