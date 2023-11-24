import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/556.json')) {
        console.log("Skipping 556")
        return;
    }
    // measure time
    const f = define<number, {}>('How much does it cost you for lunch today at Subway if you pay $40 for a foot-long fish sub and thrice as much for a six-inch cold-cut combo sub?', [], [{'input': {}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 556,
        "question": 'How much does it cost you for lunch today at Subway if you pay $40 for a foot-long fish sub and thrice as much for a six-inch cold-cut combo sub?',
        "answer": 160,
        "examples": [{'input': {}, 'output': 160}],
        });
    fs.writeFileSync('json/556.json', json);
}
doit();
