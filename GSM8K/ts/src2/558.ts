import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/558.json')) {
        console.log("Skipping 558")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Timothy's locker is {{x1}} cubic inches. Zack's locker is half as big as Timothy's locker. Peter's locker is 1/4 as big as Zack's locker. How big is Peter's locker in cubic inches?", [], [{'input': {'x1': 24}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 558,
        "question": "Timothy's locker is 24 cubic inches. Zack's locker is half as big as Timothy's locker. Peter's locker is 1/4 as big as Zack's locker. How big is Peter's locker in cubic inches?",
        "answer": 3,
        "examples": [{'input': {'x1': 24}, 'output': 3}],
        });
    fs.writeFileSync('json2/558.json', json);
}
doit();
