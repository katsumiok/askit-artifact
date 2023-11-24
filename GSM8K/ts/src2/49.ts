import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/49.json')) {
        console.log("Skipping 49")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Richard lives in an apartment building with {{x1}} floors. Each floor contains {{x2}} units, and 3/4 of the building is occupied. What's the total number of unoccupied units In the building?", [], [{'input': {'x1': 15, 'x2': 8}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 49,
        "question": "Richard lives in an apartment building with 15 floors. Each floor contains 8 units, and 3/4 of the building is occupied. What's the total number of unoccupied units In the building?",
        "answer": 30,
        "examples": [{'input': {'x1': 15, 'x2': 8}, 'output': 30}],
        });
    fs.writeFileSync('json2/49.json', json);
}
doit();
