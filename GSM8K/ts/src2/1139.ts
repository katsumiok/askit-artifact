import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1139.json')) {
        console.log("Skipping 1139")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Russell orders his favorite bagels online.  Each pack of bagels costs $10.00 and has {{x1}} bagels in the pack.  If he orders {{x2}} packs of bagels, he will receive a 10% discount.  After ordering {{x3}} bags, how much will each single bagel cost?', [], [{'input': {'x1': 9, 'x2': 4, 'x3': 4}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 4, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1139,
        "question": 'Russell orders his favorite bagels online.  Each pack of bagels costs $10.00 and has 9 bagels in the pack.  If he orders 4 packs of bagels, he will receive a 10% discount.  After ordering 4 bags, how much will each single bagel cost?',
        "answer": 1,
        "examples": [{'input': {'x1': 9, 'x2': 4, 'x3': 4}, 'output': 1}],
        });
    fs.writeFileSync('json2/1139.json', json);
}
doit();
