import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/933.json')) {
        console.log("Skipping 933")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('A charity group decides to do a yard sale. {{x1}} people donate {{x2}} boxes of stuff each.  They also have {{x3}} boxes of stuff already.  They can fit {{x4}} boxes worth of stuff per table.  If they already own {{x5}} tables, how many new tables do they need?', [], [{'input': {'x1': 10, 'x2': 5, 'x3': 10, 'x4': 2, 'x5': 15}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5, 'x3': 10, 'x4': 2, 'x5': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 933,
        "question": 'A charity group decides to do a yard sale.  10 people donate 5 boxes of stuff each.  They also have 10 boxes of stuff already.  They can fit 2 boxes worth of stuff per table.  If they already own 15 tables, how many new tables do they need?',
        "answer": 15,
        "examples": [{'input': {'x1': 10, 'x2': 5, 'x3': 10, 'x4': 2, 'x5': 15}, 'output': 15}],
        });
    fs.writeFileSync('json/933.json', json);
}
doit();
