import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/722.json')) {
        console.log("Skipping 722")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Ron is fed up with the pothole in front of his house. If it doesn't get fixed, it's going to do $450 worth of damage to his car. Unfortunately, the city council refuses to fix it, and will fine Ron $120 for unauthorized road maintenance if he fixes it himself. Ron will also have to buy {{x1}} buckets of asphalt that each cost $25. How much money does Ron save by fixing the pothole?", [], [{'input': {'x1': 3}, 'output': 255}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 255;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 722,
        "question": "Ron is fed up with the pothole in front of his house. If it doesn't get fixed, it's going to do $450 worth of damage to his car. Unfortunately, the city council refuses to fix it, and will fine Ron $120 for unauthorized road maintenance if he fixes it himself. Ron will also have to buy 3 buckets of asphalt that each cost $25. How much money does Ron save by fixing the pothole?",
        "answer": 255,
        "examples": [{'input': {'x1': 3}, 'output': 255}],
        });
    fs.writeFileSync('json2/722.json', json);
}
doit();
