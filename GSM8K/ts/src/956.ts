import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/956.json')) {
        console.log("Skipping 956")
        return;
    }
    // measure time
    const f = define<number, {}>('Robyn sends sixteen emails a day. Seven are work emails, and two-thirds of the remainder are to family. One-third of the other emails are to her boyfriend. How many emails a day does she send to her boyfriend?', [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 956,
        "question": 'Robyn sends sixteen emails a day. Seven are work emails, and two-thirds of the remainder are to family. One-third of the other emails are to her boyfriend. How many emails a day does she send to her boyfriend?',
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json/956.json', json);
}
doit();
