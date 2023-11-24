import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1110.json')) {
        console.log("Skipping 1110")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Although Soledad works in a windowless office, she loves the outdoors. She will be on vacation for the entire month of June and cannot wait to hike 9,300 miles within that month. She is thinking of walking twice a day, covering {{x1}} miles each time. How many more miles per day must Soledad hike to complete her journey on time?', [], [{'input': {'x1': 125}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 125});
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
        "id": 1110,
        "question": 'Although Soledad works in a windowless office, she loves the outdoors. She will be on vacation for the entire month of June and cannot wait to hike 9,300 miles within that month. She is thinking of walking twice a day, covering 125 miles each time. How many more miles per day must Soledad hike to complete her journey on time?',
        "answer": 60,
        "examples": [{'input': {'x1': 125}, 'output': 60}],
        });
    fs.writeFileSync('json2/1110.json', json);
}
doit();
