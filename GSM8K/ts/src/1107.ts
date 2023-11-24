import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1107.json')) {
        console.log("Skipping 1107")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('How many girls are in the school if 40% of a school population is made up of {{x1}} boys?', [], [{'input': {'x1': 240}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 240});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1107,
        "question": 'How many girls are in the school if 40% of a school population is made up of 240 boys?',
        "answer": 360,
        "examples": [{'input': {'x1': 240}, 'output': 360}],
        });
    fs.writeFileSync('json/1107.json', json);
}
doit();
