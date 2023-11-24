import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/613.json')) {
        console.log("Skipping 613")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("A Reddit group has {{x1}} members. If each member posts an average of {{x2}} posts per day, what's the total number of posts that the group will have in March?", [], [{'input': {'x1': 1000, 'x2': 3}, 'output': 93000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 93000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 613,
        "question": "A Reddit group has 1000 members. If each member posts an average of 3 posts per day, what's the total number of posts that the group will have in March?",
        "answer": 93000,
        "examples": [{'input': {'x1': 1000, 'x2': 3}, 'output': 93000}],
        });
    fs.writeFileSync('json2/613.json', json);
}
doit();
