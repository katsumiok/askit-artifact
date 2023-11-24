import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/420.json')) {
        console.log("Skipping 420")
        return;
    }
    // measure time
    const f = define<number, {}>('To fund his store, Mr. Josue solicited money from two banks. The first bank gave him $4000, and the second company gave him twice as much. If he initially had $5000 in capital, how much capital does he have now?', [], [{'input': {}, 'output': 17000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 420,
        "question": 'To fund his store, Mr. Josue solicited money from two banks. The first bank gave him $4000, and the second company gave him twice as much. If he initially had $5000 in capital, how much capital does he have now?',
        "answer": 17000,
        "examples": [{'input': {}, 'output': 17000}],
        });
    fs.writeFileSync('json/420.json', json);
}
doit();
