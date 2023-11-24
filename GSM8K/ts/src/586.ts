import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/586.json')) {
        console.log("Skipping 586")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Hannah needs to drink {{x1}} ml of water for every {{x2}} calories she burns. She spends {{x3}} hours doing aerobics, which burns {{x4}} calories/hour, and {{x5}} hour running, which burns {{x6}} calories/hour. How many ml of water does she need to drink?', [], [{'input': {'x1': 100, 'x2': 200, 'x3': 2, 'x4': 500, 'x5': 1, 'x6': 600}, 'output': 800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 200, 'x3': 2, 'x4': 500, 'x5': 1, 'x6': 600});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 586,
        "question": 'Hannah needs to drink 100 ml of water for every 200 calories she burns. She spends 2 hours doing aerobics, which burns 500 calories/hour, and 1 hour running, which burns 600 calories/hour. How many ml of water does she need to drink?',
        "answer": 800,
        "examples": [{'input': {'x1': 100, 'x2': 200, 'x3': 2, 'x4': 500, 'x5': 1, 'x6': 600}, 'output': 800}],
        });
    fs.writeFileSync('json/586.json', json);
}
doit();
