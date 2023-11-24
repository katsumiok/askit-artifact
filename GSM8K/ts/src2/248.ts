import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/248.json')) {
        console.log("Skipping 248")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A chef bought {{x1}} bags of onions. Each bag weighs {{x2}} pounds. A pound of onions cost $1.50. How much did the chef spend?', [], [{'input': {'x1': 4, 'x2': 50}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 248,
        "question": 'A chef bought 4 bags of onions. Each bag weighs 50 pounds. A pound of onions cost $1.50. How much did the chef spend?',
        "answer": 300,
        "examples": [{'input': {'x1': 4, 'x2': 50}, 'output': 300}],
        });
    fs.writeFileSync('json2/248.json', json);
}
doit();
