import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/910.json')) {
        console.log("Skipping 910")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Farmer Brown's farm is {{x1}} acres, and Farmer Smith's farm is {{x2}} acres more than twice that. How many acres do the two farms have, together?", [], [{'input': {'x1': 200, 'x2': 100}, 'output': 700}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 700;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 910,
        "question": "Farmer Brown's farm is 200 acres, and Farmer Smith's farm is 100 acres more than twice that. How many acres do the two farms have, together?",
        "answer": 700,
        "examples": [{'input': {'x1': 200, 'x2': 100}, 'output': 700}],
        });
    fs.writeFileSync('json/910.json', json);
}
doit();
