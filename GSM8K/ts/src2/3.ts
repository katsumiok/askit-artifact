import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/3.json')) {
        console.log("Skipping 3")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('James decides to run {{x1}} sprints {{x2}} times a week.  He runs {{x3}} meters each sprint.  How many total meters does he run a week?', [], [{'input': {'x1': 3, 'x2': 3, 'x3': 60}, 'output': 540}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3, 'x3': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 540;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 3,
        "question": 'James decides to run 3 sprints 3 times a week.  He runs 60 meters each sprint.  How many total meters does he run a week?',
        "answer": 540,
        "examples": [{'input': {'x1': 3, 'x2': 3, 'x3': 60}, 'output': 540}],
        });
    fs.writeFileSync('json2/3.json', json);
}
doit();
