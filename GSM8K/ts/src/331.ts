import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/331.json')) {
        console.log("Skipping 331")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Nick is choosing between two jobs. Job A pays $15 an hour for {{x1}} hours a year, and is in a state with a 20% total tax rate. Job B pays $42,000 a year and is in a state that charges $6,000 in property tax and a 10% tax rate on net income after property tax. How much more money will Nick make at the job with a higher net pay rate, compared to the other job?', [], [{'input': {'x1': 2000}, 'output': 8400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 331,
        "question": 'Nick is choosing between two jobs. Job A pays $15 an hour for 2000 hours a year, and is in a state with a 20% total tax rate. Job B pays $42,000 a year and is in a state that charges $6,000 in property tax and a 10% tax rate on net income after property tax. How much more money will Nick make at the job with a higher net pay rate, compared to the other job?',
        "answer": 8400,
        "examples": [{'input': {'x1': 2000}, 'output': 8400}],
        });
    fs.writeFileSync('json/331.json', json);
}
doit();
