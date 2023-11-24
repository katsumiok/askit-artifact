import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/512.json')) {
        console.log("Skipping 512")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Hannah needs to drink {{x1}} ml of water for each kilometer she runs. If her gym teacher tells her to run {{x2}} laps and each lap is 0.25 km, how many milliliters of water will Hannah need to drink?', [], [{'input': {'x1': 60, 'x2': 8}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 512,
        "question": 'Hannah needs to drink 60 ml of water for each kilometer she runs. If her gym teacher tells her to run 8 laps and each lap is 0.25 km, how many milliliters of water will Hannah need to drink?',
        "answer": 120,
        "examples": [{'input': {'x1': 60, 'x2': 8}, 'output': 120}],
        });
    fs.writeFileSync('json/512.json', json);
}
doit();
