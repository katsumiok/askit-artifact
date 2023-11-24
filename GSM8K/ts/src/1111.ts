import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1111.json')) {
        console.log("Skipping 1111")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('There are currently {{x1}} red balls, {{x2}} blue balls, and {{x3}} green balls in the store. Red balls cost $9, Blue balls cost $5 and green balls cost $3. How much will the store have received after all the balls are sold?', [], [{'input': {'x1': 3, 'x2': 11, 'x3': 25}, 'output': 157}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 11, 'x3': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 157;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1111,
        "question": 'There are currently 3 red balls, 11 blue balls, and 25 green balls in the store. Red balls cost $9, Blue balls cost $5 and green balls cost $3. How much will the store have received after all the balls are sold?',
        "answer": 157,
        "examples": [{'input': {'x1': 3, 'x2': 11, 'x3': 25}, 'output': 157}],
        });
    fs.writeFileSync('json/1111.json', json);
}
doit();
