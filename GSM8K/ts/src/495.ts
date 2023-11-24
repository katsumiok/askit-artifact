import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/495.json')) {
        console.log("Skipping 495")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Charisma works for {{x1}} hours every day.  She has a timer to remind her to get up and walk for {{x2}} minutes every hour she’s at work.  After {{x3}} days at the office, how many minutes has she walked?', [], [{'input': {'x1': 8, 'x2': 5, 'x3': 5}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 5, 'x3': 5});
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
        "id": 495,
        "question": 'Charisma works for 8 hours every day.  She has a timer to remind her to get up and walk for 5 minutes every hour she’s at work.  After 5 days at the office, how many minutes has she walked?',
        "answer": 200,
        "examples": [{'input': {'x1': 8, 'x2': 5, 'x3': 5}, 'output': 200}],
        });
    fs.writeFileSync('json/495.json', json);
}
doit();
