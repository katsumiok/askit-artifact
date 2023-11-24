import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1217.json')) {
        console.log("Skipping 1217")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Pauline visits her favorite local museum three times a year. The cost of one visit is $2. After {{x1}} years, the cost of one visit has increased by 150%, but Pauline decided not to give up any visit and continued to go to the museum for {{x2}} more years. How much did Pauline spend on all visits to the museum?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1217,
        "question": 'Pauline visits her favorite local museum three times a year. The cost of one visit is $2. After 5 years, the cost of one visit has increased by 150%, but Pauline decided not to give up any visit and continued to go to the museum for 3 more years. How much did Pauline spend on all visits to the museum?',
        "answer": 75,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 75}],
        });
    fs.writeFileSync('json2/1217.json', json);
}
doit();
