import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/57.json')) {
        console.log("Skipping 57")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("A wooden bridge can carry no more than {{x1}} pounds. A delivery truck filled with identical boxes, each weighing {{x2}} pounds, will pass over the bridge. The combined weight of the driver and the empty truck is {{x3}} pounds. What is the maximum number of boxes which can be loaded onto the truck while not exceeding the bridge's weight limit?", [], [{'input': {'x1': 5000, 'x2': 15, 'x3': 3755}, 'output': 83}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5000, 'x2': 15, 'x3': 3755});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 83;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 57,
        "question": "A wooden bridge can carry no more than 5000 pounds. A delivery truck filled with identical boxes, each weighing 15 pounds, will pass over the bridge. The combined weight of the driver and the empty truck is 3755 pounds. What is the maximum number of boxes which can be loaded onto the truck while not exceeding the bridge's weight limit?",
        "answer": 83,
        "examples": [{'input': {'x1': 5000, 'x2': 15, 'x3': 3755}, 'output': 83}],
        });
    fs.writeFileSync('json2/57.json', json);
}
doit();
