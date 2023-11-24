import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/585.json')) {
        console.log("Skipping 585")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tabitha agreed to pay John and Jill $10 an hour to help clean out her attic and basement.  Jill worked {{x1}} hours on Saturday and {{x2}} hour on Sunday.  John worked twice as long as Jill on Saturday and three times as long as Jill on Sunday.  How much more money did John earn compared to Jill?', [], [{'input': {'x1': 2, 'x2': 1}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 1});
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
        "id": 585,
        "question": 'Tabitha agreed to pay John and Jill $10 an hour to help clean out her attic and basement.  Jill worked 2 hours on Saturday and 1 hour on Sunday.  John worked twice as long as Jill on Saturday and three times as long as Jill on Sunday.  How much more money did John earn compared to Jill?',
        "answer": 40,
        "examples": [{'input': {'x1': 2, 'x2': 1}, 'output': 40}],
        });
    fs.writeFileSync('json2/585.json', json);
}
doit();
