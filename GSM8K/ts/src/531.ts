import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/531.json')) {
        console.log("Skipping 531")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('48 people are riding a bus. On the first stop, {{x1}} passengers get off, and {{x2}} times as many people as the number who got off from the bus get into the bus. On the second stop 21, passengers get off and {{x3}} times fewer passengers get on. How many passengers are riding the bus after the second stop?', [], [{'input': {'x1': 8, 'x2': 5, 'x3': 3}, 'output': 66}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 66;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 531,
        "question": '48 people are riding a bus. On the first stop, 8 passengers get off, and 5 times as many people as the number who got off from the bus get into the bus. On the second stop 21, passengers get off and 3 times fewer passengers get on. How many passengers are riding the bus after the second stop?',
        "answer": 66,
        "examples": [{'input': {'x1': 8, 'x2': 5, 'x3': 3}, 'output': 66}],
        });
    fs.writeFileSync('json/531.json', json);
}
doit();
