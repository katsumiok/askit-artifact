import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/154.json')) {
        console.log("Skipping 154")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('On Mondays, Wednesdays, and Fridays, college student Kimo has three 1-hour  classes each day.  On Tuesdays and Thursdays, he has two 2-hour classes each day.  In one semester, there are {{x1}} weeks of school.  In one semester, how many hours does Kimo spend attending classes?', [], [{'input': {'x1': 16}, 'output': 272}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 272;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 154,
        "question": 'On Mondays, Wednesdays, and Fridays, college student Kimo has three 1-hour  classes each day.  On Tuesdays and Thursdays, he has two 2-hour classes each day.  In one semester, there are 16 weeks of school.  In one semester, how many hours does Kimo spend attending classes?',
        "answer": 272,
        "examples": [{'input': {'x1': 16}, 'output': 272}],
        });
    fs.writeFileSync('json2/154.json', json);
}
doit();
