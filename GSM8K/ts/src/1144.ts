import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1144.json')) {
        console.log("Skipping 1144")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The ratio of men to women on a bus is 5:9. If the total number of passengers on the bus is 84, and {{x1}} women alight from the bus at the next stop, how many women have remained on the bus?', [], [{'input': {'x1': 20}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1144,
        "question": 'The ratio of men to women on a bus is 5:9. If the total number of passengers on the bus is 84, and 20 women alight from the bus at the next stop, how many women have remained on the bus?',
        "answer": 34,
        "examples": [{'input': {'x1': 20}, 'output': 34}],
        });
    fs.writeFileSync('json/1144.json', json);
}
doit();
