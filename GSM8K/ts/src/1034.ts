import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1034.json')) {
        console.log("Skipping 1034")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Ted starts with $200. He buys {{x1}} books for {{x2}} dollars each and {{x3}} pencils for {{x4}} dollars each. How much did he spend in total?', [], [{'input': {'x1': 3, 'x2': 16, 'x3': 3, 'x4': 6}, 'output': 66}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 16, 'x3': 3, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 66;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1034,
        "question": 'Ted starts with $200. He buys 3 books for 16 dollars each and 3 pencils for 6 dollars each. How much did he spend in total?',
        "answer": 66,
        "examples": [{'input': {'x1': 3, 'x2': 16, 'x3': 3, 'x4': 6}, 'output': 66}],
        });
    fs.writeFileSync('json/1034.json', json);
}
doit();
