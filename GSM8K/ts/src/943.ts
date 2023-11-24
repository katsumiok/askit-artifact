import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/943.json')) {
        console.log("Skipping 943")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("James gets {{x1}} new CDs.  Each CD cost $15.  He gets them for 40% off.  He decides he doesn't like {{x2}} of them and sells them for 40. How much money was he out?", [], [{'input': {'x1': 10, 'x2': 5}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 943,
        "question": "James gets 10 new CDs.  Each CD cost $15.  He gets them for 40% off.  He decides he doesn't like 5 of them and sells them for 40. How much money was he out?",
        "answer": 50,
        "examples": [{'input': {'x1': 10, 'x2': 5}, 'output': 50}],
        });
    fs.writeFileSync('json/943.json', json);
}
doit();
