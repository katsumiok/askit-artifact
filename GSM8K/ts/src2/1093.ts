import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1093.json')) {
        console.log("Skipping 1093")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Tony is painting a room with four walls. The north and south walls are {{x1}} x {{x2}} feet. The east and west walls are {{x3}} x {{x4}} feet. A gallon of paint can cover {{x5}} square feet and cost $12. How much will it cost to paint the room?', [], [{'input': {'x1': 10, 'x2': 8, 'x3': 5, 'x4': 8, 'x5': 20}, 'output': 144}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 8, 'x3': 5, 'x4': 8, 'x5': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 144;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1093,
        "question": 'Tony is painting a room with four walls. The north and south walls are 10 x 8 feet. The east and west walls are 5 x 8 feet. A gallon of paint can cover 20 square feet and cost $12. How much will it cost to paint the room?',
        "answer": 144,
        "examples": [{'input': {'x1': 10, 'x2': 8, 'x3': 5, 'x4': 8, 'x5': 20}, 'output': 144}],
        });
    fs.writeFileSync('json2/1093.json', json);
}
doit();
