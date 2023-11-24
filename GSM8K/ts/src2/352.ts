import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/352.json')) {
        console.log("Skipping 352")
        return;
    }
    // measure time
    const f = define<number, {}>('After Andrea saved some money, she then spent the rest of her money on an $11 sweater and gave her brother $4. If she had $36 in the beginning, how much did Andrea save?', [], [{'input': {}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 352,
        "question": 'After Andrea saved some money, she then spent the rest of her money on an $11 sweater and gave her brother $4. If she had $36 in the beginning, how much did Andrea save?',
        "answer": 21,
        "examples": [{'input': {}, 'output': 21}],
        });
    fs.writeFileSync('json2/352.json', json);
}
doit();
