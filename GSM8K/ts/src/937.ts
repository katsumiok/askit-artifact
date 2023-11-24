import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/937.json')) {
        console.log("Skipping 937")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Nate is feeding his livestock hay. Each goat needs {{x1}} pounds, and each sheep needs {{x2}} pounds less than twice the amount each goat needs. If there are {{x3}} goats and {{x4}} sheep, how many pounds of hay does Nate need?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 15, 'x4': 12}, 'output': 159}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 15, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 159;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 937,
        "question": 'Nate is feeding his livestock hay. Each goat needs 5 pounds, and each sheep needs 3 pounds less than twice the amount each goat needs. If there are 15 goats and 12 sheep, how many pounds of hay does Nate need?',
        "answer": 159,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 15, 'x4': 12}, 'output': 159}],
        });
    fs.writeFileSync('json/937.json', json);
}
doit();
