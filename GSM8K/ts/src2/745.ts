import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/745.json')) {
        console.log("Skipping 745")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mark decides to buy packs of old magic cards and open them to sell.  He buys {{x1}} packs for $1800 each.  He gets {{x2}} card that is worth $4000 and another card worth $1000.  There are {{x3}} more cards worth an average of $50 each.  How much money profit did he make?', [], [{'input': {'x1': 3, 'x2': 1, 'x3': 30}, 'output': 1100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 1, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 745,
        "question": 'Mark decides to buy packs of old magic cards and open them to sell.  He buys 3 packs for $1800 each.  He gets 1 card that is worth $4000 and another card worth $1000.  There are 30 more cards worth an average of $50 each.  How much money profit did he make?',
        "answer": 1100,
        "examples": [{'input': {'x1': 3, 'x2': 1, 'x3': 30}, 'output': 1100}],
        });
    fs.writeFileSync('json2/745.json', json);
}
doit();
