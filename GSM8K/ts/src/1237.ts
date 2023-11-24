import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1237.json')) {
        console.log("Skipping 1237")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Last Friday, {{x1}} of the {{x2}} teachers at Rydell Elementary School were sick. There were {{x3}} substitute teachers called in to help. How many teachers were at school that day?', [], [{'input': {'x1': 13, 'x2': 82, 'x3': 9}, 'output': 78}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 13, 'x2': 82, 'x3': 9});
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
        "id": 1237,
        "question": 'Last Friday, 13 of the 82 teachers at Rydell Elementary School were sick. There were 9 substitute teachers called in to help. How many teachers were at school that day?',
        "answer": 78,
        "examples": [{'input': {'x1': 13, 'x2': 82, 'x3': 9}, 'output': 78}],
        });
    fs.writeFileSync('json/1237.json', json);
}
doit();
