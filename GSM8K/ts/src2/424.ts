import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/424.json')) {
        console.log("Skipping 424")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('The employees of Google went on a day trip. {{x1}} buses were rented that have the capacity of holding {{x2}} employees. {{x3}} minibusses that can hold {{x4}} employees, and {{x5}} minivans that can hold {{x6}} employees. How many employees can join the day trip?', [], [{'input': {'x1': 4, 'x2': 60, 'x3': 6, 'x4': 30, 'x5': 10, 'x6': 15}, 'output': 570}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 60, 'x3': 6, 'x4': 30, 'x5': 10, 'x6': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 570;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 424,
        "question": 'The employees of Google went on a day trip. 4 buses were rented that have the capacity of holding 60 employees. 6 minibusses that can hold 30 employees, and 10 minivans that can hold 15 employees. How many employees can join the day trip?',
        "answer": 570,
        "examples": [{'input': {'x1': 4, 'x2': 60, 'x3': 6, 'x4': 30, 'x5': 10, 'x6': 15}, 'output': 570}],
        });
    fs.writeFileSync('json2/424.json', json);
}
doit();
