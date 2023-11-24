import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/438.json')) {
        console.log("Skipping 438")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Antoine's french onion soup recipe calls for {{x1}} pounds of onions. He likes to double that amount. His soup serves {{x2}} people. The onions are currently on sale for $2.00 a pound. He also needs {{x3}} boxes of beef stock, that are also on sale for $2.00 a box.  What is the cost per serving? (Round to the nearest integer.)", [], [{'input': {'x1': 2, 'x2': 6, 'x3': 2}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 6, 'x3': 2});
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
        "id": 438,
        "question": "Antoine's french onion soup recipe calls for 2 pounds of onions. He likes to double that amount. His soup serves 6 people. The onions are currently on sale for $2.00 a pound. He also needs 2 boxes of beef stock, that are also on sale for $2.00 a box.  What is the cost per serving? (Round to the nearest integer.)",
        "answer": 2,
        "examples": [{'input': {'x1': 2, 'x2': 6, 'x3': 2}, 'output': 2}],
        });
    fs.writeFileSync('json/438.json', json);
}
doit();
