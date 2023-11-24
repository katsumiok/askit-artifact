import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1158.json')) {
        console.log("Skipping 1158")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("The Hortex company produces bottled carrot juices. Every day it can produce {{x1}} bottles of these juices. Each juice can cover 20% of {{x2}} person'ts daily energy demand. How many more bottles of juices would Hortex have to produce to be able to satisfy 100% of the daily energy needs of {{x3}} people?", [], [{'input': {'x1': 4200, 'x2': 1, 'x3': 2300}, 'output': 7300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4200, 'x2': 1, 'x3': 2300});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1158,
        "question": "The Hortex company produces bottled carrot juices. Every day it can produce 4200 bottles of these juices. Each juice can cover 20% of 1 person'ts daily energy demand. How many more bottles of juices would Hortex have to produce to be able to satisfy 100% of the daily energy needs of 2300 people?",
        "answer": 7300,
        "examples": [{'input': {'x1': 4200, 'x2': 1, 'x3': 2300}, 'output': 7300}],
        });
    fs.writeFileSync('json/1158.json', json);
}
doit();
