import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/964.json')) {
        console.log("Skipping 964")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John just started watching a new show.  Each episode is {{x1}} minutes long, and there are half as many episodes in total as there are minutes per episode.  How many minutes will John spend watching the show if he watches every episode?', [], [{'input': {'x1': 20}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 964,
        "question": 'John just started watching a new show.  Each episode is 20 minutes long, and there are half as many episodes in total as there are minutes per episode.  How many minutes will John spend watching the show if he watches every episode?',
        "answer": 200,
        "examples": [{'input': {'x1': 20}, 'output': 200}],
        });
    fs.writeFileSync('json/964.json', json);
}
doit();
