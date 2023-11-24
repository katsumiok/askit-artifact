import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/911.json')) {
        console.log("Skipping 911")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Colby works for a manufacturing company in the packaging division.  He gets paid $0.20 for every package he completes. If he completes {{x1}} less than {{x2}} packages per hour, how much money, in dollars, does he earn in a typical eight-hour workday?', [], [{'input': {'x1': 10, 'x2': 50}, 'output': 64}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 911,
        "question": 'Colby works for a manufacturing company in the packaging division.  He gets paid $0.20 for every package he completes. If he completes 10 less than 50 packages per hour, how much money, in dollars, does he earn in a typical eight-hour workday?',
        "answer": 64,
        "examples": [{'input': {'x1': 10, 'x2': 50}, 'output': 64}],
        });
    fs.writeFileSync('json/911.json', json);
}
doit();
