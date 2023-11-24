import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/611.json')) {
        console.log("Skipping 611")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John decides to build a program capable of identifying cancer cells.  He gets initial funding of $100,000 for the first {{x1}} months of research.  His research ends up taking {{x2}} times that long and every month after those first {{x3}} took 50% more funding per month.  How much did his research cost?', [], [{'input': {'x1': 5, 'x2': 10, 'x3': 5}, 'output': 1450000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 10, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1450000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 611,
        "question": 'John decides to build a program capable of identifying cancer cells.  He gets initial funding of $100,000 for the first 5 months of research.  His research ends up taking 10 times that long and every month after those first 5 took 50% more funding per month.  How much did his research cost?',
        "answer": 1450000,
        "examples": [{'input': {'x1': 5, 'x2': 10, 'x3': 5}, 'output': 1450000}],
        });
    fs.writeFileSync('json2/611.json', json);
}
doit();
