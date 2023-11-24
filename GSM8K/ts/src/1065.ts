import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1065.json')) {
        console.log("Skipping 1065")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('If John scored {{x1}} on his first {{x2}} tests and an {{x3}} on his 4th, what was his average score across the {{x4}} tests?', [], [{'input': {'x1': 100, 'x2': 3, 'x3': 80, 'x4': 4}, 'output': 95}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 3, 'x3': 80, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 95;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1065,
        "question": 'If John scored 100 on his first 3 tests and an 80 on his 4th, what was his average score across the 4 tests?',
        "answer": 95,
        "examples": [{'input': {'x1': 100, 'x2': 3, 'x3': 80, 'x4': 4}, 'output': 95}],
        });
    fs.writeFileSync('json/1065.json', json);
}
doit();
