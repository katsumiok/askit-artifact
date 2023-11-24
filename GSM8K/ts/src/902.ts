import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/902.json')) {
        console.log("Skipping 902")
        return;
    }
    // measure time
    const f = define<number, {}>('The educational shop is selling notebooks for $1.50 each and a ballpen at $0.5 each.  William bought five notebooks and a ballpen. How much did he spend in all?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 902,
        "question": 'The educational shop is selling notebooks for $1.50 each and a ballpen at $0.5 each.  William bought five notebooks and a ballpen. How much did he spend in all?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json/902.json', json);
}
doit();
