import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/93.json')) {
        console.log("Skipping 93")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lee used to be able to run the 400-meter hurdles two seconds faster than Gerald would run the 400-meter hurdles.  But Gerald changed his diet, which improved his speed by 10%.  If Lee runs the 400-meter hurdles in {{x1}} seconds, how fast can Gerald, with his improved diet, run the 400-meter hurdles, in seconds?', [], [{'input': {'x1': 38}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 38});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 93,
        "question": 'Lee used to be able to run the 400-meter hurdles two seconds faster than Gerald would run the 400-meter hurdles.  But Gerald changed his diet, which improved his speed by 10%.  If Lee runs the 400-meter hurdles in 38 seconds, how fast can Gerald, with his improved diet, run the 400-meter hurdles, in seconds?',
        "answer": 36,
        "examples": [{'input': {'x1': 38}, 'output': 36}],
        });
    fs.writeFileSync('json/93.json', json);
}
doit();
