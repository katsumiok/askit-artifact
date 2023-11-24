import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/510.json')) {
        console.log("Skipping 510")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("For a New Year's resolution, Andy wants to lose {{x1}} lbs. by his birthday, which is July 19th. Today is December 31st. If Andy needs to burn {{x2}} calories to lose a pound, how much of a calorie deficit (net amount of calories burned vs. calories consumed) does he need each day to reach his goal?", [], [{'input': {'x1': 30, 'x2': 3500}, 'output': 525}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 3500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 525;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 510,
        "question": "For a New Year's resolution, Andy wants to lose 30 lbs. by his birthday, which is July 19th. Today is December 31st. If Andy needs to burn 3500 calories to lose a pound, how much of a calorie deficit (net amount of calories burned vs. calories consumed) does he need each day to reach his goal?",
        "answer": 525,
        "examples": [{'input': {'x1': 30, 'x2': 3500}, 'output': 525}],
        });
    fs.writeFileSync('json2/510.json', json);
}
doit();
