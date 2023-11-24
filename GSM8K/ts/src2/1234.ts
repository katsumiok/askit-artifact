import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1234.json')) {
        console.log("Skipping 1234")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Regina wrote {{x1}} novels last year. If this is {{x2}} quarters of the number of novels she has written this year, how many novels has she written this year?', [], [{'input': {'x1': 9, 'x2': 3}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1234,
        "question": 'Regina wrote 9 novels last year. If this is 3 quarters of the number of novels she has written this year, how many novels has she written this year?',
        "answer": 12,
        "examples": [{'input': {'x1': 9, 'x2': 3}, 'output': 12}],
        });
    fs.writeFileSync('json2/1234.json', json);
}
doit();
