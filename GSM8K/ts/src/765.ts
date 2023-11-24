import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/765.json')) {
        console.log("Skipping 765")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('George has 45% more pears than bananas. If George has {{x1}} bananas, how many fruits does George have?', [], [{'input': {'x1': 200}, 'output': 490}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 490;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 765,
        "question": 'George has 45% more pears than bananas. If George has 200 bananas, how many fruits does George have?',
        "answer": 490,
        "examples": [{'input': {'x1': 200}, 'output': 490}],
        });
    fs.writeFileSync('json/765.json', json);
}
doit();
