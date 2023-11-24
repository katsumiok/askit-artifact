import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/684.json')) {
        console.log("Skipping 684")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John and Jack have {{x1}} minutes to walk to school together. It takes them {{x2}} minutes to get to the corner where the library is. It takes them another {{x3}} minutes to get to the fire station. How much longer do they have to get to school without being late?', [], [{'input': {'x1': 30, 'x2': 6, 'x3': 13}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 6, 'x3': 13});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 684,
        "question": 'John and Jack have 30 minutes to walk to school together. It takes them 6 minutes to get to the corner where the library is. It takes them another 13 minutes to get to the fire station. How much longer do they have to get to school without being late?',
        "answer": 11,
        "examples": [{'input': {'x1': 30, 'x2': 6, 'x3': 13}, 'output': 11}],
        });
    fs.writeFileSync('json/684.json', json);
}
doit();
