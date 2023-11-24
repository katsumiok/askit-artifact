import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/194.json')) {
        console.log("Skipping 194")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Violetta wants to buy new crayons. She needs them in {{x1}} different colors and prepared $20 for this purchase. One crayon costs $2. How much change will she get?', [], [{'input': {'x1': 5}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
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
        "id": 194,
        "question": 'Violetta wants to buy new crayons. She needs them in 5 different colors and prepared $20 for this purchase. One crayon costs $2. How much change will she get?',
        "answer": 10,
        "examples": [{'input': {'x1': 5}, 'output': 10}],
        });
    fs.writeFileSync('json2/194.json', json);
}
doit();
