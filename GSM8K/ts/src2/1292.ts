import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1292.json')) {
        console.log("Skipping 1292")
        return;
    }
    // measure time
    const f = define<number, {}>('Jackie grew 3" over the summer.  She is now 2" shorter than Anne, who is twice the size of Albert.  If Albert is 36" tall, how tall was Jackie before summer?', [], [{'input': {}, 'output': 67}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 67;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1292,
        "question": 'Jackie grew 3" over the summer.  She is now 2" shorter than Anne, who is twice the size of Albert.  If Albert is 36" tall, how tall was Jackie before summer?',
        "answer": 67,
        "examples": [{'input': {}, 'output': 67}],
        });
    fs.writeFileSync('json2/1292.json', json);
}
doit();
