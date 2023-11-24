import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/255.json')) {
        console.log("Skipping 255")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ten stalls have {{x1}} cows each. Mr. Sylas buys {{x2}} cows and divides them equally, putting an equal number of the new cows into each of the twenty stalls. How many cows are in {{x3}} of the stalls?', [], [{'input': {'x1': 20, 'x2': 40, 'x3': 8}, 'output': 192}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 40, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 192;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 255,
        "question": 'Ten stalls have 20 cows each. Mr. Sylas buys 40 cows and divides them equally, putting an equal number of the new cows into each of the twenty stalls. How many cows are in 8 of the stalls?',
        "answer": 192,
        "examples": [{'input': {'x1': 20, 'x2': 40, 'x3': 8}, 'output': 192}],
        });
    fs.writeFileSync('json/255.json', json);
}
doit();
