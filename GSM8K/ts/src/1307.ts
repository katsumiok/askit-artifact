import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1307.json')) {
        console.log("Skipping 1307")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('James is putting together {{x1}} tables.  Each table has {{x2}} legs and each leg needs {{x3}} screws.  He has {{x4}} screws.  How many screws will he have left over?', [], [{'input': {'x1': 4, 'x2': 4, 'x3': 2, 'x4': 40}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4, 'x3': 2, 'x4': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1307,
        "question": 'James is putting together 4 tables.  Each table has 4 legs and each leg needs 2 screws.  He has 40 screws.  How many screws will he have left over?',
        "answer": 8,
        "examples": [{'input': {'x1': 4, 'x2': 4, 'x3': 2, 'x4': 40}, 'output': 8}],
        });
    fs.writeFileSync('json/1307.json', json);
}
doit();
