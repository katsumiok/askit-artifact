import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1287.json')) {
        console.log("Skipping 1287")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('In a family, there are {{x1}} brothers and {{x2}} sisters. All sisters are the same age, which is 16. One of the brothers is {{x3}} years old, which is half the age of the older brother. What is the total age of all these siblings?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 12}, 'output': 84}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 84;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1287,
        "question": 'In a family, there are 2 brothers and 3 sisters. All sisters are the same age, which is 16. One of the brothers is 12 years old, which is half the age of the older brother. What is the total age of all these siblings?',
        "answer": 84,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 12}, 'output': 84}],
        });
    fs.writeFileSync('json/1287.json', json);
}
doit();
