import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/443.json')) {
        console.log("Skipping 443")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Jon runs a triathlon.  It takes him {{x1}} minutes for the swim, an hour and {{x2}} minutes for the bike ride and {{x3}} minutes for the run.  Compared to Jon, James finishes the swim 10% faster but takes {{x4}} minutes longer on the bike.  If Jon won by {{x5}} minutes, how long did it take James to do the run?', [], [{'input': {'x1': 40, 'x2': 20, 'x3': 50, 'x4': 5, 'x5': 10}, 'output': 59}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 20, 'x3': 50, 'x4': 5, 'x5': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 59;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 443,
        "question": 'Jon runs a triathlon.  It takes him 40 minutes for the swim, an hour and 20 minutes for the bike ride and 50 minutes for the run.  Compared to Jon, James finishes the swim 10% faster but takes 5 minutes longer on the bike.  If Jon won by 10 minutes, how long did it take James to do the run?',
        "answer": 59,
        "examples": [{'input': {'x1': 40, 'x2': 20, 'x3': 50, 'x4': 5, 'x5': 10}, 'output': 59}],
        });
    fs.writeFileSync('json/443.json', json);
}
doit();
