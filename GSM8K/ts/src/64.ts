import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/64.json')) {
        console.log("Skipping 64")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Sophia is thinking of taking a road trip in her car, and would like to know how far she can drive on a single tank of gas. She has traveled {{x1}} miles since last filling her tank, and she needed to put in {{x2}} gallons of gas to fill it up again. The owner's manual for her car says that her tank holds {{x3}} gallons of gas. How many miles can Sophia drive on a single tank of gas?", [], [{'input': {'x1': 100, 'x2': 4, 'x3': 12}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 4, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 64,
        "question": "Sophia is thinking of taking a road trip in her car, and would like to know how far she can drive on a single tank of gas. She has traveled 100 miles since last filling her tank, and she needed to put in 4 gallons of gas to fill it up again. The owner's manual for her car says that her tank holds 12 gallons of gas. How many miles can Sophia drive on a single tank of gas?",
        "answer": 300,
        "examples": [{'input': {'x1': 100, 'x2': 4, 'x3': 12}, 'output': 300}],
        });
    fs.writeFileSync('json/64.json', json);
}
doit();
