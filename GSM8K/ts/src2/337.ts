import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/337.json')) {
        console.log("Skipping 337")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Luke ate {{x1}} hot dogs. Thomas ate three times more hot dogs than Luke. John ate half the amount Thomas ate. How many more hot dogs did John eat than Luke?', [], [{'input': {'x1': 2}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 337,
        "question": 'Luke ate 2 hot dogs. Thomas ate three times more hot dogs than Luke. John ate half the amount Thomas ate. How many more hot dogs did John eat than Luke?',
        "answer": 1,
        "examples": [{'input': {'x1': 2}, 'output': 1}],
        });
    fs.writeFileSync('json2/337.json', json);
}
doit();
