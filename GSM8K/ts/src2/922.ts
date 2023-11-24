import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/922.json')) {
        console.log("Skipping 922")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Martha has been collecting shells since she turned {{x1}} years old, every month she collects one shell. By her 10th birthday, how many shells will Martha have collected?', [], [{'input': {'x1': 5}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 922,
        "question": 'Martha has been collecting shells since she turned 5 years old, every month she collects one shell. By her 10th birthday, how many shells will Martha have collected?',
        "answer": 60,
        "examples": [{'input': {'x1': 5}, 'output': 60}],
        });
    fs.writeFileSync('json2/922.json', json);
}
doit();
