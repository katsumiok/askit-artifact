import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1257.json')) {
        console.log("Skipping 1257")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Bob thinks he needs {{x1}} popsicle sticks to recreate the Washington Monument for his history project.  His favorite popsicles come {{x2}} to a box and cost $2.00 per box.  How much will it cost Bob to build his project?', [], [{'input': {'x1': 56, 'x2': 8}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 56, 'x2': 8});
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
        "id": 1257,
        "question": 'Bob thinks he needs 56 popsicle sticks to recreate the Washington Monument for his history project.  His favorite popsicles come 8 to a box and cost $2.00 per box.  How much will it cost Bob to build his project?',
        "answer": 14,
        "examples": [{'input': {'x1': 56, 'x2': 8}, 'output': 14}],
        });
    fs.writeFileSync('json2/1257.json', json);
}
doit();
