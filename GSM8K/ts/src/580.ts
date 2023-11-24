import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/580.json')) {
        console.log("Skipping 580")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Maggie's oven is malfunctioning. When she sets it to {{x1}} the actual temperature is 468. If it's off by the same percentage for any recipe, what temperature should she set it at if her recipe calls for {{x2}} degrees?", [], [{'input': {'x1': 450, 'x2': 520}, 'output': 500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 450, 'x2': 520});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 580,
        "question": "Maggie's oven is malfunctioning. When she sets it to 450 the actual temperature is 468. If it's off by the same percentage for any recipe, what temperature should she set it at if her recipe calls for 520 degrees?",
        "answer": 500,
        "examples": [{'input': {'x1': 450, 'x2': 520}, 'output': 500}],
        });
    fs.writeFileSync('json/580.json', json);
}
doit();
