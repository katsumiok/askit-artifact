import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/561.json')) {
        console.log("Skipping 561")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('If Mark weighs {{x1}} pounds and Susan weighs {{x2}} pounds less than Mark.  And their friend Bob weighs twice as much as Susan.  What is the average weight of the {{x3}} friends?', [], [{'input': {'x1': 150, 'x2': 20, 'x3': 3}, 'output': 180}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 20, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 561,
        "question": 'If Mark weighs 150 pounds and Susan weighs 20 pounds less than Mark.  And their friend Bob weighs twice as much as Susan.  What is the average weight of the 3 friends?',
        "answer": 180,
        "examples": [{'input': {'x1': 150, 'x2': 20, 'x3': 3}, 'output': 180}],
        });
    fs.writeFileSync('json/561.json', json);
}
doit();
