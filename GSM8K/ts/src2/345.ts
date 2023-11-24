import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/345.json')) {
        console.log("Skipping 345")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("A restaurant has {{x1}} tables with {{x2}} legs and {{x3}} tables with {{x4}} legs. Calculate the total number of legs the restaurant's tables have.", [], [{'input': {'x1': 40, 'x2': 4, 'x3': 50, 'x4': 3}, 'output': 310}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 4, 'x3': 50, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 310;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 345,
        "question": "A restaurant has 40 tables with 4 legs and 50 tables with 3 legs. Calculate the total number of legs the restaurant's tables have.",
        "answer": 310,
        "examples": [{'input': {'x1': 40, 'x2': 4, 'x3': 50, 'x4': 3}, 'output': 310}],
        });
    fs.writeFileSync('json2/345.json', json);
}
doit();
