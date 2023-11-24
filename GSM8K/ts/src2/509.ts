import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/509.json')) {
        console.log("Skipping 509")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Sophia and Rose went together to the market to buy onions and potatoes. Rose bought {{x1}} times the number of onions and potatoes Sophia bought. If Rose bought {{x2}} onions and {{x3}} potatoes, how many onions and potatoes in total did Sophia buy at the market?', [], [{'input': {'x1': 4, 'x2': 12, 'x3': 4}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 12, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 509,
        "question": 'Sophia and Rose went together to the market to buy onions and potatoes. Rose bought 4 times the number of onions and potatoes Sophia bought. If Rose bought 12 onions and 4 potatoes, how many onions and potatoes in total did Sophia buy at the market?',
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 12, 'x3': 4}, 'output': 4}],
        });
    fs.writeFileSync('json2/509.json', json);
}
doit();
