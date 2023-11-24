import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1104.json')) {
        console.log("Skipping 1104")
        return;
    }
    // measure time
    const f = define<number, {}>('Caroline is three times older than Ben. Ben is two times older than Chris. If Chris is 4, how old is Caroline?', [], [{'input': {}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1104,
        "question": 'Caroline is three times older than Ben. Ben is two times older than Chris. If Chris is 4, how old is Caroline?',
        "answer": 24,
        "examples": [{'input': {}, 'output': 24}],
        });
    fs.writeFileSync('json2/1104.json', json);
}
doit();
