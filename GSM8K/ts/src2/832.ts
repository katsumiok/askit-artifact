import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/832.json')) {
        console.log("Skipping 832")
        return;
    }
    // measure time
    const f = define<number, {}>('Roy has saved 40% more in money earned by chores than his brother Anthony.  Anthony has saved $10.00 more than their sister Eva.   Eva has saved $20.00.  How much money does Roy have?', [], [{'input': {}, 'output': 42}]);
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
        "id": 832,
        "question": 'Roy has saved 40% more in money earned by chores than his brother Anthony.  Anthony has saved $10.00 more than their sister Eva.   Eva has saved $20.00.  How much money does Roy have?',
        "answer": 42,
        "examples": [{'input': {}, 'output': 42}],
        });
    fs.writeFileSync('json2/832.json', json);
}
doit();
