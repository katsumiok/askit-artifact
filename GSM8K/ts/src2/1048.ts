import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1048.json')) {
        console.log("Skipping 1048")
        return;
    }
    // measure time
    const f = define<number, {}>('Ben bought a car for $20000 in 2007. The price of the car depreciates at a constant rate of 21% per year. Find the price of the car in the year 2010.', [], [{'input': {}, 'output': 7400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1048,
        "question": 'Ben bought a car for $20000 in 2007. The price of the car depreciates at a constant rate of 21% per year. Find the price of the car in the year 2010.',
        "answer": 7400,
        "examples": [{'input': {}, 'output': 7400}],
        });
    fs.writeFileSync('json2/1048.json', json);
}
doit();
