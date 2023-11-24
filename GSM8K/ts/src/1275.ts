import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1275.json')) {
        console.log("Skipping 1275")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("John's car breaks down.  The car weighs {{x1}} pounds and he has luggage in it weighing {{x2}} pounds.  He also has his two young children who weigh {{x3}} pounds each in it.  If the force to move the car is 1% of the weight how much force does he need to push the car?", [], [{'input': {'x1': 1200, 'x2': 250, 'x3': 75}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1200, 'x2': 250, 'x3': 75});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1275,
        "question": "John's car breaks down.  The car weighs 1200 pounds and he has luggage in it weighing 250 pounds.  He also has his two young children who weigh 75 pounds each in it.  If the force to move the car is 1% of the weight how much force does he need to push the car?",
        "answer": 16,
        "examples": [{'input': {'x1': 1200, 'x2': 250, 'x3': 75}, 'output': 16}],
        });
    fs.writeFileSync('json/1275.json', json);
}
doit();
