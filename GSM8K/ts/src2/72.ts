import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/72.json')) {
        console.log("Skipping 72")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tommy is fundraising for his charity by selling brownies for $3 a slice and cheesecakes for $4 a slice. If Tommy sells {{x1}} brownies and {{x2}} slices of cheesecake, how much money does Tommy raise?', [], [{'input': {'x1': 43, 'x2': 23}, 'output': 221}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 43, 'x2': 23});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 221;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 72,
        "question": 'Tommy is fundraising for his charity by selling brownies for $3 a slice and cheesecakes for $4 a slice. If Tommy sells 43 brownies and 23 slices of cheesecake, how much money does Tommy raise?',
        "answer": 221,
        "examples": [{'input': {'x1': 43, 'x2': 23}, 'output': 221}],
        });
    fs.writeFileSync('json2/72.json', json);
}
doit();
