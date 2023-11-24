import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/579.json')) {
        console.log("Skipping 579")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A boy has {{x1}} cards. His brother has {{x2}} fewer cards than he has. How many cards do they have together?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 579,
        "question": 'A boy has 5 cards. His brother has 3 fewer cards than he has. How many cards do they have together?',
        "answer": 7,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 7}],
        });
    fs.writeFileSync('json2/579.json', json);
}
doit();
