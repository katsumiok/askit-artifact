import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/372.json')) {
        console.log("Skipping 372")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Hallie had dance practice for {{x1}} hour on Tuesdays and {{x2}} hours on Thursdays.  On Saturdays, she had dance practice that lasted twice as long as Tuesday's night class.  How many hours a week did she have dance practice?", [], [{'input': {'x1': 1, 'x2': 2}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 372,
        "question": "Hallie had dance practice for 1 hour on Tuesdays and 2 hours on Thursdays.  On Saturdays, she had dance practice that lasted twice as long as Tuesday's night class.  How many hours a week did she have dance practice?",
        "answer": 5,
        "examples": [{'input': {'x1': 1, 'x2': 2}, 'output': 5}],
        });
    fs.writeFileSync('json/372.json', json);
}
doit();
