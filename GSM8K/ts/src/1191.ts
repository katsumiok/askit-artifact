import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1191.json')) {
        console.log("Skipping 1191")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('May is getting her hair cut and colored. It costs $40 for the color and $30 per inch of haircut. If her hair started at {{x1}} inches and ended at 8, how much did her cut and color cost?', [], [{'input': {'x1': 10}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1191,
        "question": 'May is getting her hair cut and colored. It costs $40 for the color and $30 per inch of haircut. If her hair started at 10 inches and ended at 8, how much did her cut and color cost?',
        "answer": 100,
        "examples": [{'input': {'x1': 10}, 'output': 100}],
        });
    fs.writeFileSync('json/1191.json', json);
}
doit();
