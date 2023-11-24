import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/514.json')) {
        console.log("Skipping 514")
        return;
    }
    // measure time
    const f = define<number, {}>('A house and a lot cost $120,000. If the house cost three times as much as the lot, how much did the house cost?', [], [{'input': {}, 'output': 90000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 514,
        "question": 'A house and a lot cost $120,000. If the house cost three times as much as the lot, how much did the house cost?',
        "answer": 90000,
        "examples": [{'input': {}, 'output': 90000}],
        });
    fs.writeFileSync('json/514.json', json);
}
doit();
