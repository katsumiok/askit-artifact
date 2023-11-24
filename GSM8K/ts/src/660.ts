import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/660.json')) {
        console.log("Skipping 660")
        return;
    }
    // measure time
    const f = define<number, {}>("Lee rears only sheep and geese on his farm.  If the total number of animal legs is 70, and the total number of animal heads is 20, how many sheep live on Lee's farm?", [], [{'input': {}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 660,
        "question": "Lee rears only sheep and geese on his farm.  If the total number of animal legs is 70, and the total number of animal heads is 20, how many sheep live on Lee's farm?",
        "answer": 15,
        "examples": [{'input': {}, 'output': 15}],
        });
    fs.writeFileSync('json/660.json', json);
}
doit();
