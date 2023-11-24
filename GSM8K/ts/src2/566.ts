import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/566.json')) {
        console.log("Skipping 566")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Shiloh is {{x1}} years old today.  In {{x2}} years, he will be three times as old as his nephew.  How old is his nephew today?', [], [{'input': {'x1': 44, 'x2': 7}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 44, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 566,
        "question": 'Shiloh is 44 years old today.  In 7 years, he will be three times as old as his nephew.  How old is his nephew today?',
        "answer": 10,
        "examples": [{'input': {'x1': 44, 'x2': 7}, 'output': 10}],
        });
    fs.writeFileSync('json2/566.json', json);
}
doit();
