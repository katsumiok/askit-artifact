import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/167.json')) {
        console.log("Skipping 167")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Seth is twice as old as Brooke. In {{x1}} years, the sum of their ages will be 28. How old is Seth?', [], [{'input': {'x1': 2}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 167,
        "question": 'Seth is twice as old as Brooke. In 2 years, the sum of their ages will be 28. How old is Seth?',
        "answer": 16,
        "examples": [{'input': {'x1': 2}, 'output': 16}],
        });
    fs.writeFileSync('json/167.json', json);
}
doit();
