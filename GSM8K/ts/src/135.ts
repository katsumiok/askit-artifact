import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/135.json')) {
        console.log("Skipping 135")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Brian's friend Bobby has {{x1}} fewer than {{x2}} times as many video games as Brian does.  If Brian has {{x3}} video games but lost {{x4}} right before the comparison was made, how many does Bobby have?", [], [{'input': {'x1': 5, 'x2': 3, 'x3': 20, 'x4': 5}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 20, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 135,
        "question": "Brian's friend Bobby has 5 fewer than 3 times as many video games as Brian does.  If Brian has 20 video games but lost 5 right before the comparison was made, how many does Bobby have?",
        "answer": 40,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 20, 'x4': 5}, 'output': 40}],
        });
    fs.writeFileSync('json/135.json', json);
}
doit();
