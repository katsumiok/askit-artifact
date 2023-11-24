import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/840.json')) {
        console.log("Skipping 840")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Patrick has three glue sticks that are partially used. One has 1/6 left, the second has 2/3 left and the third one has 1/2 left. If a glue stick is {{x1}} millimeters long originally, what is the total length of the glue sticks that are not used?', [], [{'input': {'x1': 12}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 840,
        "question": 'Patrick has three glue sticks that are partially used. One has 1/6 left, the second has 2/3 left and the third one has 1/2 left. If a glue stick is 12 millimeters long originally, what is the total length of the glue sticks that are not used?',
        "answer": 16,
        "examples": [{'input': {'x1': 12}, 'output': 16}],
        });
    fs.writeFileSync('json2/840.json', json);
}
doit();
