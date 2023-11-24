import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/503.json')) {
        console.log("Skipping 503")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The rug is {{x1}} feet wider than the chair. The couch is {{x2}} feet longer than twice the width of the rug. If the chair is {{x3}} feet wide. How many feet long is the couch?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 3}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 3});
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
        "id": 503,
        "question": 'The rug is 5 feet wider than the chair. The couch is 2 feet longer than twice the width of the rug. If the chair is 3 feet wide. How many feet long is the couch?',
        "answer": 18,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 3}, 'output': 18}],
        });
    fs.writeFileSync('json/503.json', json);
}
doit();
