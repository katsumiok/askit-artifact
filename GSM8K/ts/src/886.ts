import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/886.json')) {
        console.log("Skipping 886")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("A singer has {{x1}} microphones that he wants to arrange in pairs on a stage. While making the arrangement, he realizes that 20% of the microphones won't find any space to fit in after arranging the rest in pairs. How many pairs of microphones was he able to arrange on the stage?", [], [{'input': {'x1': 50}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 886,
        "question": "A singer has 50 microphones that he wants to arrange in pairs on a stage. While making the arrangement, he realizes that 20% of the microphones won't find any space to fit in after arranging the rest in pairs. How many pairs of microphones was he able to arrange on the stage?",
        "answer": 20,
        "examples": [{'input': {'x1': 50}, 'output': 20}],
        });
    fs.writeFileSync('json/886.json', json);
}
doit();
