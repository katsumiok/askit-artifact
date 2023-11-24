import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/626.json')) {
        console.log("Skipping 626")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ashley has an internet connection speed of 20kb per second. Knowing that {{x1}} Mb has {{x2}} kb, she wants to know her internet connection speed in Mb per hour. What is Ashley’s internet connection speed in Mb per hour?', [], [{'input': {'x1': 1, 'x2': 1000}, 'output': 72}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 1000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 626,
        "question": 'Ashley has an internet connection speed of 20kb per second. Knowing that 1 Mb has 1000 kb, she wants to know her internet connection speed in Mb per hour. What is Ashley’s internet connection speed in Mb per hour?',
        "answer": 72,
        "examples": [{'input': {'x1': 1, 'x2': 1000}, 'output': 72}],
        });
    fs.writeFileSync('json2/626.json', json);
}
doit();
