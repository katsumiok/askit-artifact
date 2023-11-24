import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/868.json')) {
        console.log("Skipping 868")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("A three-ounce box of flavored jello makes {{x1}} small jello cups.  Greg wants to make small jello cups for his son's outdoor birthday party.  There will be {{x2}} kids and he wants to have enough so that each kid can have {{x3}} jello cups.  Jello is currently on sale for $1.25.  How much will he spend on jello?", [], [{'input': {'x1': 10, 'x2': 30, 'x3': 4}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 30, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 868,
        "question": "A three-ounce box of flavored jello makes 10 small jello cups.  Greg wants to make small jello cups for his son's outdoor birthday party.  There will be 30 kids and he wants to have enough so that each kid can have 4 jello cups.  Jello is currently on sale for $1.25.  How much will he spend on jello?",
        "answer": 15,
        "examples": [{'input': {'x1': 10, 'x2': 30, 'x3': 4}, 'output': 15}],
        });
    fs.writeFileSync('json/868.json', json);
}
doit();
