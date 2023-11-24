import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/414.json')) {
        console.log("Skipping 414")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Misha picks out {{x1}} blouses from the 30% off rack.  The regular price for each blouse is $20.  How much is the total cost of the discounted blouses?', [], [{'input': {'x1': 4}, 'output': 56}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 56;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 414,
        "question": 'Misha picks out 4 blouses from the 30% off rack.  The regular price for each blouse is $20.  How much is the total cost of the discounted blouses?',
        "answer": 56,
        "examples": [{'input': {'x1': 4}, 'output': 56}],
        });
    fs.writeFileSync('json2/414.json', json);
}
doit();
