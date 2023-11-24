import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1084.json')) {
        console.log("Skipping 1084")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If Sam and Harry have {{x1}} feet of fence between them, and they agree to split it with Harry getting {{x2}} feet more than Sam, how much is left over for Sam?', [], [{'input': {'x1': 100, 'x2': 60}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1084,
        "question": 'If Sam and Harry have 100 feet of fence between them, and they agree to split it with Harry getting 60 feet more than Sam, how much is left over for Sam?',
        "answer": 20,
        "examples": [{'input': {'x1': 100, 'x2': 60}, 'output': 20}],
        });
    fs.writeFileSync('json2/1084.json', json);
}
doit();
