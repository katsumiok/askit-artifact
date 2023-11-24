import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1201.json')) {
        console.log("Skipping 1201")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} fish in the fish tank. One-third of the fish have red stripes, and 5/11 of the remaining fish have blue stripes. Altogether, how many fish have red stripes and blue stripes?', [], [{'input': {'x1': 66}, 'output': 42}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 66});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 42;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1201,
        "question": 'There are 66 fish in the fish tank. One-third of the fish have red stripes, and 5/11 of the remaining fish have blue stripes. Altogether, how many fish have red stripes and blue stripes?',
        "answer": 42,
        "examples": [{'input': {'x1': 66}, 'output': 42}],
        });
    fs.writeFileSync('json/1201.json', json);
}
doit();
