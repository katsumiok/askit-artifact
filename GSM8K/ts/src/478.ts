import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/478.json')) {
        console.log("Skipping 478")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A company decided to take its employees on a tour to explore an ancient site. The employees were divided into {{x1}} groups of {{x2}} employees. Each group was assigned {{x3}} tour guides. How many is the total number of people going on this tour?', [], [{'input': {'x1': 3, 'x2': 200, 'x3': 7}, 'output': 621}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 200, 'x3': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 621;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 478,
        "question": 'A company decided to take its employees on a tour to explore an ancient site. The employees were divided into 3 groups of 200 employees. Each group was assigned 7 tour guides. How many is the total number of people going on this tour?',
        "answer": 621,
        "examples": [{'input': {'x1': 3, 'x2': 200, 'x3': 7}, 'output': 621}],
        });
    fs.writeFileSync('json/478.json', json);
}
doit();
