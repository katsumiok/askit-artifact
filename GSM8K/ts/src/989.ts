import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/989.json')) {
        console.log("Skipping 989")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Emily can peel {{x1}} shrimp a minute and saute {{x2}} shrimp in {{x3}} minutes. How long will it take her to peel and cook {{x4}} shrimp?', [], [{'input': {'x1': 6, 'x2': 30, 'x3': 10, 'x4': 90}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 30, 'x3': 10, 'x4': 90});
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
        "id": 989,
        "question": 'Emily can peel 6 shrimp a minute and saute 30 shrimp in 10 minutes. How long will it take her to peel and cook 90 shrimp?',
        "answer": 45,
        "examples": [{'input': {'x1': 6, 'x2': 30, 'x3': 10, 'x4': 90}, 'output': 45}],
        });
    fs.writeFileSync('json/989.json', json);
}
doit();
