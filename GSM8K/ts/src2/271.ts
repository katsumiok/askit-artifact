import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/271.json')) {
        console.log("Skipping 271")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('John has {{x1}} houses with {{x2}} bedrooms each.  Each bedroom has {{x3}} windows each.  There are an additional {{x4}} windows in each house not connected to bedrooms.  How many total windows are there between the houses?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 2, 'x4': 4}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 2, 'x4': 4});
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
        "id": 271,
        "question": 'John has 2 houses with 3 bedrooms each.  Each bedroom has 2 windows each.  There are an additional 4 windows in each house not connected to bedrooms.  How many total windows are there between the houses?',
        "answer": 20,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 2, 'x4': 4}, 'output': 20}],
        });
    fs.writeFileSync('json2/271.json', json);
}
doit();
