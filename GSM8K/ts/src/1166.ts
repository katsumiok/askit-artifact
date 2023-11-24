import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1166.json')) {
        console.log("Skipping 1166")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Generally, a 5-year-old avocado tree produces {{x1}} fruits, a 6-year-old one produces {{x2}} times the initial amount of fruits, a 7-year-old one produces {{x3}} times the initial amount, and an 8-year-old produces {{x4}} fruits less than a 10-year-old one. During the ninth year, the avocado tree doesn't produce any fruit, and then a 10-year-old tree produces {{x5}} times the initial amount of fruits. How many total fruits can an avocado tree produce during its {{x6}} years of life?", [], [{'input': {'x1': 50, 'x2': 3, 'x3': 7, 'x4': 200, 'x5': 20, 'x6': 10}, 'output': 2350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 3, 'x3': 7, 'x4': 200, 'x5': 20, 'x6': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1166,
        "question": "Generally, a 5-year-old avocado tree produces 50 fruits, a 6-year-old one produces 3 times the initial amount of fruits, a 7-year-old one produces 7 times the initial amount, and an 8-year-old produces 200 fruits less than a 10-year-old one. During the ninth year, the avocado tree doesn't produce any fruit, and then a 10-year-old tree produces 20 times the initial amount of fruits. How many total fruits can an avocado tree produce during its 10 years of life?",
        "answer": 2350,
        "examples": [{'input': {'x1': 50, 'x2': 3, 'x3': 7, 'x4': 200, 'x5': 20, 'x6': 10}, 'output': 2350}],
        });
    fs.writeFileSync('json/1166.json', json);
}
doit();
