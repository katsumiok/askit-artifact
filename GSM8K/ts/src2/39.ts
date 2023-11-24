import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/39.json')) {
        console.log("Skipping 39")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Dana can run at a rate of speed four times faster than she can walk, but she can skip at a rate of speed that is half as fast as she can run. If she can skip at {{x1}} miles per hour, how many miles can she travel in six hours if she spends one-third of the time running and two-thirds of the time walking?', [], [{'input': {'x1': 3}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 39,
        "question": 'Dana can run at a rate of speed four times faster than she can walk, but she can skip at a rate of speed that is half as fast as she can run. If she can skip at 3 miles per hour, how many miles can she travel in six hours if she spends one-third of the time running and two-thirds of the time walking?',
        "answer": 18,
        "examples": [{'input': {'x1': 3}, 'output': 18}],
        });
    fs.writeFileSync('json2/39.json', json);
}
doit();
