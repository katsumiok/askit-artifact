import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/27.json')) {
        console.log("Skipping 27")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Cynthia eats one serving of ice cream every night.  She buys cartons of ice cream with {{x1}} servings of ice cream per carton at a cost of $4.00 per carton.  After {{x2}} days, how much will she spend on ice cream?', [], [{'input': {'x1': 15, 'x2': 60}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 27,
        "question": 'Cynthia eats one serving of ice cream every night.  She buys cartons of ice cream with 15 servings of ice cream per carton at a cost of $4.00 per carton.  After 60 days, how much will she spend on ice cream?',
        "answer": 16,
        "examples": [{'input': {'x1': 15, 'x2': 60}, 'output': 16}],
        });
    fs.writeFileSync('json/27.json', json);
}
doit();
