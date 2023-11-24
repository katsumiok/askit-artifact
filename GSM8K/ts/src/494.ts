import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/494.json')) {
        console.log("Skipping 494")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('9 out of {{x1}} cheerleaders are 64" tall.  The 10th cheerleader is 60" tall.  If they build a human pyramid, where {{x2}} girls are on the bottom, {{x3}} stand on top of the 4, {{x4}} stand on top of the {{x5}} and the shortest girl is at the top, how tall is the human pyramid in feet?', [], [{'input': {'x1': 10, 'x2': 4, 'x3': 3, 'x4': 2, 'x5': 3}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4, 'x3': 3, 'x4': 2, 'x5': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 494,
        "question": '9 out of 10 cheerleaders are 64" tall.  The 10th cheerleader is 60" tall.  If they build a human pyramid, where 4 girls are on the bottom,  3 stand on top of the 4, 2 stand on top of the 3 and the shortest girl is at the top, how tall is the human pyramid in feet?',
        "answer": 21,
        "examples": [{'input': {'x1': 10, 'x2': 4, 'x3': 3, 'x4': 2, 'x5': 3}, 'output': 21}],
        });
    fs.writeFileSync('json/494.json', json);
}
doit();
