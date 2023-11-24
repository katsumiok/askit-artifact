import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1185.json')) {
        console.log("Skipping 1185")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('The cheese pizza is cut into {{x1}} slices and the pepperoni pizza is cut into {{x2}} slices.  If Kate’s {{x3}} friends each eat {{x4}} cheese pizza slices and {{x5}} pepperoni pizza slices, how many pizza pies does she need to buy?', [], [{'input': {'x1': 12, 'x2': 8, 'x3': 6, 'x4': 6, 'x5': 4}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 8, 'x3': 6, 'x4': 6, 'x5': 4});
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
        "id": 1185,
        "question": 'The cheese pizza is cut into 12 slices and the pepperoni pizza is cut into 8 slices.  If Kate’s 6 friends each eat 6 cheese pizza slices and 4 pepperoni pizza slices, how many pizza pies does she need to buy?',
        "answer": 6,
        "examples": [{'input': {'x1': 12, 'x2': 8, 'x3': 6, 'x4': 6, 'x5': 4}, 'output': 6}],
        });
    fs.writeFileSync('json2/1185.json', json);
}
doit();
