import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/20.json')) {
        console.log("Skipping 20")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('I have {{x1}} liters of orange drink that are two-thirds water and I wish to add it to {{x2}} liters of pineapple drink that is three-fifths water. But as I pour it, I spill one liter of the orange drink. How much water is in the remaining {{x3}} liters?', [], [{'input': {'x1': 10, 'x2': 15, 'x3': 24}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 15, 'x3': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 20,
        "question": 'I have 10 liters of orange drink that are two-thirds water and I wish to add it to 15 liters of pineapple drink that is three-fifths water. But as I pour it, I spill one liter of the orange drink. How much water is in the remaining 24 liters?',
        "answer": 15,
        "examples": [{'input': {'x1': 10, 'x2': 15, 'x3': 24}, 'output': 15}],
        });
    fs.writeFileSync('json/20.json', json);
}
doit();
