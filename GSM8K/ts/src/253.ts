import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/253.json')) {
        console.log("Skipping 253")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Bill starts on the 3rd floor. He rides the elevator up to the floor that's equal to {{x1}} times his starting floor plus 6. What floor is Bill on now?", [], [{'input': {'x1': 4}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 253,
        "question": "Bill starts on the 3rd floor. He rides the elevator up to the floor that's equal to 4 times his starting floor plus 6. What floor is Bill on now?",
        "answer": 18,
        "examples": [{'input': {'x1': 4}, 'output': 18}],
        });
    fs.writeFileSync('json/253.json', json);
}
doit();
