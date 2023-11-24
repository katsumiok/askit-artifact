import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/879.json')) {
        console.log("Skipping 879")
        return;
    }
    // measure time
    const f = define<number, {}>('At a spa, Iris spent $400 to do her hair, 1/4 as much to do a manicure, and 3/4 as much money as a manicure to do a pedicure. How much money did she spend at the spa?', [], [{'input': {}, 'output': 575}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 575;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 879,
        "question": 'At a spa, Iris spent $400 to do her hair, 1/4 as much to do a manicure, and 3/4 as much money as a manicure to do a pedicure. How much money did she spend at the spa?',
        "answer": 575,
        "examples": [{'input': {}, 'output': 575}],
        });
    fs.writeFileSync('json2/879.json', json);
}
doit();
