import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/317.json')) {
        console.log("Skipping 317")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John fills a {{x1}} foot by {{x2}} foot pool that is {{x3}} feet deep.  It cost $.1 per cubic foot to fill.  How much does it cost to fill?', [], [{'input': {'x1': 6, 'x2': 4, 'x3': 5}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 317,
        "question": 'John fills a 6 foot by 4 foot pool that is 5 feet deep.  It cost $.1 per cubic foot to fill.  How much does it cost to fill?',
        "answer": 12,
        "examples": [{'input': {'x1': 6, 'x2': 4, 'x3': 5}, 'output': 12}],
        });
    fs.writeFileSync('json2/317.json', json);
}
doit();
