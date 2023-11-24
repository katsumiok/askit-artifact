import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/24.json')) {
        console.log("Skipping 24")
        return;
    }
    // measure time
    const f = define<number, {}>("Kyle bought last year's best-selling book for $19.50. This is with a 25% discount from the original price. What was the original price of the book?", [], [{'input': {}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 24,
        "question": "Kyle bought last year's best-selling book for $19.50. This is with a 25% discount from the original price. What was the original price of the book?",
        "answer": 26,
        "examples": [{'input': {}, 'output': 26}],
        });
    fs.writeFileSync('json/24.json', json);
}
doit();
