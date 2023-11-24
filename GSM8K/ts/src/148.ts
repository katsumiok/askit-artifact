import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/148.json')) {
        console.log("Skipping 148")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Brittany and her mom go to the museum. The cost of admission is $12 for adults and $10 for children. Brittany's mom gives the cashier money for {{x1}} child ticket and {{x2}} adult ticket. If she received $8 in change, how much money, in dollars, did she give the cashier?", [], [{'input': {'x1': 1, 'x2': 1}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 148,
        "question": "Brittany and her mom go to the museum. The cost of admission is $12 for adults and $10 for children. Brittany's mom gives the cashier money for 1 child ticket and 1 adult ticket. If she received $8 in change, how much money, in dollars, did she give the cashier?",
        "answer": 30,
        "examples": [{'input': {'x1': 1, 'x2': 1}, 'output': 30}],
        });
    fs.writeFileSync('json/148.json', json);
}
doit();
