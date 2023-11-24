import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/113.json')) {
        console.log("Skipping 113")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ryan plants {{x1}} flowers a day in his garden. After {{x2}} days, how many flowers does he have if {{x3}} did not grow?', [], [{'input': {'x1': 2, 'x2': 15, 'x3': 5}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 15, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 113,
        "question": 'Ryan plants 2 flowers a day in his garden. After 15 days, how many flowers does he have if 5 did not grow?',
        "answer": 25,
        "examples": [{'input': {'x1': 2, 'x2': 15, 'x3': 5}, 'output': 25}],
        });
    fs.writeFileSync('json/113.json', json);
}
doit();
