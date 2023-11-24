import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/77.json')) {
        console.log("Skipping 77")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If Raymond does half as much laundry as Sarah, and Sarah does {{x1}} times as much laundry as David, calculate the difference in the amount of laundry Raymond and David do if Sarah does {{x2}} pounds of laundry.', [], [{'input': {'x1': 4, 'x2': 400}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 400});
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
        "id": 77,
        "question": 'If Raymond does half as much laundry as Sarah, and Sarah does 4 times as much laundry as David, calculate the difference in the amount of laundry Raymond and David do if Sarah does 400 pounds of laundry.',
        "answer": 100,
        "examples": [{'input': {'x1': 4, 'x2': 400}, 'output': 100}],
        });
    fs.writeFileSync('json2/77.json', json);
}
doit();
