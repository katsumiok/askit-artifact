import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/279.json')) {
        console.log("Skipping 279")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ruby is {{x1}} times older than Sam. In {{x2}} years, Ruby will be {{x3}} times as old as Sam. How old is Sam now?', [], [{'input': {'x1': 6, 'x2': 9, 'x3': 3}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 9, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 279,
        "question": 'Ruby is 6 times older than Sam. In 9 years, Ruby will be 3 times as old as Sam. How old is Sam now?',
        "answer": 6,
        "examples": [{'input': {'x1': 6, 'x2': 9, 'x3': 3}, 'output': 6}],
        });
    fs.writeFileSync('json2/279.json', json);
}
doit();
