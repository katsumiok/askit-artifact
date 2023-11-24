import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1312.json')) {
        console.log("Skipping 1312")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Tom's restaurant gets {{x1}} reservations a night.  They normally order {{x2}} meals that cost $5 each and a $5 bottle of wine.  How much do they make a week if they are open {{x3}} days a week?", [], [{'input': {'x1': 6, 'x2': 2, 'x3': 2}, 'output': 180}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1312,
        "question": "Tom's restaurant gets 6 reservations a night.  They normally order 2 meals that cost $5 each and a $5 bottle of wine.  How much do they make a week if they are open 2 days a week?",
        "answer": 180,
        "examples": [{'input': {'x1': 6, 'x2': 2, 'x3': 2}, 'output': 180}],
        });
    fs.writeFileSync('json/1312.json', json);
}
doit();
