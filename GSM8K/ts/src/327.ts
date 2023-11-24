import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/327.json')) {
        console.log("Skipping 327")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Oscar has {{x1}} lollipops and eats {{x2}} on his way to school.  He passes {{x3}} out to his friends.  He buys twice as many lollipops on his way home as he gave to his friends.  He eats {{x4}} more that night and {{x5}} more in the morning.  How many lollipops does Oscar have?', [], [{'input': {'x1': 24, 'x2': 2, 'x3': 14, 'x4': 3, 'x5': 2}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 2, 'x3': 14, 'x4': 3, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 327,
        "question": 'Oscar has 24 lollipops and eats 2 on his way to school.  He passes 14 out to his friends.  He buys twice as many lollipops on his way home as he gave to his friends.  He eats 3 more that night and 2 more in the morning.  How many lollipops does Oscar have?',
        "answer": 31,
        "examples": [{'input': {'x1': 24, 'x2': 2, 'x3': 14, 'x4': 3, 'x5': 2}, 'output': 31}],
        });
    fs.writeFileSync('json/327.json', json);
}
doit();
