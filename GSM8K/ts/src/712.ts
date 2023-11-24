import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/712.json')) {
        console.log("Skipping 712")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ginger and Amy both start with {{x1}} pieces of Halloween candy. Ginger eats {{x2}} pieces a day and Amy eats {{x3}} pieces a day. How much more candy does Amy have after two weeks?', [], [{'input': {'x1': 100, 'x2': 4, 'x3': 3}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 4, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 712,
        "question": 'Ginger and Amy both start with 100 pieces of Halloween candy. Ginger eats 4 pieces a day and Amy eats 3 pieces a day. How much more candy does Amy have after two weeks?',
        "answer": 14,
        "examples": [{'input': {'x1': 100, 'x2': 4, 'x3': 3}, 'output': 14}],
        });
    fs.writeFileSync('json/712.json', json);
}
doit();
