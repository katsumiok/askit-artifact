import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/857.json')) {
        console.log("Skipping 857")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The amount of water passing through a river at one point in time is {{x1}} gallons. After a day of heavy rain, the amount of water passing through the river doubles at the same point. If the volume of water passing through the river at that point increases by {{x2}} gallons on the third day, calculate the total amount of water passing through the river at that point.', [], [{'input': {'x1': 4000, 'x2': 6000}, 'output': 14000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4000, 'x2': 6000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 857,
        "question": 'The amount of water passing through a river at one point in time is 4000 gallons. After a day of heavy rain, the amount of water passing through the river doubles at the same point. If the volume of water passing through the river at that point increases by 6000 gallons on the third day, calculate the total amount of water passing through the river at that point.',
        "answer": 14000,
        "examples": [{'input': {'x1': 4000, 'x2': 6000}, 'output': 14000}],
        });
    fs.writeFileSync('json/857.json', json);
}
doit();
