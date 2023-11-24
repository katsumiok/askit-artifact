import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/139.json')) {
        console.log("Skipping 139")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In a candy machine, there are {{x1}} more than four times the number of pink gumballs as there are blue gumballs. If there are {{x2}} blue gumballs how many pink ones are there?', [], [{'input': {'x1': 22, 'x2': 12}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 22, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 139,
        "question": 'In a candy machine, there are 22 more than four times the number of pink gumballs as there are blue gumballs. If there are 12 blue gumballs how many pink ones are there?',
        "answer": 70,
        "examples": [{'input': {'x1': 22, 'x2': 12}, 'output': 70}],
        });
    fs.writeFileSync('json2/139.json', json);
}
doit();
