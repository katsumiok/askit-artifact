import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1266.json')) {
        console.log("Skipping 1266")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('The Kennel house keeps {{x1}} German Shepherds and {{x2}} Bulldogs. If a German Shepherd consumes {{x3}} kilograms of dog food and a bulldog consumes {{x4}} kilograms of dog food per day. How many kilograms of dog food will they need in a week?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 5, 'x4': 3}, 'output': 147}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 5, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 147;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1266,
        "question": 'The Kennel house keeps 3 German Shepherds and 2 Bulldogs. If a German Shepherd consumes 5 kilograms of dog food and a bulldog consumes 3 kilograms of dog food per day. How many kilograms of dog food will they need in a week?',
        "answer": 147,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 5, 'x4': 3}, 'output': 147}],
        });
    fs.writeFileSync('json/1266.json', json);
}
doit();
