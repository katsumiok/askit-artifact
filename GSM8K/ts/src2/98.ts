import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/98.json')) {
        console.log("Skipping 98")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Cars have lined up on the motorway. Some of the cars drive through in the first {{x1}} minutes of the traffic jam, then {{x2}} more cars drive through in the remaining {{x3}} minutes of the jam. {{x4}} cars from the line take an exit so they don't have to drive through the traffic jam. If there were originally {{x5}} cars on the motorway, how many cars drove through the traffic jam in the first {{x6}} minutes?", [], [{'input': {'x1': 15, 'x2': 20, 'x3': 15, 'x4': 5, 'x5': 30, 'x6': 15}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 20, 'x3': 15, 'x4': 5, 'x5': 30, 'x6': 15});
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
        "id": 98,
        "question": "Cars have lined up on the motorway. Some of the cars drive through in the first 15 minutes of the traffic jam, then 20 more cars drive through in the remaining 15 minutes of the jam. 5 cars from the line take an exit so they don't have to drive through the traffic jam. If there were originally 30 cars on the motorway, how many cars drove through the traffic jam in the first 15 minutes?",
        "answer": 5,
        "examples": [{'input': {'x1': 15, 'x2': 20, 'x3': 15, 'x4': 5, 'x5': 30, 'x6': 15}, 'output': 5}],
        });
    fs.writeFileSync('json2/98.json', json);
}
doit();
