import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/839.json')) {
        console.log("Skipping 839")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A farmer extracts {{x1}} liters of milk a day from a cow. Since he has {{x2}} cows, how many more cows does he need to have to produce {{x3}} liters of milk a day?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 25}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 839,
        "question": 'A farmer extracts 5 liters of milk a day from a cow. Since he has 3 cows, how many more cows does he need to have to produce 25 liters of milk a day?',
        "answer": 2,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 25}, 'output': 2}],
        });
    fs.writeFileSync('json/839.json', json);
}
doit();
