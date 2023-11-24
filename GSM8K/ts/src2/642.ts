import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/642.json')) {
        console.log("Skipping 642")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('James buys a new wardrobe.  He buys {{x1}} suits and {{x2}} dress pants.  He also buys {{x3}} dress shirts per suit.  The suits cost $750 each and the dress pants cost 1/5 that cost.  The dress shirts were $60 each.  How much did everything cost?', [], [{'input': {'x1': 10, 'x2': 10, 'x3': 3}, 'output': 10800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 10, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 642,
        "question": 'James buys a new wardrobe.  He buys 10 suits and 10 dress pants.  He also buys 3 dress shirts per suit.  The suits cost $750 each and the dress pants cost 1/5 that cost.  The dress shirts were $60 each.  How much did everything cost?',
        "answer": 10800,
        "examples": [{'input': {'x1': 10, 'x2': 10, 'x3': 3}, 'output': 10800}],
        });
    fs.writeFileSync('json2/642.json', json);
}
doit();
