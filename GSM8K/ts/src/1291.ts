import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1291.json')) {
        console.log("Skipping 1291")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Timothy has three times the number of pens that George owns. Sarah has half as many pens as Timothy. If George has {{x1}} pens, how many pens does Sarah have?', [], [{'input': {'x1': 18}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1291,
        "question": 'Timothy has three times the number of pens that George owns. Sarah has half as many pens as Timothy. If George has 18 pens, how many pens does Sarah have?',
        "answer": 27,
        "examples": [{'input': {'x1': 18}, 'output': 27}],
        });
    fs.writeFileSync('json/1291.json', json);
}
doit();
