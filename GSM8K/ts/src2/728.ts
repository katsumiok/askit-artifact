import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/728.json')) {
        console.log("Skipping 728")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Candy has {{x1}} light blue spools of thread, {{x2}} dark blue spools of thread, {{x3}} light green spools of thread, and {{x4}} dark green spools of thread. What percent of her spools are blue?', [], [{'input': {'x1': 15, 'x2': 45, 'x3': 40, 'x4': 50}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 45, 'x3': 40, 'x4': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 728,
        "question": 'Candy has 15 light blue spools of thread, 45 dark blue spools of thread, 40 light green spools of thread, and 50 dark green spools of thread. What percent of her spools are blue?',
        "answer": 40,
        "examples": [{'input': {'x1': 15, 'x2': 45, 'x3': 40, 'x4': 50}, 'output': 40}],
        });
    fs.writeFileSync('json2/728.json', json);
}
doit();
