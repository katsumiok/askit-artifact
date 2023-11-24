import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/256.json')) {
        console.log("Skipping 256")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Brady is counting the money in his piggy bank. He has {{x1}} pennies, {{x2}} nickels, {{x3}} dimes, and {{x4}} pieces of dollar bills. How much does Brady have in his piggy bank in dollars?', [], [{'input': {'x1': 100, 'x2': 40, 'x3': 20, 'x4': 40}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 40, 'x3': 20, 'x4': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 256,
        "question": 'Brady is counting the money in his piggy bank. He has 100 pennies, 40 nickels, 20 dimes, and 40 pieces of dollar bills. How much does Brady have in his piggy bank in dollars?',
        "answer": 45,
        "examples": [{'input': {'x1': 100, 'x2': 40, 'x3': 20, 'x4': 40}, 'output': 45}],
        });
    fs.writeFileSync('json/256.json', json);
}
doit();
