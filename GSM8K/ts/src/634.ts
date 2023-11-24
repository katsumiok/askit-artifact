import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/634.json')) {
        console.log("Skipping 634")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Tommy caught {{x1}} more fish than Darren and Darren caught {{x2}} less than Naomi. If Naomi caught {{x3}} fish, how many fish did Tommy catch?', [], [{'input': {'x1': 3, 'x2': 6, 'x3': 17}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 6, 'x3': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 634,
        "question": 'Tommy caught 3 more fish than Darren and Darren caught 6 less than Naomi. If Naomi caught 17 fish, how many fish did Tommy catch?',
        "answer": 14,
        "examples": [{'input': {'x1': 3, 'x2': 6, 'x3': 17}, 'output': 14}],
        });
    fs.writeFileSync('json/634.json', json);
}
doit();
