import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/164.json')) {
        console.log("Skipping 164")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Jackie is trying to decide whether to do her taxes herself or hire an accountant. If she does the taxes herself, she'll be able to do {{x1}} fewer hours of freelance work, losing $35/hour in missed income. The accountant charges $90. How much more money will she have if she hires the accountant?", [], [{'input': {'x1': 3}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 164,
        "question": "Jackie is trying to decide whether to do her taxes herself or hire an accountant. If she does the taxes herself, she'll be able to do 3 fewer hours of freelance work, losing $35/hour in missed income. The accountant charges $90. How much more money will she have if she hires the accountant?",
        "answer": 15,
        "examples": [{'input': {'x1': 3}, 'output': 15}],
        });
    fs.writeFileSync('json/164.json', json);
}
doit();
