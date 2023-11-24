import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/615.json')) {
        console.log("Skipping 615")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Scarlett found an aquarium for $10.00 at a yard sale.  At the pet store, she bought {{x1}} bags of rocks for $2.50 each and {{x2}} pieces of coral at $2.00 apiece.  She bought {{x3}} fish at $0.50 each and she needed fish food that cost $2.00.  How much did she spend?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 20}, 'output': 33}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 33;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 615,
        "question": 'Scarlett found an aquarium for $10.00 at a yard sale.  At the pet store, she bought 2 bags of rocks for $2.50 each and 3 pieces of coral at $2.00 apiece.  She bought 20 fish at $0.50 each and she needed fish food that cost $2.00.  How much did she spend?',
        "answer": 33,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 20}, 'output': 33}],
        });
    fs.writeFileSync('json/615.json', json);
}
doit();
