import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1268.json')) {
        console.log("Skipping 1268")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A tower is made out of {{x1}} blue blocks, twice as many yellow blocks, and an unknown number of red blocks. If there are {{x2}} blocks in the tower in total, how many red blocks are there?', [], [{'input': {'x1': 4, 'x2': 32}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 32});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1268,
        "question": 'A tower is made out of 4 blue blocks, twice as many yellow blocks, and an unknown number of red blocks. If there are 32 blocks in the tower in total, how many red blocks are there?',
        "answer": 20,
        "examples": [{'input': {'x1': 4, 'x2': 32}, 'output': 20}],
        });
    fs.writeFileSync('json/1268.json', json);
}
doit();
