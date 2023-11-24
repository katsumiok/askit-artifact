import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/348.json')) {
        console.log("Skipping 348")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A factory used to make tractors, but now makes silos. When they made tractors, they sold {{x1}} tractors a day and made $100 per tractor. Now, they sell {{x2}} silos a day, and make $220 per silo. What percentage more are they making per day now?', [], [{'input': {'x1': 10, 'x2': 5}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 348,
        "question": 'A factory used to make tractors, but now makes silos. When they made tractors, they sold 10 tractors a day and made $100 per tractor. Now, they sell 5 silos a day, and make $220 per silo. What percentage more are they making per day now?',
        "answer": 10,
        "examples": [{'input': {'x1': 10, 'x2': 5}, 'output': 10}],
        });
    fs.writeFileSync('json2/348.json', json);
}
doit();
