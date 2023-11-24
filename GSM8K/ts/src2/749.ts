import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/749.json')) {
        console.log("Skipping 749")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('In a school activity, fifty-four students are to be separated into six groups of equal size. If the activity requires {{x1}} groups, how many more groups are needed to form?', [], [{'input': {'x1': 12}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 749,
        "question": 'In a school activity, fifty-four students are to be separated into six groups of equal size. If the activity requires 12 groups, how many more groups are needed to form?',
        "answer": 3,
        "examples": [{'input': {'x1': 12}, 'output': 3}],
        });
    fs.writeFileSync('json2/749.json', json);
}
doit();
