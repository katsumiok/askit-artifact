import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/475.json')) {
        console.log("Skipping 475")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('It takes {{x1}} minutes of walking to break in a new pair of shoes. Jason wants to try out for the track team in three weeks. If he can walk {{x2}} days a week to break in the new shoes, how long does he have to spend walking each day?', [], [{'input': {'x1': 240, 'x2': 4}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 240, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 475,
        "question": 'It takes 240 minutes of walking to break in a new pair of shoes. Jason wants to try out for the track team in three weeks. If he can walk 4 days a week to break in the new shoes, how long does he have to spend walking each day?',
        "answer": 20,
        "examples": [{'input': {'x1': 240, 'x2': 4}, 'output': 20}],
        });
    fs.writeFileSync('json2/475.json', json);
}
doit();
