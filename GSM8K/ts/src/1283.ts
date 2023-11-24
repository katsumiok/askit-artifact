import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1283.json')) {
        console.log("Skipping 1283")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Frances sells {{x1}} cupcakes for $2 for each cupcake and {{x2}} cookies at $1 each.  She buys five trays at $4 for each tray. How much money does Frances have left?', [], [{'input': {'x1': 20, 'x2': 40}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1283,
        "question": 'Frances sells 20 cupcakes for $2 for each cupcake and  40  cookies at $1 each.  She buys five trays at $4 for each tray. How much money does Frances have left?',
        "answer": 60,
        "examples": [{'input': {'x1': 20, 'x2': 40}, 'output': 60}],
        });
    fs.writeFileSync('json/1283.json', json);
}
doit();
