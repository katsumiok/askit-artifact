import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1169.json')) {
        console.log("Skipping 1169")
        return;
    }
    // measure time
    const f = define<number, {}>("Ronnie was given $5 while Rissa was given thrice as much. After each of them had given an equal amount of money to their little sister, Rissa is left with 4/5 of her money. How much is left in Ronnie's money?", [], [{'input': {}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 1169,
        "question": "Ronnie was given $5 while Rissa was given thrice as much. After each of them had given an equal amount of money to their little sister, Rissa is left with 4/5 of her money. How much is left in Ronnie's money?",
        "answer": 2,
        "examples": [{'input': {}, 'output': 2}],
        });
    fs.writeFileSync('json2/1169.json', json);
}
doit();
