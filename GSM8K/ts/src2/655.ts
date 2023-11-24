import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/655.json')) {
        console.log("Skipping 655")
        return;
    }
    // measure time
    const f = define<number, {}>('Shiela is required to submit a 15-page research paper. She already finished writing 1/3 of the paper. How many pages does she have left to write?', [], [{'input': {}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 655,
        "question": 'Shiela is required to submit a 15-page research paper. She already finished writing 1/3 of the paper. How many pages does she have left to write?',
        "answer": 10,
        "examples": [{'input': {}, 'output': 10}],
        });
    fs.writeFileSync('json2/655.json', json);
}
doit();
