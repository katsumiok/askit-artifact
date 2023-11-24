import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/909.json')) {
        console.log("Skipping 909")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Duncan's age eight years ago was two times Adam's age four years ago. If Duncan's age is {{x1}} now, how old will Adam be in {{x2}} years?", [], [{'input': {'x1': 60, 'x2': 8}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 38;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 909,
        "question": "Duncan's age eight years ago was two times Adam's age four years ago. If Duncan's age is 60 now, how old will Adam be in 8 years?",
        "answer": 38,
        "examples": [{'input': {'x1': 60, 'x2': 8}, 'output': 38}],
        });
    fs.writeFileSync('json2/909.json', json);
}
doit();
