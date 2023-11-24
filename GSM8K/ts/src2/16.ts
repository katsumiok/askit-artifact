import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/16.json')) {
        console.log("Skipping 16")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Two trains leave San Rafael at the same time. They begin traveling westward, both traveling for {{x1}} miles. The next day, they travel northwards, covering {{x2}} miles. What's the distance covered by each train in the two days?", [], [{'input': {'x1': 80, 'x2': 150}, 'output': 230}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 150});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 230;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 16,
        "question": "Two trains leave San Rafael at the same time. They begin traveling westward, both traveling for 80 miles. The next day, they travel northwards, covering 150 miles. What's the distance covered by each train in the two days?",
        "answer": 230,
        "examples": [{'input': {'x1': 80, 'x2': 150}, 'output': 230}],
        });
    fs.writeFileSync('json2/16.json', json);
}
doit();
