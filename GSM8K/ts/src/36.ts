import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/36.json')) {
        console.log("Skipping 36")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Terry eats {{x1}} yogurts a day.  They are currently on sale at {{x2}} yogurts for $5.00.  How much does he spend on yogurt over {{x3}} days?', [], [{'input': {'x1': 2, 'x2': 4, 'x3': 30}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4, 'x3': 30});
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
        "id": 36,
        "question": 'Terry eats 2 yogurts a day.  They are currently on sale at 4 yogurts for $5.00.  How much does he spend on yogurt over 30 days?',
        "answer": 75,
        "examples": [{'input': {'x1': 2, 'x2': 4, 'x3': 30}, 'output': 75}],
        });
    fs.writeFileSync('json/36.json', json);
}
doit();
