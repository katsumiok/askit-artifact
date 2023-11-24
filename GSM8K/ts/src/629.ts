import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/629.json')) {
        console.log("Skipping 629")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('James gets a job selling used cars.  He sold {{x1}} cars that cost $25,000 each.  The company paid 30% of that price to acquire the cars.  He got a 10% commission on the profits.  How much did he make?', [], [{'input': {'x1': 10}, 'output': 17500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 629,
        "question": 'James gets a job selling used cars.  He sold 10 cars that cost $25,000 each.  The company paid 30% of that price to acquire the cars.  He got a 10% commission on the profits.  How much did he make?',
        "answer": 17500,
        "examples": [{'input': {'x1': 10}, 'output': 17500}],
        });
    fs.writeFileSync('json/629.json', json);
}
doit();
