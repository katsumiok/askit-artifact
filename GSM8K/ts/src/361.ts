import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/361.json')) {
        console.log("Skipping 361")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('A train travels between {{x1}} different cities.  It goes {{x2}} miles from the first city to the second city, {{x3}} miles from the second city to the third city, and {{x4}} miles less than that combined distance to go from the third city to the first city.  It does this trip {{x5}} times a day.  The train needs service every 18,000 miles so how many days does it go between services?', [], [{'input': {'x1': 3, 'x2': 75, 'x3': 100, 'x4': 50, 'x5': 3}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 75, 'x3': 100, 'x4': 50, 'x5': 3});
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
        "id": 361,
        "question": 'A train travels between 3 different cities.  It goes 75 miles from the first city to the second city, 100 miles from the second city to the third city, and 50 miles less than that combined distance to go from the third city to the first city.  It does this trip 3 times a day.  The train needs service every 18,000 miles so how many days does it go between services?',
        "answer": 20,
        "examples": [{'input': {'x1': 3, 'x2': 75, 'x3': 100, 'x4': 50, 'x5': 3}, 'output': 20}],
        });
    fs.writeFileSync('json/361.json', json);
}
doit();
