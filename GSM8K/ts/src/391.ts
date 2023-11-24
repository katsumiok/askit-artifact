import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/391.json')) {
        console.log("Skipping 391")
        return;
    }
    // measure time
    const f = define<number, {}>('The ratio of popsicles that Betty and Sam have is 5:6. If the total number of popsicles they have together is 165, how many more popsicles does Sam have more than Betty?', [], [{'input': {}, 'output': 15}]);
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
        "id": 391,
        "question": 'The ratio of popsicles that Betty and Sam have is 5:6. If the total number of popsicles they have together is 165, how many more popsicles does Sam have more than Betty?',
        "answer": 15,
        "examples": [{'input': {}, 'output': 15}],
        });
    fs.writeFileSync('json/391.json', json);
}
doit();
