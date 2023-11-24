import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1267.json')) {
        console.log("Skipping 1267")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A farm has {{x1}} 2-legged animals and {{x2}} 4-legged animals. If all animals are healthy, how many pairs of animal legs in total are on the farm?', [], [{'input': {'x1': 10, 'x2': 15}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1267,
        "question": 'A farm has 10 2-legged animals and 15 4-legged animals. If all animals are healthy, how many pairs of animal legs in total are on the farm?',
        "answer": 40,
        "examples": [{'input': {'x1': 10, 'x2': 15}, 'output': 40}],
        });
    fs.writeFileSync('json/1267.json', json);
}
doit();
