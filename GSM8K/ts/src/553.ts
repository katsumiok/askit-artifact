import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/553.json')) {
        console.log("Skipping 553")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Bill is trying to figure out how many water bottles he needs to buy for his party.  He started out with {{x1}} cases of water which have {{x2}} bottles each. He has {{x3}} guests that will be arriving, and he wants to have {{x4}} bottles of water for each guest. How many additional bottles of water will he need to buy?', [], [{'input': {'x1': 2, 'x2': 24, 'x3': 70, 'x4': 2}, 'output': 92}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 24, 'x3': 70, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 92;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 553,
        "question": 'Bill is trying to figure out how many water bottles he needs to buy for his party.  He started out with 2 cases of water which have 24 bottles each. He has 70 guests that will be arriving, and he wants to have 2 bottles of water for each guest. How many additional bottles of water will he need to buy?',
        "answer": 92,
        "examples": [{'input': {'x1': 2, 'x2': 24, 'x3': 70, 'x4': 2}, 'output': 92}],
        });
    fs.writeFileSync('json/553.json', json);
}
doit();
