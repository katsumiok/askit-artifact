import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/376.json')) {
        console.log("Skipping 376")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} pupils in a class. Half of the class likes blue. One-fourth of the remaining likes green and the rest likes yellow. How many pupils like the color yellow?', [], [{'input': {'x1': 40}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 376,
        "question": 'There are 40 pupils in a class. Half of the class likes blue. One-fourth of the remaining likes green and the rest likes yellow. How many pupils like the color yellow?',
        "answer": 15,
        "examples": [{'input': {'x1': 40}, 'output': 15}],
        });
    fs.writeFileSync('json2/376.json', json);
}
doit();
