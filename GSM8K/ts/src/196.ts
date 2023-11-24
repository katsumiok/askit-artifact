import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/196.json')) {
        console.log("Skipping 196")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('200 pounds of carrots are to be distributed to {{x1}} restaurants in a certain city. Each restaurant is to receive {{x2}} pounds of carrots. How many pounds of carrots will not be used?', [], [{'input': {'x1': 40, 'x2': 2}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 2});
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
        "id": 196,
        "question": '200 pounds of carrots are to be distributed to 40 restaurants in a certain city. Each restaurant is to receive 2 pounds of carrots. How many pounds of carrots will not be used?',
        "answer": 120,
        "examples": [{'input': {'x1': 40, 'x2': 2}, 'output': 120}],
        });
    fs.writeFileSync('json/196.json', json);
}
doit();
