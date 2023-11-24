import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1290.json')) {
        console.log("Skipping 1290")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A small sunflower has {{x1}} dozen seeds and a large sunflower has 50% more seeds than a small sunflower.  How many sunflower seeds are there altogether?', [], [{'input': {'x1': 3}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1290,
        "question": 'A small sunflower has 3 dozen seeds and a large sunflower has 50% more seeds than a small sunflower.  How many sunflower seeds are there altogether?',
        "answer": 90,
        "examples": [{'input': {'x1': 3}, 'output': 90}],
        });
    fs.writeFileSync('json/1290.json', json);
}
doit();
