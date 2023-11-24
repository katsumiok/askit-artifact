import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/396.json')) {
        console.log("Skipping 396")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jenny is dividing up a pizza with {{x1}} slices. She gives 1/3 to Bill and 1/4 to Mark. If Jenny eats {{x2}} slices, how many slices are left?', [], [{'input': {'x1': 12, 'x2': 2}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 396,
        "question": 'Jenny is dividing up a pizza with 12 slices. She gives 1/3 to Bill and 1/4 to Mark. If Jenny eats 2 slices, how many slices are left?',
        "answer": 3,
        "examples": [{'input': {'x1': 12, 'x2': 2}, 'output': 3}],
        });
    fs.writeFileSync('json/396.json', json);
}
doit();
