import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1285.json')) {
        console.log("Skipping 1285")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The recent floods in Mamou’s country have left many families without food or shelter. To help, Mamou has volunteered to distribute 1,360 meals to the affected families. She gave out {{x1}} meals on Friday, {{x2}} meals on Saturday, and {{x3}} meals on Sunday. How many meals does she have left to distribute?', [], [{'input': {'x1': 64, 'x2': 30, 'x3': 48}, 'output': 1218}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 64, 'x2': 30, 'x3': 48});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1218;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1285,
        "question": 'The recent floods in Mamou’s country have left many families without food or shelter. To help, Mamou has volunteered to distribute 1,360 meals to the affected families. She gave out 64 meals on Friday, 30 meals on Saturday, and 48 meals on Sunday. How many meals does she have left to distribute?',
        "answer": 1218,
        "examples": [{'input': {'x1': 64, 'x2': 30, 'x3': 48}, 'output': 1218}],
        });
    fs.writeFileSync('json2/1285.json', json);
}
doit();
