import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1149.json')) {
        console.log("Skipping 1149")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jen got {{x1}} fish.  They each need $1 worth of food a day.  How much does she spend on food in the month of May?', [], [{'input': {'x1': 3}, 'output': 93}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 93;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1149,
        "question": 'Jen got 3 fish.  They each need $1 worth of food a day.  How much does she spend on food in the month of May?',
        "answer": 93,
        "examples": [{'input': {'x1': 3}, 'output': 93}],
        });
    fs.writeFileSync('json/1149.json', json);
}
doit();
