import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1239.json')) {
        console.log("Skipping 1239")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A custodian has to clean a school with {{x1}} classrooms. They have {{x2}} days to get it done. It takes them {{x3}} minutes per classroom. If they work an {{x4}} hour day, what percentage of their day, on average, is spent cleaning classrooms?', [], [{'input': {'x1': 80, 'x2': 5, 'x3': 15, 'x4': 8}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 5, 'x3': 15, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1239,
        "question": 'A custodian has to clean a school with 80 classrooms. They have 5 days to get it done. It takes them 15 minutes per classroom. If they work an 8 hour day, what percentage of their day, on average, is spent cleaning classrooms?',
        "answer": 50,
        "examples": [{'input': {'x1': 80, 'x2': 5, 'x3': 15, 'x4': 8}, 'output': 50}],
        });
    fs.writeFileSync('json/1239.json', json);
}
doit();
