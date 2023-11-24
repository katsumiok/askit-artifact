import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/436.json')) {
        console.log("Skipping 436")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Rory makes a cake that weighs {{x1}} ounces. She cuts into {{x2}} pieces. Rory and her mom each have a piece. How much does the remaining cake weigh?', [], [{'input': {'x1': 20, 'x2': 8}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 436,
        "question": 'Rory makes a cake that weighs 20 ounces. She cuts into 8 pieces. Rory and her mom each have a piece. How much does the remaining cake weigh?',
        "answer": 15,
        "examples": [{'input': {'x1': 20, 'x2': 8}, 'output': 15}],
        });
    fs.writeFileSync('json/436.json', json);
}
doit();
