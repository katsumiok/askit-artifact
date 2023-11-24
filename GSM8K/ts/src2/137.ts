import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/137.json')) {
        console.log("Skipping 137")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Rory orders {{x1}} subs for $7.50 each, {{x2}} bags of chips for $1.50 each and {{x3}} cookies for $1.00 each for delivery.  There’s a 20% delivery fee added at check out and she wants to add a $5.00 tip.  What will her delivery order cost?', [], [{'input': {'x1': 2, 'x2': 2, 'x3': 2}, 'output': 29}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 29;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 137,
        "question": 'Rory orders 2 subs for $7.50 each, 2 bags of chips for $1.50 each and 2 cookies for $1.00 each for delivery.  There’s a 20% delivery fee added at check out and she wants to add a $5.00 tip.  What will her delivery order cost?',
        "answer": 29,
        "examples": [{'input': {'x1': 2, 'x2': 2, 'x3': 2}, 'output': 29}],
        });
    fs.writeFileSync('json2/137.json', json);
}
doit();
