import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/810.json')) {
        console.log("Skipping 810")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('In one year, the number of students on campus doubles at the end of every month. If there are {{x1}} students on campus at the beginning of the year, how many additional students would have joined by the end of May, above and beyond the number of students already on campus at the beginning of the year?', [], [{'input': {'x1': 10}, 'output': 310}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 310;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 810,
        "question": 'In one year, the number of students on campus doubles at the end of every month. If there are 10 students on campus at the beginning of the year, how many additional students would have joined by the end of May, above and beyond the number of students already on campus at the beginning of the year?',
        "answer": 310,
        "examples": [{'input': {'x1': 10}, 'output': 310}],
        });
    fs.writeFileSync('json/810.json', json);
}
doit();
