import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/554.json')) {
        console.log("Skipping 554")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('When the water is cold Ray swims a mile in {{x1}} minutes. When the water is warm Ray swims a mile in {{x2}} minutes more than twice as long. How much longer does Ray take to swim {{x3}} miles on a hot day than a cold day?', [], [{'input': {'x1': 16, 'x2': 2, 'x3': 3}, 'output': 54}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 54;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 554,
        "question": 'When the water is cold Ray swims a mile in 16 minutes. When the water is warm Ray swims a mile in 2 minutes more than twice as long. How much longer does Ray take to swim 3 miles on a hot day than a cold day?',
        "answer": 54,
        "examples": [{'input': {'x1': 16, 'x2': 2, 'x3': 3}, 'output': 54}],
        });
    fs.writeFileSync('json2/554.json', json);
}
doit();
