import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/888.json')) {
        console.log("Skipping 888")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Lani baked {{x1}} cookies. She ate {{x2}} five cookies and placed the rest equally into five jars. How many cookies were in each jar?', [], [{'input': {'x1': 55, 'x2': 5}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 55, 'x2': 5});
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
        "id": 888,
        "question": 'Lani baked 55 cookies. She ate 5 five cookies and placed the rest equally into five jars. How many cookies were in each jar?',
        "answer": 10,
        "examples": [{'input': {'x1': 55, 'x2': 5}, 'output': 10}],
        });
    fs.writeFileSync('json2/888.json', json);
}
doit();
