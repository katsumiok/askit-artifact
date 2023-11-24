import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1279.json')) {
        console.log("Skipping 1279")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Avery needs to buy a {{x1}} piece place setting (dinner & salad plate and a bowl) for her holiday dinner.  She’s having {{x2}} people over for dinner.  If the dinner plates cost $6.00 each and bowls each cost $5.00 and the salad plates cost $4.00, how much will she spend on place settings?', [], [{'input': {'x1': 3, 'x2': 12}, 'output': 180}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1279,
        "question": 'Avery needs to buy a 3 piece place setting (dinner & salad plate and a bowl) for her holiday dinner.  She’s having 12 people over for dinner.  If the dinner plates cost $6.00 each and bowls each cost $5.00 and the salad plates cost $4.00, how much will she spend on place settings?',
        "answer": 180,
        "examples": [{'input': {'x1': 3, 'x2': 12}, 'output': 180}],
        });
    fs.writeFileSync('json/1279.json', json);
}
doit();
