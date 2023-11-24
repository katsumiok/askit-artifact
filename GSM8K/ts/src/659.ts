import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/659.json')) {
        console.log("Skipping 659")
        return;
    }
    // measure time
    const f = define<number, {}>('A pound of almonds costs $10 while a pound of walnuts costs $15. How much more does it cost for a mixture of 1/2 pound almonds and 1/3 pound walnuts than a mixture of 1/5 pound almonds and 1/3 pound walnuts?', [], [{'input': {}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 659,
        "question": 'A pound of almonds costs $10 while a pound of walnuts costs $15. How much more does it cost for a mixture of 1/2 pound almonds and 1/3 pound walnuts than a mixture of 1/5 pound almonds and 1/3 pound walnuts?',
        "answer": 3,
        "examples": [{'input': {}, 'output': 3}],
        });
    fs.writeFileSync('json/659.json', json);
}
doit();
