import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1162.json')) {
        console.log("Skipping 1162")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Geb is {{x1}} less than half the age of Haley. If Haley is {{x2}} years old, how old is Geb?', [], [{'input': {'x1': 10, 'x2': 26}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 26});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1162,
        "question": 'Geb is 10 less than half the age of Haley. If Haley is 26 years old, how old is Geb?',
        "answer": 3,
        "examples": [{'input': {'x1': 10, 'x2': 26}, 'output': 3}],
        });
    fs.writeFileSync('json2/1162.json', json);
}
doit();
