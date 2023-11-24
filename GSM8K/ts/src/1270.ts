import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1270.json')) {
        console.log("Skipping 1270")
        return;
    }
    // measure time
    const f = define<number, {}>('Gary bought a boat for $9000.  Over the first year it depreciated 30%.  The second year it depreciated another 30%.  The third year it depreciated 20%.  How much is the boat worth after the three years?', [], [{'input': {}, 'output': 3528}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3528;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1270,
        "question": 'Gary bought a boat for $9000.  Over the first year it depreciated 30%.  The second year it depreciated another 30%.  The third year it depreciated 20%.  How much is the boat worth after the three years?',
        "answer": 3528,
        "examples": [{'input': {}, 'output': 3528}],
        });
    fs.writeFileSync('json/1270.json', json);
}
doit();
