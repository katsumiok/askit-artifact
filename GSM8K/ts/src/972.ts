import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/972.json')) {
        console.log("Skipping 972")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mrs. Harrington bought {{x1}} boxes of oranges at the market. She gave her mom and her sister {{x2}} boxes of oranges each. Then she kept 1/4 of the oranges and sold the rest. How many oranges did Mrs. Harrington sell if each box contains {{x3}} oranges?', [], [{'input': {'x1': 12, 'x2': 2, 'x3': 20}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 2, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 972,
        "question": 'Mrs. Harrington bought 12 boxes of oranges at the market. She gave her mom and her sister 2 boxes of oranges each. Then she kept 1/4 of the oranges and sold the rest. How many oranges did Mrs. Harrington sell if each box contains 20 oranges?',
        "answer": 120,
        "examples": [{'input': {'x1': 12, 'x2': 2, 'x3': 20}, 'output': 120}],
        });
    fs.writeFileSync('json/972.json', json);
}
doit();
