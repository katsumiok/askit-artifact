import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/160.json')) {
        console.log("Skipping 160")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A tank of water has a depth of {{x1}} feet on Monday. On Tuesday, the tank had {{x2}} feet more water. On Wednesday, the depth of the water is two thirds of what it was on Tuesday. What is the tank’s water depth on Wednesday?', [], [{'input': {'x1': 17, 'x2': 7}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 17, 'x2': 7});
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
        "id": 160,
        "question": 'A tank of water has a depth of 17 feet on Monday. On Tuesday, the tank had 7 feet more water. On Wednesday, the depth of the water is two thirds of what it was on Tuesday. What is the tank’s water depth on Wednesday?',
        "answer": 16,
        "examples": [{'input': {'x1': 17, 'x2': 7}, 'output': 16}],
        });
    fs.writeFileSync('json2/160.json', json);
}
doit();
