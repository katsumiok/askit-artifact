import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/308.json')) {
        console.log("Skipping 308")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A tub of ice cream costing $13 is now sold at $11. A packet of milk was sold at a discount of $0.5. How much will you save if you buy {{x1}} tubs of ice cream and {{x2}} packets of milk?', [], [{'input': {'x1': 2, 'x2': 4}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 308,
        "question": 'A tub of ice cream costing $13 is now sold at $11. A packet of milk was sold at a discount of $0.5. How much will you save if you buy 2 tubs of ice cream and 4 packets of milk?',
        "answer": 6,
        "examples": [{'input': {'x1': 2, 'x2': 4}, 'output': 6}],
        });
    fs.writeFileSync('json/308.json', json);
}
doit();
