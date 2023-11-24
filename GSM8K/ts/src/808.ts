import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/808.json')) {
        console.log("Skipping 808")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('There are {{x1}} quarts of tea left from the party. Four students each drank 1.5 quarts of tea and {{x2}} students each drank {{x3}} quarts of tea. How many gallons of tea were at the beginning of the party?', [], [{'input': {'x1': 10, 'x2': 16, 'x3': 2}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 16, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 808,
        "question": 'There are 10 quarts of tea left from the party. Four students each drank 1.5 quarts of tea and 16 students each drank 2 quarts of tea. How many gallons of tea were at the beginning of the party?',
        "answer": 12,
        "examples": [{'input': {'x1': 10, 'x2': 16, 'x3': 2}, 'output': 12}],
        });
    fs.writeFileSync('json/808.json', json);
}
doit();
