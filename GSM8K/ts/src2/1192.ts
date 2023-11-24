import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1192.json')) {
        console.log("Skipping 1192")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jen works for 7.5 hours a day {{x1}} days a week. Her hourly rate is $1.5. Jen also receives an additional $10 if she has complete attendance. Suppose Jen did not incur any absences for  April, and there are exactly {{x2}} weeks in April, how much will she receive?', [], [{'input': {'x1': 6, 'x2': 4}, 'output': 280}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 280;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1192,
        "question": 'Jen works for 7.5 hours a day 6 days a week. Her hourly rate is $1.5. Jen also receives an additional $10 if she has complete attendance. Suppose Jen did not incur any absences for  April, and there are exactly 4 weeks in April, how much will she receive?',
        "answer": 280,
        "examples": [{'input': {'x1': 6, 'x2': 4}, 'output': 280}],
        });
    fs.writeFileSync('json2/1192.json', json);
}
doit();
