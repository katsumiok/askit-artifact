import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1141.json')) {
        console.log("Skipping 1141")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('If Chester eats {{x1}} eggs a day for {{x2}} days and then increases it to {{x3}} eggs a day for {{x4}} days, how many dozens of eggs will Chester need for {{x5}} days?', [], [{'input': {'x1': 3, 'x2': 30, 'x3': 5, 'x4': 30, 'x5': 60}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 30, 'x3': 5, 'x4': 30, 'x5': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1141,
        "question": 'If Chester eats 3 eggs a day for 30 days and then increases it to 5 eggs a day for 30 days, how many dozens of eggs will Chester need for 60 days?',
        "answer": 20,
        "examples": [{'input': {'x1': 3, 'x2': 30, 'x3': 5, 'x4': 30, 'x5': 60}, 'output': 20}],
        });
    fs.writeFileSync('json/1141.json', json);
}
doit();
