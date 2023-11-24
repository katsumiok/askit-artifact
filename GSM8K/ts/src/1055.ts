import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1055.json')) {
        console.log("Skipping 1055")
        return;
    }
    // measure time
    const f = define<number, {}>('James has to buy insurance.  Since he had an accident it was 60% more than normal.  The normal cost is $120 a month.  How much does he pay a year?', [], [{'input': {}, 'output': 2304}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2304;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1055,
        "question": 'James has to buy insurance.  Since he had an accident it was 60% more than normal.  The normal cost is $120 a month.  How much does he pay a year?',
        "answer": 2304,
        "examples": [{'input': {}, 'output': 2304}],
        });
    fs.writeFileSync('json/1055.json', json);
}
doit();
