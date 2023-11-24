import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1214.json')) {
        console.log("Skipping 1214")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Jordan has {{x1}} children who wear diapers.  Each child requires {{x2}} diaper changes per day.  Jordan's wife changes half of the diapers.  How many diapers does Jordan change per day?", [], [{'input': {'x1': 2, 'x2': 5}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1214,
        "question": "Jordan has 2 children who wear diapers.  Each child requires 5 diaper changes per day.  Jordan's wife changes half of the diapers.  How many diapers does Jordan change per day?",
        "answer": 5,
        "examples": [{'input': {'x1': 2, 'x2': 5}, 'output': 5}],
        });
    fs.writeFileSync('json2/1214.json', json);
}
doit();
