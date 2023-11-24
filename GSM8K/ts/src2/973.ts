import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/973.json')) {
        console.log("Skipping 973")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("India has {{x1}} more than half the number of states in the USA. What's the total number of states in both countries together?", [], [{'input': {'x1': 4}, 'output': 79}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 79;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 973,
        "question": "India has 4 more than half the number of states in the USA. What's the total number of states in both countries together?",
        "answer": 79,
        "examples": [{'input': {'x1': 4}, 'output': 79}],
        });
    fs.writeFileSync('json2/973.json', json);
}
doit();
