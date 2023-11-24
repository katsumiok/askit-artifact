import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1310.json')) {
        console.log("Skipping 1310")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Aaron and Vanessa were relay race partners on a running team. Aaron was able to run each mile twice as fast as Vanessa, but Vanessa was able to run twice as far as Aaron did. If Vanessa ran {{x1}} miles and Aaron completed his part of the race in {{x2}} minutes, how long in minutes did Vanessa take to complete her part?', [], [{'input': {'x1': 4, 'x2': 16}, 'output': 64}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1310,
        "question": 'Aaron and Vanessa were relay race partners on a running team. Aaron was able to run each mile twice as fast as Vanessa, but Vanessa was able to run twice as far as Aaron did. If Vanessa ran 4 miles and Aaron completed his part of the race in 16 minutes, how long in minutes did Vanessa take to complete her part?',
        "answer": 64,
        "examples": [{'input': {'x1': 4, 'x2': 16}, 'output': 64}],
        });
    fs.writeFileSync('json2/1310.json', json);
}
doit();
