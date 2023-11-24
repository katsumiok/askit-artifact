import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/300.json')) {
        console.log("Skipping 300")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('On Tuesday, Peter wants to exercise for twice the amount of time he did on Monday and Sunday combined. On Sunday he exercised for {{x1}} minutes. On Monday he exercised for {{x2}} minutes. How many minutes does he have to exercise on Tuesday to reach his goal?', [], [{'input': {'x1': 23, 'x2': 16}, 'output': 78}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 23, 'x2': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 78;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 300,
        "question": 'On Tuesday, Peter wants to exercise for twice the amount of time he did on Monday and Sunday combined. On Sunday he exercised for 23 minutes. On Monday he exercised for 16 minutes. How many minutes does he have to exercise on Tuesday to reach his goal?',
        "answer": 78,
        "examples": [{'input': {'x1': 23, 'x2': 16}, 'output': 78}],
        });
    fs.writeFileSync('json2/300.json', json);
}
doit();
