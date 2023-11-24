import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/590.json')) {
        console.log("Skipping 590")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Alex is getting ready to attend an event that she has hosted and wants to make sure that she has enough seats for everyone. She invites {{x1}} people via email and each invited person says that they will also invite {{x2}} of their friends. She then calls {{x3}} of her friends to invite them too and {{x4}} of them say they will be bringing their spouses. How many seats will Alex need?', [], [{'input': {'x1': 100, 'x2': 2, 'x3': 10, 'x4': 8}, 'output': 319}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 2, 'x3': 10, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 319;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 590,
        "question": 'Alex is getting ready to attend an event that she has hosted and wants to make sure that she has enough seats for everyone. She invites 100 people via email and each invited person says that they will also invite 2 of their friends. She then calls 10 of her friends to invite them too and 8 of them say they will be bringing their spouses. How many seats will Alex need?',
        "answer": 319,
        "examples": [{'input': {'x1': 100, 'x2': 2, 'x3': 10, 'x4': 8}, 'output': 319}],
        });
    fs.writeFileSync('json/590.json', json);
}
doit();
