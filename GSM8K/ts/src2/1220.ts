import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1220.json')) {
        console.log("Skipping 1220")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ian has a board that is {{x1}} feet long. He decides to make a cut so he can have two pieces. The longer piece is {{x2}} times longer than the shorter piece. How long is the longer piece?', [], [{'input': {'x1': 40, 'x2': 4}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1220,
        "question": 'Ian has a board that is 40 feet long. He decides to make a cut so he can have two pieces. The longer piece is 4 times longer than the shorter piece. How long is the longer piece?',
        "answer": 32,
        "examples": [{'input': {'x1': 40, 'x2': 4}, 'output': 32}],
        });
    fs.writeFileSync('json2/1220.json', json);
}
doit();
