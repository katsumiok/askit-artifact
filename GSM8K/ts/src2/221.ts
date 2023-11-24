import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/221.json')) {
        console.log("Skipping 221")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A water tank is filled with {{x1}} liters of water. Celine used {{x2}} liters of water from the tank to water her small garden. She was then able to collect rainwater that is twice as much as what was left. How many liters of water are in the tank now?', [], [{'input': {'x1': 120, 'x2': 90}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120, 'x2': 90});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 221,
        "question": 'A water tank is filled with 120 liters of water. Celine used 90 liters of water from the tank to water her small garden. She was then able to collect rainwater that is twice as much as what was left. How many liters of water are in the tank now?',
        "answer": 90,
        "examples": [{'input': {'x1': 120, 'x2': 90}, 'output': 90}],
        });
    fs.writeFileSync('json2/221.json', json);
}
doit();
