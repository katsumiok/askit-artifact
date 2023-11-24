import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1213.json')) {
        console.log("Skipping 1213")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Stephen borrowed $300 from his sister and promised to return it with an additional 2% of the money he owed. For {{x1}} months Stephen will give his sister $25 per month and the remaining amount, including the interest, will be paid on the twelfth month. How much will Stephen pay in the twelfth month?', [], [{'input': {'x1': 11}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 11});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1213,
        "question": 'Stephen borrowed $300 from his sister and promised to return it with an additional 2% of the money he owed. For 11 months Stephen will give his sister $25 per month and the remaining amount, including the interest, will be paid on the twelfth month. How much will Stephen pay in the twelfth month?',
        "answer": 31,
        "examples": [{'input': {'x1': 11}, 'output': 31}],
        });
    fs.writeFileSync('json2/1213.json', json);
}
doit();
