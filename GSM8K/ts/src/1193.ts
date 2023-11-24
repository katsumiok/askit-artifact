import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1193.json')) {
        console.log("Skipping 1193")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jason was told he could earn $3.00 for doing his laundry,  $1.50 for cleaning his room, $0.75 for taking the trash to the curb each week and $0.50 for emptying the dishwasher.  In a two week period, Jason emptied the dishwasher {{x1}} times, did his laundry once, took the trash out twice and cleaned his room once.  How much money did Jason earn?', [], [{'input': {'x1': 6}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1193,
        "question": 'Jason was told he could earn $3.00 for doing his laundry,  $1.50 for cleaning his room, $0.75 for taking the trash to the curb each week and $0.50 for emptying the dishwasher.  In a two week period, Jason emptied the dishwasher 6 times, did his laundry once, took the trash out twice and cleaned his room once.  How much money did Jason earn?',
        "answer": 9,
        "examples": [{'input': {'x1': 6}, 'output': 9}],
        });
    fs.writeFileSync('json/1193.json', json);
}
doit();
