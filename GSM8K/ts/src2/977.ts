import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/977.json')) {
        console.log("Skipping 977")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Pamela reapplies an ounce of sunscreen every hour she's outside.  Her sunscreen comes in 8-ounce bottles.  While on vacation, if she will be outside {{x1}} hours a day over {{x2}} days, how many bottles of sunscreen will she need to pack?", [], [{'input': {'x1': 4, 'x2': 8}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 977,
        "question": "Pamela reapplies an ounce of sunscreen every hour she's outside.  Her sunscreen comes in 8-ounce bottles.  While on vacation, if she will be outside 4 hours a day over 8 days, how many bottles of sunscreen will she need to pack?",
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 8}, 'output': 4}],
        });
    fs.writeFileSync('json2/977.json', json);
}
doit();
