import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/30.json')) {
        console.log("Skipping 30")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Darrell and Allen's ages are in the ratio of 7:11. If their total age now is 162, calculate Allen's age {{x1}} years from now.", [], [{'input': {'x1': 10}, 'output': 109}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 109;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 30,
        "question": "Darrell and Allen's ages are in the ratio of 7:11. If their total age now is 162, calculate Allen's age 10 years from now.",
        "answer": 109,
        "examples": [{'input': {'x1': 10}, 'output': 109}],
        });
    fs.writeFileSync('json/30.json', json);
}
doit();
