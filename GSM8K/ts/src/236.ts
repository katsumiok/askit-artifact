import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/236.json')) {
        console.log("Skipping 236")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Ram uses a lot of pens. He discovered that he can save money by mixing the ink from five empty pens to make one full pen. If he buys {{x1}} pens and then uses them to make new pens when the ink runs low, how many total pens does he get to have?', [], [{'input': {'x1': 25}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 236,
        "question": 'Ram uses a lot of pens. He discovered that he can save money by mixing the ink from five empty pens to make one full pen. If he buys 25 pens and then uses them to make new pens when the ink runs low, how many total pens does he get to have?',
        "answer": 31,
        "examples": [{'input': {'x1': 25}, 'output': 31}],
        });
    fs.writeFileSync('json/236.json', json);
}
doit();
