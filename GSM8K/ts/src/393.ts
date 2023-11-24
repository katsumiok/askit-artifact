import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/393.json')) {
        console.log("Skipping 393")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carol spends {{x1}} hours writing a song, half that much time recording it, and {{x2}} minutes editing it. What percentage of her total work time did she spend editing?', [], [{'input': {'x1': 4, 'x2': 90}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 90});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 393,
        "question": 'Carol spends 4 hours writing a song, half that much time recording it, and 90 minutes editing it. What percentage of her total work time did she spend editing?',
        "answer": 20,
        "examples": [{'input': {'x1': 4, 'x2': 90}, 'output': 20}],
        });
    fs.writeFileSync('json/393.json', json);
}
doit();
