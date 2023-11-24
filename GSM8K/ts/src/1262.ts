import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1262.json')) {
        console.log("Skipping 1262")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John decides to take up an odd hobby of speed talking.  His normally speaking speed is {{x1}} WPM.  After training his speed is 2.5 times faster than his starting speed.  How long would it take him to speak {{x2}} pages if each page has {{x3}} words per page?', [], [{'input': {'x1': 150, 'x2': 10, 'x3': 450}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 10, 'x3': 450});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1262,
        "question": 'John decides to take up an odd hobby of speed talking.  His normally speaking speed is 150 WPM.  After training his speed is 2.5 times faster than his starting speed.  How long would it take him to speak 10 pages if each page has 450 words per page?',
        "answer": 12,
        "examples": [{'input': {'x1': 150, 'x2': 10, 'x3': 450}, 'output': 12}],
        });
    fs.writeFileSync('json/1262.json', json);
}
doit();
