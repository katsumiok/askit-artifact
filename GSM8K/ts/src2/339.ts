import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/339.json')) {
        console.log("Skipping 339")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Farmer Brown has {{x1}} animals on his farm, all either chickens or cows. He has twice as many chickens as cows. How many legs do the animals have, all together?', [], [{'input': {'x1': 60}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 339,
        "question": 'Farmer Brown has 60 animals on his farm, all either chickens or cows. He has twice as many chickens as cows. How many legs do the animals have, all together?',
        "answer": 160,
        "examples": [{'input': {'x1': 60}, 'output': 160}],
        });
    fs.writeFileSync('json2/339.json', json);
}
doit();
