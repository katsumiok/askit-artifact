import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1243.json')) {
        console.log("Skipping 1243")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Archie buys beef jerky that comes {{x1}} sticks to a bag and costs $18.00 per bag.  If Archie buys {{x2}} bag while they're $3.00 off a bag, how much will each stick of jerky cost in cents?", [], [{'input': {'x1': 30, 'x2': 1}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1243,
        "question": "Archie buys beef jerky that comes 30 sticks to a bag and costs $18.00 per bag.  If Archie buys 1 bag while they're $3.00 off a bag, how much will each stick of jerky cost in cents?",
        "answer": 50,
        "examples": [{'input': {'x1': 30, 'x2': 1}, 'output': 50}],
        });
    fs.writeFileSync('json/1243.json', json);
}
doit();
