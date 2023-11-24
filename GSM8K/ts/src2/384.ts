import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/384.json')) {
        console.log("Skipping 384")
        return;
    }
    // measure time
    const f = define<number, {}>('Mr. Ruther sold 3/5 of his land and had 12.8 hectares left. How much land did he have at first?', [], [{'input': {}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 384,
        "question": 'Mr. Ruther sold 3/5 of his land and had 12.8 hectares left. How much land did he have at first?',
        "answer": 32,
        "examples": [{'input': {}, 'output': 32}],
        });
    fs.writeFileSync('json2/384.json', json);
}
doit();
