import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/118.json')) {
        console.log("Skipping 118")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A customs officer at the main port of SeaSide clearances counted {{x1}} containers of imported vehicles, each having {{x2}} vehicles inside. The next day, more containers were brought in, and the total number of vehicles at the port became 30. Calculate the number of containers that were imported on the second day, assuming all the containers contain {{x3}} vehicles.', [], [{'input': {'x1': 2, 'x2': 5, 'x3': 5}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 5, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 118,
        "question": 'A customs officer at the main port of SeaSide clearances counted 2 containers of imported vehicles, each having 5 vehicles inside. The next day, more containers were brought in, and the total number of vehicles at the port became 30. Calculate the number of containers that were imported on the second day, assuming all the containers contain 5 vehicles.',
        "answer": 4,
        "examples": [{'input': {'x1': 2, 'x2': 5, 'x3': 5}, 'output': 4}],
        });
    fs.writeFileSync('json/118.json', json);
}
doit();
