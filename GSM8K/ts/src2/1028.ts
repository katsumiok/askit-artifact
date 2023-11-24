import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1028.json')) {
        console.log("Skipping 1028")
        return;
    }
    // measure time
    const f = define<number, {}>('Tom buys a bedroom set for $3000.  He sells his old bedroom for $1000 and uses that to pay for part of the bedroom set.  He then has to pay 10% a month for the bedroom set.  How much does he have to pay per month?', [], [{'input': {}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1028,
        "question": 'Tom buys a bedroom set for $3000.  He sells his old bedroom for $1000 and uses that to pay for part of the bedroom set.  He then has to pay 10% a month for the bedroom set.  How much does he have to pay per month?',
        "answer": 200,
        "examples": [{'input': {}, 'output': 200}],
        });
    fs.writeFileSync('json2/1028.json', json);
}
doit();
