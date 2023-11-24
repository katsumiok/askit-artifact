import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/949.json')) {
        console.log("Skipping 949")
        return;
    }
    // measure time
    const f = define<number, {}>('Marcus is half of Leo’s age and five years younger than Deanna. Deanna is 26. How old is Leo?', [], [{'input': {}, 'output': 42}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 42;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 949,
        "question": 'Marcus is half of Leo’s age and five years younger than Deanna. Deanna is 26. How old is Leo?',
        "answer": 42,
        "examples": [{'input': {}, 'output': 42}],
        });
    fs.writeFileSync('json2/949.json', json);
}
doit();
