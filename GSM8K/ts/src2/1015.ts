import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1015.json')) {
        console.log("Skipping 1015")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Anne purchased a box of sweets that contains {{x1}} packs, and each pack has {{x2}} pieces. She kept two packs and gave the rest to her {{x3}} friends equally. How many pieces of sweets did each of her friends receive?', [], [{'input': {'x1': 15, 'x2': 60, 'x3': 10}, 'output': 78}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 60, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 78;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1015,
        "question": 'Anne purchased a box of sweets that contains 15 packs, and each pack has 60 pieces. She kept two packs and gave the rest to her 10 friends equally. How many pieces of sweets did each of her friends receive?',
        "answer": 78,
        "examples": [{'input': {'x1': 15, 'x2': 60, 'x3': 10}, 'output': 78}],
        });
    fs.writeFileSync('json2/1015.json', json);
}
doit();
