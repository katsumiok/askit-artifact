import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/582.json')) {
        console.log("Skipping 582")
        return;
    }
    // measure time
    const f = define<number, {}>("Juan asked his neighbor, Herb, how much his house was worth. Herb answered that he paid $76,000 for the house. If Juan's house is 30% less expensive than Herb's, calculate the value of the two houses combined.", [], [{'input': {}, 'output': 129200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 129200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 582,
        "question": "Juan asked his neighbor, Herb, how much his house was worth. Herb answered that he paid $76,000 for the house. If Juan's house is 30% less expensive than Herb's, calculate the value of the two houses combined.",
        "answer": 129200,
        "examples": [{'input': {}, 'output': 129200}],
        });
    fs.writeFileSync('json2/582.json', json);
}
doit();
