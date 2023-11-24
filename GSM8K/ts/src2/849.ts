import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/849.json')) {
        console.log("Skipping 849")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A farmer has {{x1}} eggs. He placed them on a tray, which holds {{x2}} eggs each. How much will the farmer earn if he sells it for $2.5 per tray?', [], [{'input': {'x1': 900, 'x2': 30}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 900, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 849,
        "question": 'A farmer has 900 eggs. He placed them on a tray, which holds 30 eggs each. How much will the farmer earn if he sells it for $2.5 per tray?',
        "answer": 75,
        "examples": [{'input': {'x1': 900, 'x2': 30}, 'output': 75}],
        });
    fs.writeFileSync('json2/849.json', json);
}
doit();
