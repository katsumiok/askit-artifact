import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1138.json')) {
        console.log("Skipping 1138")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Melanie's father opens up an animal farm starting with {{x1}} cows and {{x2}} chickens. Milkie Cows Limited brings him {{x3}} cows per day and Broilers Limited brings him {{x4}} chickens per day, for three weeks. What's the total number of animals on the farm after three weeks?", [], [{'input': {'x1': 50, 'x2': 20, 'x3': 20, 'x4': 10}, 'output': 700}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 20, 'x3': 20, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 700;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1138,
        "question": "Melanie's father opens up an animal farm starting with 50 cows and 20 chickens. Milkie Cows Limited brings him 20 cows per day and Broilers Limited brings him 10 chickens per day, for three weeks. What's the total number of animals on the farm after three weeks?",
        "answer": 700,
        "examples": [{'input': {'x1': 50, 'x2': 20, 'x3': 20, 'x4': 10}, 'output': 700}],
        });
    fs.writeFileSync('json2/1138.json', json);
}
doit();
