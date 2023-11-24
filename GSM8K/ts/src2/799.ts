import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/799.json')) {
        console.log("Skipping 799")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A loaf of bread at the bakery costs $2. Bagels cost $1 each. How much more do {{x1}} loaves of bread cost than {{x2}} bagels?', [], [{'input': {'x1': 3, 'x2': 2}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 799,
        "question": 'A loaf of bread at the bakery costs $2. Bagels cost $1 each. How much more do 3 loaves of bread cost than 2 bagels?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 2}, 'output': 4}],
        });
    fs.writeFileSync('json2/799.json', json);
}
doit();
