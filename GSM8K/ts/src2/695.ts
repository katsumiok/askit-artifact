import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/695.json')) {
        console.log("Skipping 695")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('There are {{x1}} deer in a field. {{x2}} percent of them are bucks. {{x3}} percent of the bucks are {{x4}} points.  How many {{x5}} point bucks are there?', [], [{'input': {'x1': 50, 'x2': 50, 'x3': 20, 'x4': 8, 'x5': 8}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 50, 'x3': 20, 'x4': 8, 'x5': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 695,
        "question": 'There are 50 deer in a field.  50 percent of them are bucks.  20 percent of the bucks are 8 points.  How many 8 point bucks are there?',
        "answer": 5,
        "examples": [{'input': {'x1': 50, 'x2': 50, 'x3': 20, 'x4': 8, 'x5': 8}, 'output': 5}],
        });
    fs.writeFileSync('json2/695.json', json);
}
doit();
