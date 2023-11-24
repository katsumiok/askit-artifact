import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1186.json')) {
        console.log("Skipping 1186")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Sam ran {{x1}} miles on Monday, Wednesday and Friday.  On Tuesday and Thursday, Sam ran {{x2}} miles.  How many miles did Sam run this week?', [], [{'input': {'x1': 3, 'x2': 5}, 'output': 19}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 19;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1186,
        "question": 'Sam ran 3 miles on Monday, Wednesday and Friday.  On Tuesday and Thursday, Sam ran 5 miles.  How many miles did Sam run this week?',
        "answer": 19,
        "examples": [{'input': {'x1': 3, 'x2': 5}, 'output': 19}],
        });
    fs.writeFileSync('json2/1186.json', json);
}
doit();
