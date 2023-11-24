import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1248.json')) {
        console.log("Skipping 1248")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jason works as a salesperson at a car dealership.  He needs to sell {{x1}} cars this month to earn a big bonus.  He knows based on historical averages, that for every {{x2}} telephone calls he makes to potential customers, he gets one person to come into the car dealership to look at new cars.  And for every two customers that come into the car dealership, one will buy a car.  Based on these average numbers, how many telephone calls would Jason need to make to sell {{x3}} cars and earn his bonus?', [], [{'input': {'x1': 15, 'x2': 25, 'x3': 15}, 'output': 750}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 25, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 750;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1248,
        "question": 'Jason works as a salesperson at a car dealership.  He needs to sell 15 cars this month to earn a big bonus.  He knows based on historical averages, that for every 25 telephone calls he makes to potential customers, he gets one person to come into the car dealership to look at new cars.  And for every two customers that come into the car dealership, one will buy a car.  Based on these average numbers, how many telephone calls would Jason need to make to sell 15 cars and earn his bonus?',
        "answer": 750,
        "examples": [{'input': {'x1': 15, 'x2': 25, 'x3': 15}, 'output': 750}],
        });
    fs.writeFileSync('json/1248.json', json);
}
doit();
