import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/202.json')) {
        console.log("Skipping 202")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Josie grows grapes on her 10-acre farm.  Each acre produces {{x1}} tons of grapes per year, and each ton of grapes makes {{x2}} barrels of wine.  How many barrels of wine does her farm produce per year?', [], [{'input': {'x1': 5, 'x2': 2}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 202,
        "question": 'Josie grows grapes on her 10-acre farm.  Each acre produces 5 tons of grapes per year, and each ton of grapes makes 2 barrels of wine.  How many barrels of wine does her farm produce per year?',
        "answer": 100,
        "examples": [{'input': {'x1': 5, 'x2': 2}, 'output': 100}],
        });
    fs.writeFileSync('json/202.json', json);
}
doit();
