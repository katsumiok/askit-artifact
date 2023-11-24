import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/287.json')) {
        console.log("Skipping 287")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A 76-star flag has three rows of {{x1}} stars, two rows of {{x2}} stars and the rest are 5-star rows. How many rows of {{x3}} stars are there altogether on the flag?', [], [{'input': {'x1': 8, 'x2': 6, 'x3': 5}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 6, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 287,
        "question": 'A 76-star flag has three rows of 8 stars, two rows of 6 stars and the rest are 5-star rows. How many rows of 5 stars are there altogether on the flag?',
        "answer": 8,
        "examples": [{'input': {'x1': 8, 'x2': 6, 'x3': 5}, 'output': 8}],
        });
    fs.writeFileSync('json2/287.json', json);
}
doit();
