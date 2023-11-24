import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/285.json')) {
        console.log("Skipping 285")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If Ann is {{x1}} years old and her brother is twice her age, how old will her brother be in {{x2}} years?', [], [{'input': {'x1': 9, 'x2': 3}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 285,
        "question": 'If Ann is 9 years old and her brother is twice her age, how old will her brother be in 3 years?',
        "answer": 21,
        "examples": [{'input': {'x1': 9, 'x2': 3}, 'output': 21}],
        });
    fs.writeFileSync('json/285.json', json);
}
doit();
