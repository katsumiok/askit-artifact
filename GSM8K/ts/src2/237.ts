import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/237.json')) {
        console.log("Skipping 237")
        return;
    }
    // measure time
    const f = define<number, {}>('Johnny took his allowance of $20 and added an extra $10 to it.  He then invested this sum of money, which tripled in a year.  How much money did he have after a year?', [], [{'input': {}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 237,
        "question": 'Johnny took his allowance of $20 and added an extra $10 to it.  He then invested this sum of money, which tripled in a year.  How much money did he have after a year?',
        "answer": 90,
        "examples": [{'input': {}, 'output': 90}],
        });
    fs.writeFileSync('json2/237.json', json);
}
doit();
