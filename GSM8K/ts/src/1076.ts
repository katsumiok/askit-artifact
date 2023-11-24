import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1076.json')) {
        console.log("Skipping 1076")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Terry sells {{x1}} milkshakes for $5.50 each, nine burger platters for $11 each, and {{x2}} sodas for $1.50 each. How much money does he make in total?', [], [{'input': {'x1': 6, 'x2': 20}, 'output': 162}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 162;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1076,
        "question": 'Terry sells 6 milkshakes for $5.50 each, nine burger platters for $11 each, and 20 sodas for $1.50 each. How much money does he make in total?',
        "answer": 162,
        "examples": [{'input': {'x1': 6, 'x2': 20}, 'output': 162}],
        });
    fs.writeFileSync('json/1076.json', json);
}
doit();
