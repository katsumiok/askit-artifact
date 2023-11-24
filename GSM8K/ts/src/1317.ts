import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1317.json')) {
        console.log("Skipping 1317")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Farmer Brown has {{x1}} animals on his farm, all either chickens or cows. They have a total of {{x2}} legs, all together. How many of the animals are chickens?', [], [{'input': {'x1': 20, 'x2': 70}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1317,
        "question": 'Farmer Brown has 20 animals on his farm, all either chickens or cows. They have a total of 70 legs, all together. How many of the animals are chickens?',
        "answer": 5,
        "examples": [{'input': {'x1': 20, 'x2': 70}, 'output': 5}],
        });
    fs.writeFileSync('json/1317.json', json);
}
doit();
