import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/360.json')) {
        console.log("Skipping 360")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carver just turned {{x1}} years old, which makes him {{x2}} years less than twice the age of his son.  How old is his son, in years?', [], [{'input': {'x1': 45, 'x2': 5}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 45, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 360,
        "question": 'Carver just turned 45 years old, which makes him 5 years less than twice the age of his son.  How old is his son, in years?',
        "answer": 25,
        "examples": [{'input': {'x1': 45, 'x2': 5}, 'output': 25}],
        });
    fs.writeFileSync('json2/360.json', json);
}
doit();
