import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1143.json')) {
        console.log("Skipping 1143")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tim grows {{x1}} trees.  Each year he collects {{x2}} lemons from each tree.  How many lemons does he get in a decade?', [], [{'input': {'x1': 5, 'x2': 6}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1143,
        "question": 'Tim grows 5 trees.  Each year he collects 6 lemons from each tree.  How many lemons does he get in a decade?',
        "answer": 300,
        "examples": [{'input': {'x1': 5, 'x2': 6}, 'output': 300}],
        });
    fs.writeFileSync('json2/1143.json', json);
}
doit();
