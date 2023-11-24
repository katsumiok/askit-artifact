import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1062.json')) {
        console.log("Skipping 1062")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Hannah slips on a banana peel and breaks her arm. The doctor charges her $200 for the cast, $300/hour for a 30-minute visit, $4/pill for {{x1}} painkillers, and $6/hour for a mandatory minimum of {{x2}} hours of parking. How much does the doctor's visit cost total?", [], [{'input': {'x1': 30, 'x2': 2}, 'output': 482}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 482;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1062,
        "question": "Hannah slips on a banana peel and breaks her arm. The doctor charges her $200 for the cast, $300/hour for a 30-minute visit, $4/pill for 30 painkillers, and $6/hour for a mandatory minimum of 2 hours of parking. How much does the doctor's visit cost total?",
        "answer": 482,
        "examples": [{'input': {'x1': 30, 'x2': 2}, 'output': 482}],
        });
    fs.writeFileSync('json/1062.json', json);
}
doit();
