import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/821.json')) {
        console.log("Skipping 821")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Hunter counted {{x1}} cars packed in their school parking lot when entering class one morning. During the first break, he counted {{x2}} more cars in the parking lot. When he got out of class for the lunch break, he realized that 1/2 the number of cars in the parking lot had gone. What's the total number of cars he counted during lunch break?", [], [{'input': {'x1': 50, 'x2': 20}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 821,
        "question": "Hunter counted 50 cars packed in their school parking lot when entering class one morning. During the first break, he counted 20 more cars in the parking lot. When he got out of class for the lunch break, he realized that 1/2 the number of cars in the parking lot had gone. What's the total number of cars he counted during lunch break?",
        "answer": 35,
        "examples": [{'input': {'x1': 50, 'x2': 20}, 'output': 35}],
        });
    fs.writeFileSync('json/821.json', json);
}
doit();
