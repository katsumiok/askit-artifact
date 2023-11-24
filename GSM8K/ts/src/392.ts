import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/392.json')) {
        console.log("Skipping 392")
        return;
    }
    // measure time
    const f = define<number, {}>('Tim decides to cancel his cable subscription and get streaming services.  He gets Netflix for $10 a month.  Hulu and Disney Plus normally cost $10 a month each but he saves 20% for bundling.  How much money does he save by cancelling his $60 cable package?', [], [{'input': {}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 392,
        "question": 'Tim decides to cancel his cable subscription and get streaming services.  He gets Netflix for $10 a month.  Hulu and Disney Plus normally cost $10 a month each but he saves 20% for bundling.  How much money does he save by cancelling his $60 cable package?',
        "answer": 34,
        "examples": [{'input': {}, 'output': 34}],
        });
    fs.writeFileSync('json/392.json', json);
}
doit();
