import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/149.json')) {
        console.log("Skipping 149")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Charlie has three times as many Facebook friends as Dorothy. James has four times as many friends on Facebook as Dorothy. If Charlie has {{x1}} friends on Facebook, how many Facebook friends does James have?', [], [{'input': {'x1': 12}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 149,
        "question": 'Charlie has three times as many Facebook friends as Dorothy. James has four times as many friends on Facebook as Dorothy. If Charlie has 12 friends on Facebook, how many Facebook friends does James have?',
        "answer": 16,
        "examples": [{'input': {'x1': 12}, 'output': 16}],
        });
    fs.writeFileSync('json2/149.json', json);
}
doit();
