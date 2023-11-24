import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/70.json')) {
        console.log("Skipping 70")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Judy teaches {{x1}} dance classes, every day, on the weekdays and {{x2}} classes on Saturday.  If each class has {{x3}} students and she charges $15.00 per student, how much money does she make in {{x4}} week?', [], [{'input': {'x1': 5, 'x2': 8, 'x3': 15, 'x4': 1}, 'output': 7425}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8, 'x3': 15, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7425;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 70,
        "question": 'Judy teaches 5 dance classes, every day, on the weekdays and 8 classes on Saturday.  If each class has 15 students and she charges $15.00 per student, how much money does she make in 1 week?',
        "answer": 7425,
        "examples": [{'input': {'x1': 5, 'x2': 8, 'x3': 15, 'x4': 1}, 'output': 7425}],
        });
    fs.writeFileSync('json/70.json', json);
}
doit();
