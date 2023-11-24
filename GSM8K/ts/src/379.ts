import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/379.json')) {
        console.log("Skipping 379")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Rachel bought {{x1}} cookies and Janet gave her {{x2}} cookies. The other day her brother ate {{x3}} of those cookies. How many cookies are left for Rachel?', [], [{'input': {'x1': 23, 'x2': 42, 'x3': 44}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 23, 'x2': 42, 'x3': 44});
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
        "id": 379,
        "question": 'Rachel bought 23 cookies and Janet gave her 42 cookies. The other day her brother ate 44 of those cookies. How many cookies are left for Rachel?',
        "answer": 21,
        "examples": [{'input': {'x1': 23, 'x2': 42, 'x3': 44}, 'output': 21}],
        });
    fs.writeFileSync('json/379.json', json);
}
doit();
