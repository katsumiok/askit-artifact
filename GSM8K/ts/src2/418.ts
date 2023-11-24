import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/418.json')) {
        console.log("Skipping 418")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Zack's locker is half as big as Timothy's locker. Peter's locker is 1/4 as big as Zack's locker. If Peter's locker is {{x1}} cubic inches, how big is Timothy's locker in cubic inches?", [], [{'input': {'x1': 5}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 418,
        "question": "Zack's locker is half as big as Timothy's locker. Peter's locker is 1/4 as big as Zack's locker. If Peter's locker is 5 cubic inches, how big is Timothy's locker in cubic inches?",
        "answer": 40,
        "examples": [{'input': {'x1': 5}, 'output': 40}],
        });
    fs.writeFileSync('json2/418.json', json);
}
doit();
