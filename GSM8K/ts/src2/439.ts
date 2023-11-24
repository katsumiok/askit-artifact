import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/439.json')) {
        console.log("Skipping 439")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Wayne and Bernadette are movie stars heading to the premiere of their latest film. Bernadette wants to arrive {{x1}} minutes before Wayne. Wayne is staying at a hotel close to the premiere theater, and Bernadette is staying at her high-rise apartment in the same city. The drive from Bernadette’s apartment takes four times as long as the drive from Wayne’s hotel. If it takes Wayne four minutes to be driven to the theater, how much earlier should Bernadette leave than Wayne to get to the theater first?', [], [{'input': {'x1': 5}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 439,
        "question": 'Wayne and Bernadette are movie stars heading to the premiere of their latest film. Bernadette wants to arrive 5 minutes before Wayne. Wayne is staying at a hotel close to the premiere theater, and Bernadette is staying at her high-rise apartment in the same city. The drive from Bernadette’s apartment takes four times as long as the drive from Wayne’s hotel. If it takes Wayne four minutes to be driven to the theater, how much earlier should Bernadette leave than Wayne to get to the theater first?',
        "answer": 17,
        "examples": [{'input': {'x1': 5}, 'output': 17}],
        });
    fs.writeFileSync('json2/439.json', json);
}
doit();
