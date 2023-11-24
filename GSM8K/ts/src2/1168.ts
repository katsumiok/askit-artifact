import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1168.json')) {
        console.log("Skipping 1168")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The red rope was four times the length of the blue rope. The blue rope was {{x1}} centimeters shorter than the yellow rope. If the {{x2}} ropes had a combined length of {{x3}} centimeters, what was the length of the red rope in centimeters?', [], [{'input': {'x1': 7, 'x2': 3, 'x3': 37}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 3, 'x3': 37});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1168,
        "question": 'The red rope was four times the length of the blue rope. The blue rope was 7 centimeters shorter than the yellow rope. If the 3 ropes had a combined length of 37 centimeters, what was the length of the red rope in centimeters?',
        "answer": 20,
        "examples": [{'input': {'x1': 7, 'x2': 3, 'x3': 37}, 'output': 20}],
        });
    fs.writeFileSync('json2/1168.json', json);
}
doit();
