import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/223.json')) {
        console.log("Skipping 223")
        return;
    }
    // measure time
    const f = define<number, {}>("A company spends $15000 on advertising for a year, and then spends a third of that amount on advertising for another year.\xa0 What's the total amount the company spent on advertising for the two years?", [], [{'input': {}, 'output': 20000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 223,
        "question": "A company spends $15000 on advertising for a year, and then spends a third of that amount on advertising for another year.\xa0 What's the total amount the company spent on advertising for the two years?",
        "answer": 20000,
        "examples": [{'input': {}, 'output': 20000}],
        });
    fs.writeFileSync('json/223.json', json);
}
doit();
