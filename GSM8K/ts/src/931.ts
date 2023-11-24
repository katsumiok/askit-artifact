import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/931.json')) {
        console.log("Skipping 931")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("The combined age of Peter, Paul and Jean is {{x1}} years old. Find the age of Peter knowing that Paul is {{x2}} years older than John and that Peter’s age is equal to the sum of Paul and John's age.", [], [{'input': {'x1': 100, 'x2': 10}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 931,
        "question": "The combined age of Peter, Paul and Jean is 100 years old. Find the age of Peter knowing that Paul is 10 years older than John and that Peter’s age is equal to the sum of Paul and John's age.",
        "answer": 50,
        "examples": [{'input': {'x1': 100, 'x2': 10}, 'output': 50}],
        });
    fs.writeFileSync('json/931.json', json);
}
doit();
