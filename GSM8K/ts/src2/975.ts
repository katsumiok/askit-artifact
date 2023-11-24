import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/975.json')) {
        console.log("Skipping 975")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Richard, Jerry, and Robert are going to share {{x1}} cherries. If Robert has {{x2}} cherries, and has {{x3}} more than Richard, how many more cherries does Robert have than Jerry?', [], [{'input': {'x1': 60, 'x2': 30, 'x3': 10}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 30, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 975,
        "question": 'Richard, Jerry, and Robert are going to share 60 cherries. If Robert has 30 cherries, and has 10 more than Richard, how many more cherries does Robert have than Jerry?',
        "answer": 20,
        "examples": [{'input': {'x1': 60, 'x2': 30, 'x3': 10}, 'output': 20}],
        });
    fs.writeFileSync('json2/975.json', json);
}
doit();
