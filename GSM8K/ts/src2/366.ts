import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/366.json')) {
        console.log("Skipping 366")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('To be promoted to the next school year, Jane takes {{x1}} tests that together must total at least {{x2}} points. On her first test, Jane scored {{x3}} points, on the second test she scored {{x4}} points. What is the minimum number of points she must score on the third test to pass?', [], [{'input': {'x1': 3, 'x2': 42, 'x3': 15, 'x4': 18}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 42, 'x3': 15, 'x4': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 366,
        "question": 'To be promoted to the next school year, Jane takes 3 tests that together must total at least 42 points. On her first test, Jane scored 15 points, on the second test she scored 18 points. What is the minimum number of points she must score on the third test to pass?',
        "answer": 9,
        "examples": [{'input': {'x1': 3, 'x2': 42, 'x3': 15, 'x4': 18}, 'output': 9}],
        });
    fs.writeFileSync('json2/366.json', json);
}
doit();
