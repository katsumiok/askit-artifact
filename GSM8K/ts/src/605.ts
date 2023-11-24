import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/605.json')) {
        console.log("Skipping 605")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('For four hours, Patrick sold {{x1}} cups of lemonade per hour at a price of $0.50 per cup.  In the next two hours, he sold {{x2}} cups of lemonade per hour at a price of $0.60 per cup.  How much money did Patrick earn, in dollars, from selling lemonade for {{x3}} hours?', [], [{'input': {'x1': 15, 'x2': 10, 'x3': 6}, 'output': 42}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 10, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 42;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 605,
        "question": 'For four hours, Patrick sold 15 cups of lemonade per hour at a price of $0.50 per cup.  In the next two hours, he sold 10 cups of lemonade per hour at a price of $0.60 per cup.  How much money did Patrick earn, in dollars, from selling lemonade for 6 hours?',
        "answer": 42,
        "examples": [{'input': {'x1': 15, 'x2': 10, 'x3': 6}, 'output': 42}],
        });
    fs.writeFileSync('json/605.json', json);
}
doit();
