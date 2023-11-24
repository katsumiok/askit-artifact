import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/760.json')) {
        console.log("Skipping 760")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('20% of {{x1}} people think horse #2 will win the big race.  60% of the remaining people think horse #7 will win.  The rest of the people think horse #12 will win the big race.  How many people think that horse #12 will win?', [], [{'input': {'x1': 50}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 760,
        "question": '20% of 50 people think horse #2 will win the big race.  60% of the remaining people think horse #7 will win.  The rest of the people think horse #12 will win the big race.  How many people think that horse #12 will win?',
        "answer": 16,
        "examples": [{'input': {'x1': 50}, 'output': 16}],
        });
    fs.writeFileSync('json2/760.json', json);
}
doit();
