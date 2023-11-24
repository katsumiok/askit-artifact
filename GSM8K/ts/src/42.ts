import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/42.json')) {
        console.log("Skipping 42")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Grandma Jones baked {{x1}} apple pies for the fireman's luncheon.  She cut each pie into {{x2}} pieces and set the five pies out on the buffet table for the guests to serve themselves.  At the end of the evening, after the guests had taken and eaten their pieces of pie, there were {{x3}} pieces of pie remaining.  How many pieces were taken by the guests?", [], [{'input': {'x1': 5, 'x2': 8, 'x3': 14}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8, 'x3': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 42,
        "question": "Grandma Jones baked 5 apple pies for the fireman's luncheon.  She cut each pie into 8 pieces and set the five pies out on the buffet table for the guests to serve themselves.  At the end of the evening, after the guests had taken and eaten their pieces of pie, there were 14 pieces of pie remaining.  How many pieces were taken by the guests?",
        "answer": 26,
        "examples": [{'input': {'x1': 5, 'x2': 8, 'x3': 14}, 'output': 26}],
        });
    fs.writeFileSync('json/42.json', json);
}
doit();
