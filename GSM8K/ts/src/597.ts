import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/597.json')) {
        console.log("Skipping 597")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The three angles in a triangle add up to {{x1}} degrees. One angle is twice the smallest angle, and one angle is three times the smallest angle. What is the measure of the largest angle in the triangle, in degrees?', [], [{'input': {'x1': 180}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 180});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 597,
        "question": 'The three angles in a triangle add up to 180 degrees. One angle is twice the smallest angle, and one angle is three times the smallest angle. What is the measure of the largest angle in the triangle, in degrees?',
        "answer": 90,
        "examples": [{'input': {'x1': 180}, 'output': 90}],
        });
    fs.writeFileSync('json/597.json', json);
}
doit();
