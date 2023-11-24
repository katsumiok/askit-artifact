import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/315.json')) {
        console.log("Skipping 315")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("Martha is planning her Christmas party. She invited {{x1}} families with {{x2}} people and {{x3}} families with {{x4}} people. {{x5}} people couldn't come due to illness, and 1/4 that number had previous commitments. How many people show up for Martha's party?", [], [{'input': {'x1': 2, 'x2': 6, 'x3': 3, 'x4': 4, 'x5': 8}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 6, 'x3': 3, 'x4': 4, 'x5': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 315,
        "question": "Martha is planning her Christmas party. She invited 2 families with 6 people and 3 families with 4 people. 8 people couldn't come due to illness, and 1/4 that number had previous commitments. How many people show up for Martha's party?",
        "answer": 14,
        "examples": [{'input': {'x1': 2, 'x2': 6, 'x3': 3, 'x4': 4, 'x5': 8}, 'output': 14}],
        });
    fs.writeFileSync('json/315.json', json);
}
doit();
