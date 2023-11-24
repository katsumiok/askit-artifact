import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/999.json')) {
        console.log("Skipping 999")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A family of {{x1}} (2 adults and {{x2}} kids) are to divide a watermelon such that each adult gets a slice that is twice as big as that of each kid. What percentage of the watermelon does each adult get?', [], [{'input': {'x1': 6, 'x2': 4}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 999,
        "question": 'A family of 6 (2 adults and 4 kids) are to divide a watermelon such that each adult gets a slice that is twice as big as that of each kid. What percentage of the watermelon does each adult get?',
        "answer": 25,
        "examples": [{'input': {'x1': 6, 'x2': 4}, 'output': 25}],
        });
    fs.writeFileSync('json/999.json', json);
}
doit();
