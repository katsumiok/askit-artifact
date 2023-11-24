import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/805.json')) {
        console.log("Skipping 805")
        return;
    }
    // measure time
    const f = define<number, {}>('James buys a ring for his bride-to-be.  The diamond cost $600 and the gold cost $300.  He pays a 30% premium for it to be made.  How much did he pay?', [], [{'input': {}, 'output': 1170}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1170;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 805,
        "question": 'James buys a ring for his bride-to-be.  The diamond cost $600 and the gold cost $300.  He pays a 30% premium for it to be made.  How much did he pay?',
        "answer": 1170,
        "examples": [{'input': {}, 'output': 1170}],
        });
    fs.writeFileSync('json/805.json', json);
}
doit();
