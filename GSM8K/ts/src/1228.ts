import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1228.json')) {
        console.log("Skipping 1228")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Samantha has {{x1}} fewer paintings than Shelley, and Shelley has {{x2}} paintings more than Kim. If Samantha has {{x3}} paintings, how many paintings does Kim have?', [], [{'input': {'x1': 12, 'x2': 8, 'x3': 27}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 8, 'x3': 27});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1228,
        "question": 'Samantha has 12 fewer paintings than Shelley, and Shelley has 8 paintings more than Kim. If Samantha has 27 paintings, how many paintings does Kim have?',
        "answer": 31,
        "examples": [{'input': {'x1': 12, 'x2': 8, 'x3': 27}, 'output': 31}],
        });
    fs.writeFileSync('json/1228.json', json);
}
doit();
