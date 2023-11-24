import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1003.json')) {
        console.log("Skipping 1003")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A dance studio offers lessons to students. It costs $25 per session to rent the studio plus $1.50 per student per session. At present, the dance studio has {{x1}} students and is rented {{x2}} days a week. How much are the expected earnings of the dance studio in a month?', [], [{'input': {'x1': 10, 'x2': 3}, 'output': 480}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 480;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1003,
        "question": 'A dance studio offers lessons to students. It costs $25 per session to rent the studio plus $1.50 per student per session. At present, the dance studio has 10 students and is rented 3 days a week. How much are the expected earnings of the dance studio in a month?',
        "answer": 480,
        "examples": [{'input': {'x1': 10, 'x2': 3}, 'output': 480}],
        });
    fs.writeFileSync('json/1003.json', json);
}
doit();
