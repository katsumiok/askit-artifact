import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/539.json')) {
        console.log("Skipping 539")
        return;
    }
    // measure time
    const f = define<number, {}>('My wife wants to evenly split the check but wants me to pay an additional 20% tip on our $50 dinner bill. How much did I end up paying?', [], [{'input': {}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 539,
        "question": 'My wife wants to evenly split the check but wants me to pay an additional 20% tip on our $50 dinner bill. How much did I end up paying?',
        "answer": 35,
        "examples": [{'input': {}, 'output': 35}],
        });
    fs.writeFileSync('json/539.json', json);
}
doit();
