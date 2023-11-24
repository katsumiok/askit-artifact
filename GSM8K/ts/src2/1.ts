import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1.json')) {
        console.log("Skipping 1")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A robe takes {{x1}} bolts of blue fiber and half that much white fiber.  How many bolts in total does it take?', [], [{'input': {'x1': 2}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 1,
        "question": 'A robe takes 2 bolts of blue fiber and half that much white fiber.  How many bolts in total does it take?',
        "answer": 3,
        "examples": [{'input': {'x1': 2}, 'output': 3}],
        });
    fs.writeFileSync('json2/1.json', json);
}
doit();
