import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/32.json')) {
        console.log("Skipping 32")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John takes care of {{x1}} dogs.  Each dog takes .5 hours a day to walk and take care of their business.  How many hours a week does he spend taking care of dogs?', [], [{'input': {'x1': 10}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 32,
        "question": 'John takes care of 10 dogs.  Each dog takes .5 hours a day to walk and take care of their business.  How many hours a week does he spend taking care of dogs?',
        "answer": 35,
        "examples": [{'input': {'x1': 10}, 'output': 35}],
        });
    fs.writeFileSync('json/32.json', json);
}
doit();
