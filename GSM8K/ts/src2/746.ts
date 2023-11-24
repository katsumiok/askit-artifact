import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/746.json')) {
        console.log("Skipping 746")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Jake's family wants to compare the cost of the two different amusement parks. The first amusement park has a $26 fee for each adult and a $12 fee for each child; while the second amusement park has a $14 fee for each adult and $10 for each child. If there are {{x1}} adults and {{x2}} children in their family, how much will they be able to save if they choose the second amusement park over the first?", [], [{'input': {'x1': 2, 'x2': 2}, 'output': 28}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 28;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 746,
        "question": "Jake's family wants to compare the cost of the two different amusement parks. The first amusement park has a $26 fee for each adult and a $12 fee for each child; while the second amusement park has a $14 fee for each adult and $10 for each child. If there are 2 adults and 2 children in their family, how much will they be able to save if they choose the second amusement park over the first?",
        "answer": 28,
        "examples": [{'input': {'x1': 2, 'x2': 2}, 'output': 28}],
        });
    fs.writeFileSync('json2/746.json', json);
}
doit();
