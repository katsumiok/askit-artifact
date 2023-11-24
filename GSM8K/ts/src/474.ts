import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/474.json')) {
        console.log("Skipping 474")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('At a certain grade level, three-fourths of students have a desktop computer at home. If {{x1}} students do not have desktop computers, how many students are there at that grade level?', [], [{'input': {'x1': 20}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 474,
        "question": 'At a certain grade level, three-fourths of students have a desktop computer at home. If 20 students do not have desktop computers, how many students are there at that grade level?',
        "answer": 80,
        "examples": [{'input': {'x1': 20}, 'output': 80}],
        });
    fs.writeFileSync('json/474.json', json);
}
doit();
