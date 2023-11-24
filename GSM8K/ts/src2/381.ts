import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/381.json')) {
        console.log("Skipping 381")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Cho hiked {{x1}} kilometers per hour for {{x2}} hours. Chloe hiked {{x3}} kilometers per hour and stopped after {{x4}} hours. How many kilometers farther did Cho hike?', [], [{'input': {'x1': 14, 'x2': 8, 'x3': 9, 'x4': 5}, 'output': 67}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 8, 'x3': 9, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 67;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 381,
        "question": 'Cho hiked 14 kilometers per hour for 8 hours. Chloe hiked 9 kilometers per hour and stopped after 5 hours. How many kilometers farther did Cho hike?',
        "answer": 67,
        "examples": [{'input': {'x1': 14, 'x2': 8, 'x3': 9, 'x4': 5}, 'output': 67}],
        });
    fs.writeFileSync('json2/381.json', json);
}
doit();
