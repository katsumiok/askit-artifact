import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/584.json')) {
        console.log("Skipping 584")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('90 single use contacts come in {{x1}} box and will last Pete {{x2}} days.  Each box is $100.00 and currently 10% off.  If he buys {{x3}} boxes of contact, how much will each pair of contacts cost?', [], [{'input': {'x1': 1, 'x2': 45, 'x3': 2}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 45, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 584,
        "question": '90 single use contacts come in 1 box and will last Pete 45 days.  Each box is $100.00 and currently 10% off.  If he buys 2 boxes of contact, how much will each pair of contacts cost?',
        "answer": 2,
        "examples": [{'input': {'x1': 1, 'x2': 45, 'x3': 2}, 'output': 2}],
        });
    fs.writeFileSync('json/584.json', json);
}
doit();
