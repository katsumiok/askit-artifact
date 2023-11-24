import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/75.json')) {
        console.log("Skipping 75")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Luke is spending time at the beach building sandcastles. He eventually notices that each level of a sandcastle will have half the square footage as the level below it. If he makes a {{x1}} leveled sandcastle where the top level has a square footage of 16, what is the average square footage of a level?', [], [{'input': {'x1': 4}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 75,
        "question": 'Luke is spending time at the beach building sandcastles. He eventually notices that each level of a sandcastle will have half the square footage as the level below it. If he makes a 4 leveled sandcastle where the top level has a square footage of 16, what is the average square footage of a level?',
        "answer": 60,
        "examples": [{'input': {'x1': 4}, 'output': 60}],
        });
    fs.writeFileSync('json2/75.json', json);
}
doit();
