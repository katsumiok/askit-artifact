import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1208.json')) {
        console.log("Skipping 1208")
        return;
    }
    // measure time
    const f = define<number, {}>('Trinity sells magazines at 11/8 of the price she bought the magazines. If she bought the magazines at $72, what is her profit?', [], [{'input': {}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1208,
        "question": 'Trinity sells magazines at 11/8 of the price she bought the magazines. If she bought the magazines at $72, what is her profit?',
        "answer": 27,
        "examples": [{'input': {}, 'output': 27}],
        });
    fs.writeFileSync('json2/1208.json', json);
}
doit();
