import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/831.json')) {
        console.log("Skipping 831")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('An interior design firm offers installation for $129.00.  It includes hanging {{x1}} mirrors, {{x2}} shelves, {{x3}} chandelier, and {{x4}} pictures.  They will install additional items for an extra $15.00 per item.  Angela has {{x5}} mirrors and {{x6}} chandeliers and {{x7}} pictures that she needs installed/hung.  How much will this cost her?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 1, 'x4': 10, 'x5': 6, 'x6': 2, 'x7': 20}, 'output': 324}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 1, 'x4': 10, 'x5': 6, 'x6': 2, 'x7': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 324;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 831,
        "question": 'An interior design firm offers installation for $129.00.  It includes hanging 4 mirrors, 2 shelves, 1 chandelier, and 10 pictures.  They will install additional items for an extra $15.00 per item.  Angela has 6 mirrors and 2 chandeliers and 20 pictures that she needs installed/hung.  How much will this cost her?',
        "answer": 324,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 1, 'x4': 10, 'x5': 6, 'x6': 2, 'x7': 20}, 'output': 324}],
        });
    fs.writeFileSync('json/831.json', json);
}
doit();
