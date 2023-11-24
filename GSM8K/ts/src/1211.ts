import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1211.json')) {
        console.log("Skipping 1211")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('For one medical dosage, Saanvi had to combine {{x1}} mL of one medicine with {{x2}} times that amount of the second medicine. How many mL of medicine would be in {{x3}} doses?', [], [{'input': {'x1': 14, 'x2': 3, 'x3': 8}, 'output': 448}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 3, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 448;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1211,
        "question": 'For one medical dosage, Saanvi had to combine 14 mL of one medicine with 3 times that amount of the second medicine. How many mL of medicine would be in 8 doses?',
        "answer": 448,
        "examples": [{'input': {'x1': 14, 'x2': 3, 'x3': 8}, 'output': 448}],
        });
    fs.writeFileSync('json/1211.json', json);
}
doit();
