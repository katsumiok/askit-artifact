import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/962.json')) {
        console.log("Skipping 962")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jen decides to travel to {{x1}} different countries.  He has to pay $400 for the supplies he needs, in total.  The tickets for travel cost, in total, 50% more than the supplies.  How much does travel cost?', [], [{'input': {'x1': 3}, 'output': 1000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 962,
        "question": 'Jen decides to travel to 3 different countries.  He has to pay $400 for the supplies he needs, in total.  The tickets for travel cost, in total, 50% more than the supplies.  How much does travel cost?',
        "answer": 1000,
        "examples": [{'input': {'x1': 3}, 'output': 1000}],
        });
    fs.writeFileSync('json/962.json', json);
}
doit();
