import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/825.json')) {
        console.log("Skipping 825")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Becca, Smendrick, and PJ have collections of Magic Cards.  There is a total of {{x1}} cards.  Becca has {{x2}} more than Smendrick, and Smendrick has {{x3}} times the amount of cards that PJ has.  How many cards does Becca have?', [], [{'input': {'x1': 341, 'x2': 12, 'x3': 3}, 'output': 153}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 341, 'x2': 12, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 153;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 825,
        "question": 'Becca, Smendrick, and PJ have collections of Magic Cards.  There is a total of 341 cards.  Becca has 12 more than Smendrick, and Smendrick has 3 times the amount of cards that PJ has.  How many cards does Becca have?',
        "answer": 153,
        "examples": [{'input': {'x1': 341, 'x2': 12, 'x3': 3}, 'output': 153}],
        });
    fs.writeFileSync('json2/825.json', json);
}
doit();
