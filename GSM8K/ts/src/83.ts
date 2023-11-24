import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/83.json')) {
        console.log("Skipping 83")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Dan plants {{x1}} rose bushes. Each rose bush has {{x2}} roses. Each rose has {{x3}} thorns. How many thorns are there total?', [], [{'input': {'x1': 3, 'x2': 25, 'x3': 8}, 'output': 600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 25, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 83,
        "question": 'Dan plants 3 rose bushes. Each rose bush has 25 roses. Each rose has 8 thorns. How many thorns are there total?',
        "answer": 600,
        "examples": [{'input': {'x1': 3, 'x2': 25, 'x3': 8}, 'output': 600}],
        });
    fs.writeFileSync('json/83.json', json);
}
doit();
