import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/944.json')) {
        console.log("Skipping 944")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jen is planning to sell her root crops. She has {{x1}} yams which can be sold at $1.5 each, {{x2}} sweet potatoes that cost $2 each, and {{x3}} carrots which cost $1.25 each. If she sells everything, how much will she earn?', [], [{'input': {'x1': 6, 'x2': 10, 'x3': 4}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 10, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 944,
        "question": 'Jen is planning to sell her root crops. She has 6 yams which can be sold at $1.5 each, 10 sweet potatoes that cost $2 each, and 4 carrots which cost $1.25 each. If she sells everything, how much will she earn?',
        "answer": 34,
        "examples": [{'input': {'x1': 6, 'x2': 10, 'x3': 4}, 'output': 34}],
        });
    fs.writeFileSync('json2/944.json', json);
}
doit();
