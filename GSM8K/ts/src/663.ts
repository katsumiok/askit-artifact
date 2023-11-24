import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/663.json')) {
        console.log("Skipping 663")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('James delivers {{x1}} newspapers in a day. He delivers {{x2}} newspapers to District A, some to District B and {{x3}} newspapers to District C. How many newspapers does he deliver to District B?', [], [{'input': {'x1': 600, 'x2': 198, 'x3': 209}, 'output': 193}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 600, 'x2': 198, 'x3': 209});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 193;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 663,
        "question": 'James delivers 600 newspapers in a day. He delivers 198 newspapers to District A, some to District B and 209 newspapers to District C. How many newspapers does he deliver to District B?',
        "answer": 193,
        "examples": [{'input': {'x1': 600, 'x2': 198, 'x3': 209}, 'output': 193}],
        });
    fs.writeFileSync('json/663.json', json);
}
doit();
