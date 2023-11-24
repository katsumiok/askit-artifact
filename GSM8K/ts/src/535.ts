import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/535.json')) {
        console.log("Skipping 535")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Nick had twice as many candies as George. Then George ate {{x1}} candies. Now George has {{x2}} candies left. How many candies does Nick have?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 535,
        "question": 'Nick had twice as many candies as George. Then George ate 5 candies. Now George has 3 candies left. How many candies does Nick have?',
        "answer": 16,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 16}],
        });
    fs.writeFileSync('json/535.json', json);
}
doit();
