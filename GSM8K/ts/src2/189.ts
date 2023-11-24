import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/189.json')) {
        console.log("Skipping 189")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Three friends spent $20.25 on {{x1}} tickets to the fair. They also spent $4.50 less on food than on the tickets. They also went on {{x2}} different rides which costs $33 for each ride. If they agreed to split all the costs evenly, how much did each of them pay?', [], [{'input': {'x1': 3, 'x2': 2}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 189,
        "question": 'Three friends spent $20.25 on 3 tickets to the fair. They also spent $4.50 less on food than on the tickets. They also went on 2 different rides which costs $33 for each ride. If they agreed to split all the costs evenly, how much did each of them pay?',
        "answer": 34,
        "examples": [{'input': {'x1': 3, 'x2': 2}, 'output': 34}],
        });
    fs.writeFileSync('json2/189.json', json);
}
doit();
