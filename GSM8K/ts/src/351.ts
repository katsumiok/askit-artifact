import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/351.json')) {
        console.log("Skipping 351")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('April is donating plant pots to a local school for their new garden. They ask for {{x1}} plant pots for the daisies, and twice as many for the roses. April had already bought {{x2}} plant pots from the garden center before she knew how many she needed. How many plant pots does April have left over?', [], [{'input': {'x1': 30, 'x2': 100}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 351,
        "question": 'April is donating plant pots to a local school for their new garden. They ask for 30 plant pots for the daisies, and twice as many for the roses. April had already bought 100 plant pots from the garden center before she knew how many she needed. How many plant pots does April have left over?',
        "answer": 10,
        "examples": [{'input': {'x1': 30, 'x2': 100}, 'output': 10}],
        });
    fs.writeFileSync('json/351.json', json);
}
doit();
