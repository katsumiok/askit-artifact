import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/687.json')) {
        console.log("Skipping 687")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There is one set of twins and one set of triplets. One twin is {{x1}} years older than one triplet. If their combined ages are 44, how old is one of the twins?', [], [{'input': {'x1': 7}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 687,
        "question": 'There is one set of twins and one set of triplets. One twin is 7 years older than one triplet. If their combined ages are 44, how old is one of the twins?',
        "answer": 13,
        "examples": [{'input': {'x1': 7}, 'output': 13}],
        });
    fs.writeFileSync('json/687.json', json);
}
doit();
