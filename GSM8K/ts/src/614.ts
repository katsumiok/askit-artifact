import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/614.json')) {
        console.log("Skipping 614")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Gary does laundry twice a week. Each load of laundry uses {{x1}} gallons of water, and a gallon of water costs $0.15. How much does Gary spend on water for laundry in a year?', [], [{'input': {'x1': 20}, 'output': 312}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 312;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 614,
        "question": 'Gary does laundry twice a week. Each load of laundry uses 20 gallons of water, and a gallon of water costs $0.15. How much does Gary spend on water for laundry in a year?',
        "answer": 312,
        "examples": [{'input': {'x1': 20}, 'output': 312}],
        });
    fs.writeFileSync('json/614.json', json);
}
doit();
