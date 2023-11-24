import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/731.json')) {
        console.log("Skipping 731")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Each sleeve of graham crackers makes the base for {{x1}} large smores.  There are {{x2}} sleeves in a box.  If {{x3}} kids want {{x4}} smores apiece and {{x5}} adults will eat {{x6}} smore apiece, how many boxes of graham crackers will they need?', [], [{'input': {'x1': 8, 'x2': 3, 'x3': 9, 'x4': 2, 'x5': 6, 'x6': 1}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 3, 'x3': 9, 'x4': 2, 'x5': 6, 'x6': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 731,
        "question": 'Each sleeve of graham crackers makes the base for 8 large smores.  There are 3 sleeves in a box.  If 9 kids want 2 smores apiece and 6 adults will eat 1 smore apiece, how many boxes of graham crackers will they need?',
        "answer": 1,
        "examples": [{'input': {'x1': 8, 'x2': 3, 'x3': 9, 'x4': 2, 'x5': 6, 'x6': 1}, 'output': 1}],
        });
    fs.writeFileSync('json/731.json', json);
}
doit();
