import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/491.json')) {
        console.log("Skipping 491")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jaime places eggs on the tray. Each tray can hold {{x1}} eggs. If he has {{x2}} eggs and {{x3}} trays, how many eggs won't he be able to place on the tray?", [], [{'input': {'x1': 24, 'x2': 64, 'x3': 2}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 64, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 491,
        "question": "Jaime places eggs on the tray. Each tray can hold 24 eggs. If he has 64 eggs and 2 trays, how many eggs won't he be able to place on the tray?",
        "answer": 16,
        "examples": [{'input': {'x1': 24, 'x2': 64, 'x3': 2}, 'output': 16}],
        });
    fs.writeFileSync('json/491.json', json);
}
doit();
