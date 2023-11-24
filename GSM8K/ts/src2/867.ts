import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/867.json')) {
        console.log("Skipping 867")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Daisy bought a bag of potatoes that weighed {{x1}} pounds. She also bought a bag of sweet potatoes that weighed {{x2}} times as much as the potatoes and a bag of carrots that weighed {{x3}} pounds fewer than the sweet potatoes. How many pounds of carrots did Daisy buy?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 3}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 867,
        "question": 'Daisy bought a bag of potatoes that weighed 5 pounds. She also bought a bag of sweet potatoes that weighed 2 times as much as the potatoes and a bag of carrots that weighed 3 pounds fewer than the sweet potatoes. How many pounds of carrots did Daisy buy?',
        "answer": 7,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 3}, 'output': 7}],
        });
    fs.writeFileSync('json2/867.json', json);
}
doit();
