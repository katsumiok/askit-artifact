import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1113.json')) {
        console.log("Skipping 1113")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The temperature was {{x1}} degrees Celsius. It dropped {{x2}} degrees Celsius overnight and then increased {{x3}} degrees Celsius in the morning. What was the temperature, in degrees Celsius, in the morning?', [], [{'input': {'x1': 2, 'x2': 8, 'x3': 3}, 'output': -3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 8, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === -3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1113,
        "question": 'The temperature was 2 degrees Celsius. It dropped 8 degrees Celsius overnight and then increased 3 degrees Celsius in the morning. What was the temperature, in degrees Celsius, in the morning?',
        "answer": -3,
        "examples": [{'input': {'x1': 2, 'x2': 8, 'x3': 3}, 'output': -3}],
        });
    fs.writeFileSync('json2/1113.json', json);
}
doit();
