import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/571.json')) {
        console.log("Skipping 571")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Leah just got a new kitten. Spaying her cost $200, her {{x1}} vaccines costs $20 each, and the kitten broke {{x2}} vases that cost $12 each. How much has the kitten cost so far?', [], [{'input': {'x1': 3, 'x2': 4}, 'output': 308}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 308;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 571,
        "question": 'Leah just got a new kitten. Spaying her cost $200, her 3 vaccines costs $20 each, and the kitten broke 4 vases that cost $12 each. How much has the kitten cost so far?',
        "answer": 308,
        "examples": [{'input': {'x1': 3, 'x2': 4}, 'output': 308}],
        });
    fs.writeFileSync('json2/571.json', json);
}
doit();
