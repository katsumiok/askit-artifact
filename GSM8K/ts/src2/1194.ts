import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1194.json')) {
        console.log("Skipping 1194")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('From her science class study, Brady learned that each whale in the sea has {{x1}} gallons of blood. She also learned that a shark has three times as much blood as a whale. Calculate the number of gallons of blood that ten sharks swimming in the sea have.', [], [{'input': {'x1': 40}, 'output': 1200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1194,
        "question": 'From her science class study, Brady learned that each whale in the sea has 40 gallons of blood. She also learned that a shark has three times as much blood as a whale. Calculate the number of gallons of blood that ten sharks swimming in the sea have.',
        "answer": 1200,
        "examples": [{'input': {'x1': 40}, 'output': 1200}],
        });
    fs.writeFileSync('json2/1194.json', json);
}
doit();
