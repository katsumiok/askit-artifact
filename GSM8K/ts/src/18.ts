import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/18.json')) {
        console.log("Skipping 18")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Claire makes a {{x1}} egg omelet every morning for breakfast.  How many dozens of eggs will she eat in {{x2}} weeks?', [], [{'input': {'x1': 3, 'x2': 4}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 18,
        "question": 'Claire makes a 3 egg omelet every morning for breakfast.  How many dozens of eggs will she eat in 4 weeks?',
        "answer": 7,
        "examples": [{'input': {'x1': 3, 'x2': 4}, 'output': 7}],
        });
    fs.writeFileSync('json/18.json', json);
}
doit();
