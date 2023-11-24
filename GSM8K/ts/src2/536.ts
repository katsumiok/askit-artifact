import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/536.json')) {
        console.log("Skipping 536")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Chenny is {{x1}} years old. Alyana is {{x2}} years younger than Chenny. How old is Anne if she is {{x3}} years older than Alyana?', [], [{'input': {'x1': 10, 'x2': 4, 'x3': 2}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 536,
        "question": 'Chenny is 10 years old. Alyana is 4 years younger than Chenny. How old is Anne if she is 2 years older than Alyana?',
        "answer": 8,
        "examples": [{'input': {'x1': 10, 'x2': 4, 'x3': 2}, 'output': 8}],
        });
    fs.writeFileSync('json2/536.json', json);
}
doit();
