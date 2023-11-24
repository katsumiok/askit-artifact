import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/925.json')) {
        console.log("Skipping 925")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('There are {{x1}} gallons of water in a pool. Using a water pump, Anthony and his father fill a tank with half the amount of water in the pool. They use water from the tank to water their vegetable garden. If the tank is emptied at a rate of {{x2}} gallons of water per day, how many gallons of water will be remaining in the tank after {{x3}} days?', [], [{'input': {'x1': 10000, 'x2': 500, 'x3': 6}, 'output': 2000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10000, 'x2': 500, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 925,
        "question": 'There are 10000 gallons of water in a pool. Using a water pump, Anthony and his father fill a tank with half the amount of water in the pool. They use water from the tank to water their vegetable garden. If the tank is emptied at a rate of 500 gallons of water per day, how many gallons of water will be remaining in the tank after 6 days?',
        "answer": 2000,
        "examples": [{'input': {'x1': 10000, 'x2': 500, 'x3': 6}, 'output': 2000}],
        });
    fs.writeFileSync('json2/925.json', json);
}
doit();
