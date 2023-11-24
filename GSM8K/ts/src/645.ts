import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/645.json')) {
        console.log("Skipping 645")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A bag of flour is divided into {{x1}} portions of {{x2}} kilograms each. How much flour (in kilograms) was in three bags in total, before it was divided into portions?', [], [{'input': {'x1': 8, 'x2': 2}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 645,
        "question": 'A bag of flour is divided into 8 portions of 2 kilograms each. How much flour (in kilograms) was in three bags in total, before it was divided into portions?',
        "answer": 48,
        "examples": [{'input': {'x1': 8, 'x2': 2}, 'output': 48}],
        });
    fs.writeFileSync('json/645.json', json);
}
doit();
