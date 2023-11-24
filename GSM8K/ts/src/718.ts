import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/718.json')) {
        console.log("Skipping 718")
        return;
    }
    // measure time
    const f = define<number, {}>('100 people apply for a job at Google. Of the people that apply, only 30% receive interviews. Of those who receive interviews, 20% receive a job offer. Of those who receive a job offer, a third of the people accept the position. How many people accept the position?', [], [{'input': {}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 718,
        "question": '100 people apply for a job at Google. Of the people that apply, only 30% receive interviews. Of those who receive interviews, 20% receive a job offer. Of those who receive a job offer, a third of the people accept the position. How many people accept the position?',
        "answer": 2,
        "examples": [{'input': {}, 'output': 2}],
        });
    fs.writeFileSync('json/718.json', json);
}
doit();
