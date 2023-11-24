import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1297.json')) {
        console.log("Skipping 1297")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tim makes a special honey and jam mix.  To make {{x1}} jar of the mixture it takes {{x2}} pounds of passion fruit and 1.5 pounds of jackfruit.  It also takes {{x3}} pounds of special honey.  The passion fruit costs $6 per pound, the jackfruit is $8 per pound, and the honey is $10 per pound.  He sells each jar for $50.  How much profit does he make selling {{x4}} jars?', [], [{'input': {'x1': 1, 'x2': 2, 'x3': 2, 'x4': 10}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 2, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1297,
        "question": 'Tim makes a special honey and jam mix.  To make 1 jar of the mixture it takes 2 pounds of passion fruit and 1.5 pounds of jackfruit.  It also takes 2 pounds of special honey.  The passion fruit costs $6 per pound, the jackfruit is $8 per pound, and the honey is $10 per pound.  He sells each jar for $50.  How much profit does he make selling 10 jars?',
        "answer": 60,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 2, 'x4': 10}, 'output': 60}],
        });
    fs.writeFileSync('json2/1297.json', json);
}
doit();
