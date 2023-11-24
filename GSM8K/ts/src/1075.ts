import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1075.json')) {
        console.log("Skipping 1075")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jenny goes to the florist to buy some flowers. Roses cost $2 each and $15 for a dozen. If she bought {{x1}} roses and arrived with five {{x2}} dollar bills and they only have quarters for change, how many quarters does she leave with?', [], [{'input': {'x1': 15, 'x2': 5}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1075,
        "question": 'Jenny goes to the florist to buy some flowers. Roses cost $2 each and $15 for a dozen. If she bought 15 roses and arrived with five 5 dollar bills and they only have quarters for change, how many quarters does she leave with?',
        "answer": 16,
        "examples": [{'input': {'x1': 15, 'x2': 5}, 'output': 16}],
        });
    fs.writeFileSync('json/1075.json', json);
}
doit();
