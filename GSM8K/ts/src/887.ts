import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/887.json')) {
        console.log("Skipping 887")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jerry counts six birds nesting in the bushes, 2/3rd of that number of birds flying overhead, and {{x1}} groups of eight birds each feeding. How many birds does he count in total?', [], [{'input': {'x1': 3}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 887,
        "question": 'Jerry counts six birds nesting in the bushes, 2/3rd of that number of birds flying overhead, and 3 groups of eight birds each feeding. How many birds does he count in total?',
        "answer": 34,
        "examples": [{'input': {'x1': 3}, 'output': 34}],
        });
    fs.writeFileSync('json/887.json', json);
}
doit();
