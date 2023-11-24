import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1205.json')) {
        console.log("Skipping 1205")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Bernie has {{x1}} dogs. They each need a certain amount of exercise per day. The first needs to walk {{x2}} mile. The second needs to walk {{x3}} miles. The third needs to walk {{x4}} miles. On average, they need to walk {{x5}} miles per day. How many miles does the last dog need?', [], [{'input': {'x1': 4, 'x2': 1, 'x3': 4, 'x4': 3, 'x5': 3}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 1, 'x3': 4, 'x4': 3, 'x5': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1205,
        "question": 'Bernie has 4 dogs. They each need a certain amount of exercise per day. The first needs to walk 1 mile. The second needs to walk 4 miles. The third needs to walk 3 miles. On average, they need to walk 3 miles per day. How many miles does the last dog need?',
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 1, 'x3': 4, 'x4': 3, 'x5': 3}, 'output': 4}],
        });
    fs.writeFileSync('json2/1205.json', json);
}
doit();
