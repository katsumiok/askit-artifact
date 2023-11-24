import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1216.json')) {
        console.log("Skipping 1216")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A bus has a capacity of {{x1}} people. When it departed Chengli city, it had {{x2}} people. On the first stop, {{x3}} people entered the bus. On the second station, 3/4 of the total number of people who entered the bus at the first station entered the bus. If the number of passengers on the bus doubled at the third station, calculate the total number of people required to fill the remaining spaces on the bus.', [], [{'input': {'x1': 200, 'x2': 20, 'x3': 40}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 20, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1216,
        "question": 'A bus has a capacity of 200 people. When it departed Chengli city, it had 20 people. On the first stop, 40 people entered the bus. On the second station, 3/4 of the total number of people who entered the bus at the first station entered the bus. If the number of passengers on the bus doubled at the third station, calculate the total number of people required to fill the remaining spaces on the bus.',
        "answer": 20,
        "examples": [{'input': {'x1': 200, 'x2': 20, 'x3': 40}, 'output': 20}],
        });
    fs.writeFileSync('json/1216.json', json);
}
doit();
