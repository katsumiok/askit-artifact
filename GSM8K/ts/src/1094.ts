import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1094.json')) {
        console.log("Skipping 1094")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("Ellen decided to play a prank on her friend. She got a case of {{x1}} sodas and shook {{x2}} of them up. Then she took {{x3}} unshaken soda for herself and left. Ellen's brother stopped by and took {{x4}} of the shaken sodas and {{x5}} of the unshaken sodas, then Ellen's friend came along. What is the likelihood, expressed as a percentage, that Ellen's friend gets sprayed with soda from a shaken can?", [], [{'input': {'x1': 12, 'x2': 3, 'x3': 1, 'x4': 1, 'x5': 2}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 3, 'x3': 1, 'x4': 1, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1094,
        "question": "Ellen decided to play a prank on her friend. She got a case of 12 sodas and shook 3 of them up. Then she took 1 unshaken soda for herself and left. Ellen's brother stopped by and took 1 of the shaken sodas and 2 of the unshaken sodas, then Ellen's friend came along. What is the likelihood, expressed as a percentage, that Ellen's friend gets sprayed with soda from a shaken can?",
        "answer": 25,
        "examples": [{'input': {'x1': 12, 'x2': 3, 'x3': 1, 'x4': 1, 'x5': 2}, 'output': 25}],
        });
    fs.writeFileSync('json/1094.json', json);
}
doit();
