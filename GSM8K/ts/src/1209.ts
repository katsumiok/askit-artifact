import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1209.json')) {
        console.log("Skipping 1209")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Brian's basement was damp and musty, so he bought a dehumidifier to remove moisture out of the air.  The device has three speeds: low, medium, and high.   Brian tested the device's efficiency and he found that the low setting removes {{x1}} liter of water out of the air per day, the medium setting removes twice as much water per day as the low setting, and the high setting removes twice as much water per day as the medium setting.  If Brian ran the dehumidifier for {{x2}} days on the low setting, then an additional {{x3}} days on the medium setting, and then an additional {{x4}} days on the high setting, what is the total amount of water that the dehumidifier removed from the air in his basement, in liters?", [], [{'input': {'x1': 1, 'x2': 3, 'x3': 3, 'x4': 5}, 'output': 29}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 3, 'x3': 3, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 29;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1209,
        "question": "Brian's basement was damp and musty, so he bought a dehumidifier to remove moisture out of the air.  The device has three speeds: low, medium, and high.   Brian tested the device's efficiency and he found that the low setting removes 1 liter of water out of the air per day, the medium setting removes twice as much water per day as the low setting, and the high setting removes twice as much water per day as the medium setting.  If Brian ran the dehumidifier for 3 days on the low setting, then an additional 3 days on the medium setting, and then an additional 5 days on the high setting, what is the total amount of water that the dehumidifier removed from the air in his basement, in liters?",
        "answer": 29,
        "examples": [{'input': {'x1': 1, 'x2': 3, 'x3': 3, 'x4': 5}, 'output': 29}],
        });
    fs.writeFileSync('json/1209.json', json);
}
doit();
