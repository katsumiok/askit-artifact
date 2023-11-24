import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/80.json')) {
        console.log("Skipping 80")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Two girls each got 1/6 of the {{x1}} liters of water. Then a boy got {{x2}} liters of water. How many liters of water were left?', [], [{'input': {'x1': 24, 'x2': 6}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 6});
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
        "id": 80,
        "question": 'Two girls each got 1/6 of the 24 liters of water. Then a boy got 6 liters of water. How many liters of water were left?',
        "answer": 10,
        "examples": [{'input': {'x1': 24, 'x2': 6}, 'output': 10}],
        });
    fs.writeFileSync('json2/80.json', json);
}
doit();
