import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1010.json')) {
        console.log("Skipping 1010")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bethany can run {{x1}} laps on the track in one hour.  Trey can run {{x2}} more laps than Bethany.  Shaelyn can run half as many laps as Trey.  Quinn can run {{x3}} fewer laps than Shaelyn.  How many more laps can Bethany run compared to Quinn?', [], [{'input': {'x1': 10, 'x2': 4, 'x3': 2}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1010,
        "question": 'Bethany can run 10 laps on the track in one hour.  Trey can run 4 more laps than Bethany.  Shaelyn can run half as many laps as Trey.  Quinn can run 2 fewer laps than Shaelyn.  How many more laps can Bethany run compared to Quinn?',
        "answer": 5,
        "examples": [{'input': {'x1': 10, 'x2': 4, 'x3': 2}, 'output': 5}],
        });
    fs.writeFileSync('json/1010.json', json);
}
doit();
