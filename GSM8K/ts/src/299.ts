import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/299.json')) {
        console.log("Skipping 299")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John hires a driving service to get him to work each day.  His work is {{x1}} miles away and he has to go there and back each day.  He goes to work {{x2}} days a week for {{x3}} weeks a year.  He gets charged $2 per mile driven and he also gives his driver a $150 bonus per month.  How much does he pay a year for driving?', [], [{'input': {'x1': 30, 'x2': 5, 'x3': 50}, 'output': 31800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 5, 'x3': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 299,
        "question": 'John hires a driving service to get him to work each day.  His work is 30 miles away and he has to go there and back each day.  He goes to work 5 days a week for 50 weeks a year.  He gets charged $2 per mile driven and he also gives his driver a $150 bonus per month.  How much does he pay a year for driving?',
        "answer": 31800,
        "examples": [{'input': {'x1': 30, 'x2': 5, 'x3': 50}, 'output': 31800}],
        });
    fs.writeFileSync('json/299.json', json);
}
doit();
