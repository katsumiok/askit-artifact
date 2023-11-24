import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/468.json')) {
        console.log("Skipping 468")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Fireman Frank has {{x1}} shoes. If he gets {{x2}} pairs of shoes on Monday and gains {{x3}} new pairs on Wednesday and {{x4}} pairs on Friday, how many shoes will he have on Sunday if he gets rid of {{x5}} shoes on Saturday?', [], [{'input': {'x1': 200, 'x2': 5, 'x3': 15, 'x4': 30, 'x5': 180}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 5, 'x3': 15, 'x4': 30, 'x5': 180});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 468,
        "question": 'Fireman Frank has 200 shoes. If he gets 5 pairs of shoes on Monday and gains 15 new pairs on Wednesday and 30 pairs on Friday, how many shoes will he have on Sunday if he gets rid of 180 shoes on Saturday?',
        "answer": 120,
        "examples": [{'input': {'x1': 200, 'x2': 5, 'x3': 15, 'x4': 30, 'x5': 180}, 'output': 120}],
        });
    fs.writeFileSync('json2/468.json', json);
}
doit();
