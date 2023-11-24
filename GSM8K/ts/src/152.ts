import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/152.json')) {
        console.log("Skipping 152")
        return;
    }
    // measure time
    const f = define<number, {}>('Carl buys ten packs of cookies. Each pack of cookies has six cookies inside. Each cookie cost $0.10. How much change does Carl receive if he pay with a $10 bill?', [], [{'input': {}, 'output': 4}]);
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
        "id": 152,
        "question": 'Carl buys ten packs of cookies. Each pack of cookies has six cookies inside. Each cookie cost $0.10. How much change does Carl receive if he pay with a $10 bill?',
        "answer": 4,
        "examples": [{'input': {}, 'output': 4}],
        });
    fs.writeFileSync('json/152.json', json);
}
doit();
