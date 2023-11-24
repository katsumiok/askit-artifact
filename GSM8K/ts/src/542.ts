import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/542.json')) {
        console.log("Skipping 542")
        return;
    }
    // measure time
    const f = define<number, {}>('Verna loves to eat fruit. She bought three apples at $1.50 each, five oranges at $0.80 each, and six peaches at $0.75 each.  If she gave $20, how much change did she receive?', [], [{'input': {}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 542,
        "question": 'Verna loves to eat fruit. She bought three apples at $1.50 each, five oranges at $0.80 each, and six peaches at $0.75 each.  If she gave $20, how much change did she receive?',
        "answer": 7,
        "examples": [{'input': {}, 'output': 7}],
        });
    fs.writeFileSync('json/542.json', json);
}
doit();
