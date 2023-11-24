import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1258.json')) {
        console.log("Skipping 1258")
        return;
    }
    // measure time
    const f = define<number, {}>('There are five phones on a phone plan. The main phone costs twice as much as each additional phone. If the main phone plan costs $20, how much does the whole phone plan cost?', [], [{'input': {}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1258,
        "question": 'There are five phones on a phone plan. The main phone costs twice as much as each additional phone. If the main phone plan costs $20, how much does the whole phone plan cost?',
        "answer": 60,
        "examples": [{'input': {}, 'output': 60}],
        });
    fs.writeFileSync('json2/1258.json', json);
}
doit();
