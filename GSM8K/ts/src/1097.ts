import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1097.json')) {
        console.log("Skipping 1097")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mary and John got married last weekend.  There were {{x1}} private cars and {{x2}} buses parked outside the church.  After the ceremony, each bus carried {{x3}} people and each car carried {{x4}} people. How many people were inside the church?', [], [{'input': {'x1': 20, 'x2': 12, 'x3': 35, 'x4': 3}, 'output': 480}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 12, 'x3': 35, 'x4': 3});
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
        "id": 1097,
        "question": 'Mary and John got married last weekend.  There were 20 private cars and 12 buses parked outside the church.  After the ceremony, each bus carried 35 people and each car carried 3 people. How many people were inside the church?',
        "answer": 480,
        "examples": [{'input': {'x1': 20, 'x2': 12, 'x3': 35, 'x4': 3}, 'output': 480}],
        });
    fs.writeFileSync('json/1097.json', json);
}
doit();
