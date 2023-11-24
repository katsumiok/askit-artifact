import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/374.json')) {
        console.log("Skipping 374")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mary has {{x1}} sheep. She gets {{x2}} kg of milk from half of them and {{x3}} kg of milk from the other half every day. How much milk does she collect every day?', [], [{'input': {'x1': 30, 'x2': 1, 'x3': 2}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 1, 'x3': 2});
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
        "id": 374,
        "question": 'Mary has 30 sheep. She gets 1 kg of milk from half of them and 2 kg of milk from the other half every day. How much milk does she collect every day?',
        "answer": 45,
        "examples": [{'input': {'x1': 30, 'x2': 1, 'x3': 2}, 'output': 45}],
        });
    fs.writeFileSync('json2/374.json', json);
}
doit();
