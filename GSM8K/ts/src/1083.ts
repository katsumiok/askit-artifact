import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1083.json')) {
        console.log("Skipping 1083")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The bananas at the supermarket cost $0.80 each, or a bunch for $3.00.  Jenny buys {{x1}} bunches that average {{x2}} bananas per bunch. How much money, in dollars, did she save by buying the bananas in bunches instead of individually?', [], [{'input': {'x1': 10, 'x2': 4}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1083,
        "question": 'The bananas at the supermarket cost $0.80 each, or a bunch for $3.00.  Jenny buys 10 bunches that average 4 bananas per bunch. How much money, in dollars, did she save by buying the bananas in bunches instead of individually?',
        "answer": 2,
        "examples": [{'input': {'x1': 10, 'x2': 4}, 'output': 2}],
        });
    fs.writeFileSync('json/1083.json', json);
}
doit();
