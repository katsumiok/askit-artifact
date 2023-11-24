import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/400.json')) {
        console.log("Skipping 400")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A glass of milk is {{x1}} ounces of milk.  John drinks {{x2}} glasses of milk.  If milk has {{x3}} calories per ounce how many calories did he consume?', [], [{'input': {'x1': 8, 'x2': 2, 'x3': 3}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 400,
        "question": 'A glass of milk is 8 ounces of milk.  John drinks 2 glasses of milk.  If milk has 3 calories per ounce how many calories did he consume?',
        "answer": 48,
        "examples": [{'input': {'x1': 8, 'x2': 2, 'x3': 3}, 'output': 48}],
        });
    fs.writeFileSync('json2/400.json', json);
}
doit();
