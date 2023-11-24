import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1045.json')) {
        console.log("Skipping 1045")
        return;
    }
    // measure time
    const f = define<number, {}>('Three people divided an amount of $1920. The second took $80 more than the first and the third took twice what the second took. Calculate the share of the first one.', [], [{'input': {}, 'output': 420}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 420;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1045,
        "question": 'Three people divided an amount of $1920. The second took $80 more than the first and the third took twice what the second took. Calculate the share of the first one.',
        "answer": 420,
        "examples": [{'input': {}, 'output': 420}],
        });
    fs.writeFileSync('json2/1045.json', json);
}
doit();
