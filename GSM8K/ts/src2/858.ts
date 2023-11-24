import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/858.json')) {
        console.log("Skipping 858")
        return;
    }
    // measure time
    const f = define<number, {}>('A plague infects ten people. Every day, each infected person infects six others. How many people are infected after three days?', [], [{'input': {}, 'output': 3430}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3430;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 858,
        "question": 'A plague infects ten people. Every day, each infected person infects six others. How many people are infected after three days?',
        "answer": 3430,
        "examples": [{'input': {}, 'output': 3430}],
        });
    fs.writeFileSync('json2/858.json', json);
}
doit();
