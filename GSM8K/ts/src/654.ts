import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/654.json')) {
        console.log("Skipping 654")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Lori needed {{x1}} whole egg to make {{x2}} deviled egg halves.  She anticipates that each of her guests will eat {{x3}} deviled egg halves.  If she is inviting {{x4}} guests to her party, how many dozens of eggs will she need?', [], [{'input': {'x1': 1, 'x2': 2, 'x3': 3, 'x4': 16}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 3, 'x4': 16});
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
        "id": 654,
        "question": 'Lori needed 1 whole egg to make 2 deviled egg halves.  She anticipates that each of her guests will eat 3 deviled egg halves.  If she is inviting 16 guests to her party, how many dozens of eggs will she need?',
        "answer": 2,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 3, 'x4': 16}, 'output': 2}],
        });
    fs.writeFileSync('json/654.json', json);
}
doit();
