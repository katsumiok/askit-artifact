import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/133.json')) {
        console.log("Skipping 133")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('On Monday, Walt walked {{x1}} miles. Tuesday, he walked {{x2}} times as many miles as he walked on Monday. His total mileage Monday through Wednesday was {{x3}} miles. How many miles did he walk on Wednesday?', [], [{'input': {'x1': 4, 'x2': 6, 'x3': 41}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 6, 'x3': 41});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 133,
        "question": 'On Monday, Walt walked 4 miles. Tuesday, he walked 6 times as many miles as he walked on Monday. His total mileage Monday through Wednesday was 41 miles. How many miles did he walk on Wednesday?',
        "answer": 13,
        "examples": [{'input': {'x1': 4, 'x2': 6, 'x3': 41}, 'output': 13}],
        });
    fs.writeFileSync('json/133.json', json);
}
doit();
