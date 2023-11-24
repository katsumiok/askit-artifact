import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/347.json')) {
        console.log("Skipping 347")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Davos bought {{x1}} shirts from the mall that cost $30 each. If he bought them with a 40% discount, how much did Davos pay for the {{x2}} shirts?', [], [{'input': {'x1': 2, 'x2': 2}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 347,
        "question": 'Davos bought 2 shirts from the mall that cost $30 each. If he bought them with a 40% discount, how much did Davos pay for the 2 shirts?',
        "answer": 36,
        "examples": [{'input': {'x1': 2, 'x2': 2}, 'output': 36}],
        });
    fs.writeFileSync('json2/347.json', json);
}
doit();
