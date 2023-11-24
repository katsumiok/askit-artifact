import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/515.json')) {
        console.log("Skipping 515")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tara bought {{x1}} packs of {{x2}} canvas bags for $4 each. She painted them and sold them at a craft fair for $8 each. How much profit did she earn on her bags?', [], [{'input': {'x1': 8, 'x2': 5}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 515,
        "question": 'Tara bought 8 packs of 5 canvas bags for $4 each. She painted them and sold them at a craft fair for $8 each. How much profit did she earn on her bags?',
        "answer": 160,
        "examples": [{'input': {'x1': 8, 'x2': 5}, 'output': 160}],
        });
    fs.writeFileSync('json/515.json', json);
}
doit();
