import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/568.json')) {
        console.log("Skipping 568")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Three teenagers are playing soccer on the weekend. Richie, the first teenager, scored {{x1}} more goals than Mark and scored {{x2}} more goals than Anna. If Richie scored {{x3}} goals, how many goals did all three teenagers score?', [], [{'input': {'x1': 20, 'x2': 45, 'x3': 80}, 'output': 175}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 45, 'x3': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 175;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 568,
        "question": 'Three teenagers are playing soccer on the weekend. Richie, the first teenager, scored 20 more goals than Mark and scored 45 more goals than Anna. If Richie scored 80 goals, how many goals did all three teenagers score?',
        "answer": 175,
        "examples": [{'input': {'x1': 20, 'x2': 45, 'x3': 80}, 'output': 175}],
        });
    fs.writeFileSync('json/568.json', json);
}
doit();
