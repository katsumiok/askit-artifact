import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1091.json')) {
        console.log("Skipping 1091")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('An apple orchard sells apples in bags of 10. The orchard sold a total of {{x1}} apples one day. How much did an orchard earn for selling this at $5 per bag?', [], [{'input': {'x1': 2000}, 'output': 1000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1091,
        "question": 'An apple orchard sells apples in bags of 10. The orchard sold a total of 2000 apples one day. How much did an orchard earn for selling this at $5 per bag?',
        "answer": 1000,
        "examples": [{'input': {'x1': 2000}, 'output': 1000}],
        });
    fs.writeFileSync('json/1091.json', json);
}
doit();
