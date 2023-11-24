import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1313.json')) {
        console.log("Skipping 1313")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A fruit vendor bought {{x1}} watermelons for $80. He sold all of them at a profit of 25%. How much was each watermelon sold?', [], [{'input': {'x1': 50}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1313,
        "question": 'A fruit vendor bought 50 watermelons for $80. He sold all of them at a profit of 25%. How much was each watermelon sold?',
        "answer": 2,
        "examples": [{'input': {'x1': 50}, 'output': 2}],
        });
    fs.writeFileSync('json2/1313.json', json);
}
doit();
