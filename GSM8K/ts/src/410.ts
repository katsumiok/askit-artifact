import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/410.json')) {
        console.log("Skipping 410")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Sally went to the seashore for vacation.  Her parents gave her $10 to buy whatever she wanted.  At the trinket shop, taffy was on sale for "Buy {{x1}} pound at $3, get {{x2}} pound 1/2 off."  She scooped up {{x3}} pounds.  She also bought a mixed bag of seashells for $1.50 and {{x4}} magnets that were $0.25 each.  How much money does Sally have left?', [], [{'input': {'x1': 1, 'x2': 1, 'x3': 2, 'x4': 4}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 1, 'x3': 2, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 410,
        "question": 'Sally went to the seashore for vacation.  Her parents gave her $10 to buy whatever she wanted.  At the trinket shop, taffy was on sale for "Buy 1 pound at $3, get 1 pound 1/2 off."  She scooped up 2 pounds.  She also bought a mixed bag of seashells for $1.50 and 4 magnets that were $0.25 each.  How much money does Sally have left?',
        "answer": 3,
        "examples": [{'input': {'x1': 1, 'x2': 1, 'x3': 2, 'x4': 4}, 'output': 3}],
        });
    fs.writeFileSync('json/410.json', json);
}
doit();
