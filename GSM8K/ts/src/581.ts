import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/581.json')) {
        console.log("Skipping 581")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Max plans to watch two movies this weekend. The first movie is {{x1}} hour and {{x2}} minutes long while the second movie is {{x3}} hours and {{x4}} minutes long. How many minutes will it take Max to watch the two movies?', [], [{'input': {'x1': 1, 'x2': 30, 'x3': 2, 'x4': 5}, 'output': 215}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 30, 'x3': 2, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 215;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 581,
        "question": 'Max plans to watch two movies this weekend. The first movie is 1 hour and 30 minutes long while the second movie is 2 hours and 5 minutes long. How many minutes will it take Max to watch the two movies?',
        "answer": 215,
        "examples": [{'input': {'x1': 1, 'x2': 30, 'x3': 2, 'x4': 5}, 'output': 215}],
        });
    fs.writeFileSync('json/581.json', json);
}
doit();
