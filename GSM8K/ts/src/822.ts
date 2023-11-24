import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/822.json')) {
        console.log("Skipping 822")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John does {{x1}} cycles of work a day.  Each cycle has {{x2}} different tasks and each task pays $1.20.  How much does he make if he works a full {{x3}} day week?', [], [{'input': {'x1': 30, 'x2': 5, 'x3': 7}, 'output': 1260}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 5, 'x3': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1260;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 822,
        "question": 'John does 30 cycles of work a day.  Each cycle has 5 different tasks and each task pays $1.20.  How much does he make if he works a full 7 day week?',
        "answer": 1260,
        "examples": [{'input': {'x1': 30, 'x2': 5, 'x3': 7}, 'output': 1260}],
        });
    fs.writeFileSync('json/822.json', json);
}
doit();
