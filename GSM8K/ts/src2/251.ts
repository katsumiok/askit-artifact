import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/251.json')) {
        console.log("Skipping 251")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Travis had {{x1}} apps on his tablet. He deleted {{x2}} apps he didn't use anymore and downloaded {{x3}} more. How many apps are on his tablet now?", [], [{'input': {'x1': 61, 'x2': 9, 'x3': 18}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 61, 'x2': 9, 'x3': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 251,
        "question": "Travis had 61 apps on his tablet. He deleted 9 apps he didn't use anymore and downloaded 18 more. How many apps are on his tablet now?",
        "answer": 70,
        "examples": [{'input': {'x1': 61, 'x2': 9, 'x3': 18}, 'output': 70}],
        });
    fs.writeFileSync('json2/251.json', json);
}
doit();
