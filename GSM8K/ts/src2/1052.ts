import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1052.json')) {
        console.log("Skipping 1052")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Romeo boards a train with {{x1}} people. At the first stop, {{x2}} more people board the train. At the second stop, {{x3}} people descended from the train while twice that number boarded the train. If {{x4}} more people descended at the third station, calculate the total number of people on the train at the final stop.', [], [{'input': {'x1': 120, 'x2': 20, 'x3': 50, 'x4': 80}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120, 'x2': 20, 'x3': 50, 'x4': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1052,
        "question": 'Romeo boards a train with 120 people. At the first stop, 20 more people board the train. At the second stop, 50 people descended from the train while twice that number boarded the train. If 80 more people descended at the third station, calculate the total number of people on the train at the final stop.',
        "answer": 110,
        "examples": [{'input': {'x1': 120, 'x2': 20, 'x3': 50, 'x4': 80}, 'output': 110}],
        });
    fs.writeFileSync('json2/1052.json', json);
}
doit();
