import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1230.json')) {
        console.log("Skipping 1230")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Charlie is a tennis pro.  He spends most of the day teaching others lessons on how to improve their game.  His standard fee is $80 per hour for lessons, but he reduces his rate by 25% when he is giving lessons to a veteran.   If today Charlie has {{x1}} 1-hour lessons at his standard rate and {{x2}} 1-hour lessons with a veteran, what is the total amount of money he will make for the day, in dollars?', [], [{'input': {'x1': 4, 'x2': 2}, 'output': 440}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 440;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1230,
        "question": 'Charlie is a tennis pro.  He spends most of the day teaching others lessons on how to improve their game.  His standard fee is $80 per hour for lessons, but he reduces his rate by 25% when he is giving lessons to a veteran.   If today Charlie has 4 1-hour lessons at his standard rate and 2 1-hour lessons with a veteran, what is the total amount of money he will make for the day, in dollars?',
        "answer": 440,
        "examples": [{'input': {'x1': 4, 'x2': 2}, 'output': 440}],
        });
    fs.writeFileSync('json/1230.json', json);
}
doit();
