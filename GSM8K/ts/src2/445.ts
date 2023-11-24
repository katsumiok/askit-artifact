import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/445.json')) {
        console.log("Skipping 445")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Michael is racing his horse and notices that for every mile the horse runs, he eats 1/2 a bail of hay. A bail of hay costs $3. If his horse runs for {{x1}} minutes at 32MPH, and Michael has six {{x2}} dollar bills, how much change does he have after he buys the hay?', [], [{'input': {'x1': 30, 'x2': 5}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 445,
        "question": 'Michael is racing his horse and notices that for every mile the horse runs, he eats 1/2 a bail of hay. A bail of hay costs $3. If his horse runs for 30 minutes at 32MPH, and Michael has six 5 dollar bills, how much change does he have after he buys the hay?',
        "answer": 6,
        "examples": [{'input': {'x1': 30, 'x2': 5}, 'output': 6}],
        });
    fs.writeFileSync('json2/445.json', json);
}
doit();
