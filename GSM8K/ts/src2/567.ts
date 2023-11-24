import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/567.json')) {
        console.log("Skipping 567")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The tooth fairy left Sharon $5.00 in exchange for the first tooth Sharon lost.  Then, the tooth fairy gave Sharon $1.00 for each of the next three teeth Sharon lost.  And for each of the last {{x1}} teeth Sharon lost, the tooth fairy gave Sharon half the amount of money per tooth as Sharon had received for each of the previous three teeth.  How much money did the tooth fairy leave Sharon, in dollars?', [], [{'input': {'x1': 2}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 567,
        "question": 'The tooth fairy left Sharon $5.00 in exchange for the first tooth Sharon lost.  Then, the tooth fairy gave Sharon $1.00 for each of the next three teeth Sharon lost.  And for each of the last 2 teeth Sharon lost, the tooth fairy gave Sharon half the amount of money per tooth as Sharon had received for each of the previous three teeth.  How much money did the tooth fairy leave Sharon, in dollars?',
        "answer": 9,
        "examples": [{'input': {'x1': 2}, 'output': 9}],
        });
    fs.writeFileSync('json2/567.json', json);
}
doit();
