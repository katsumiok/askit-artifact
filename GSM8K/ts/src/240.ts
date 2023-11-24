import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/240.json')) {
        console.log("Skipping 240")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('James has {{x1}} more candies than Robert. John has twice as many candies as Robert. If John has {{x2}} candies, how many more candies does John have than James?', [], [{'input': {'x1': 6, 'x2': 54}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 54});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 240,
        "question": 'James has 6 more candies than Robert. John has twice as many candies as Robert. If John has 54 candies, how many more candies does John have than James?',
        "answer": 21,
        "examples": [{'input': {'x1': 6, 'x2': 54}, 'output': 21}],
        });
    fs.writeFileSync('json/240.json', json);
}
doit();
