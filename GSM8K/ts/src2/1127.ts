import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1127.json')) {
        console.log("Skipping 1127")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Rani is obsessed with sports cars. She wonders what the faster car ever made can go so she looks it up. What she finds out is that the fastest car was 1.25 times faster than the 2nd fastest car. The 2nd fastest car was {{x1}} times faster than the average car. The average car can go {{x2}} Miles per hour. How fast does the faster car go?', [], [{'input': {'x1': 5, 'x2': 120}, 'output': 750}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 120});
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
        "id": 1127,
        "question": 'Rani is obsessed with sports cars. She wonders what the faster car ever made can go so she looks it up. What she finds out is that the fastest car was 1.25 times faster than the 2nd fastest car. The 2nd fastest car was 5 times faster than the average car. The average car can go 120 Miles per hour. How fast does the faster car go?',
        "answer": 750,
        "examples": [{'input': {'x1': 5, 'x2': 120}, 'output': 750}],
        });
    fs.writeFileSync('json2/1127.json', json);
}
doit();
