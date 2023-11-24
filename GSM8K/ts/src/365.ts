import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/365.json')) {
        console.log("Skipping 365")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} girls in the park. If there are twice the number of boys in the park, how many kids are in the park?', [], [{'input': {'x1': 6}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 365,
        "question": 'There are 6 girls in the park. If there are twice the number of boys in the park, how many kids are in the park?',
        "answer": 18,
        "examples": [{'input': {'x1': 6}, 'output': 18}],
        });
    fs.writeFileSync('json/365.json', json);
}
doit();
