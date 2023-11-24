import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1114.json')) {
        console.log("Skipping 1114")
        return;
    }
    // measure time
    const f = define<number, {}>('Raymond had $21. Then he saved $11 from his allowance and spent $5 on a comic book and $19 on a puzzle. How much money does Raymond have left?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 1114,
        "question": 'Raymond had $21. Then he saved $11 from his allowance and spent $5 on a comic book and $19 on a puzzle. How much money does Raymond have left?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json/1114.json', json);
}
doit();
