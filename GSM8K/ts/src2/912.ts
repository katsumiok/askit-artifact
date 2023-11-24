import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/912.json')) {
        console.log("Skipping 912")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John drinks a bottle of water every half hour.  A normal sudoku puzzle takes him {{x1}} minutes.  An extreme sudoku takes {{x2}} times that long.  How many bottles of water does he drink in that time?', [], [{'input': {'x1': 45, 'x2': 4}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 45, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 912,
        "question": 'John drinks a bottle of water every half hour.  A normal sudoku puzzle takes him 45 minutes.  An extreme sudoku takes 4 times that long.  How many bottles of water does he drink in that time?',
        "answer": 6,
        "examples": [{'input': {'x1': 45, 'x2': 4}, 'output': 6}],
        });
    fs.writeFileSync('json2/912.json', json);
}
doit();
