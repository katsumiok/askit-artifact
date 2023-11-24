import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/417.json')) {
        console.log("Skipping 417")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Tom went on a two-week-long trip through Europe. In the first {{x1}} days, he traveled {{x2}} kilometers every day, and over the next two days, he totaled only 30% of the distance traveled over the first four days. On the next day, he wasn't traveling at all. During the second week, he made {{x3}} kilometers every day. How many kilometers in total did Tom make during his two-week-long trip?", [], [{'input': {'x1': 4, 'x2': 200, 'x3': 300}, 'output': 3140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 200, 'x3': 300});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3140;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 417,
        "question": "Tom went on a two-week-long trip through Europe. In the first 4 days, he traveled 200 kilometers every day, and over the next two days, he totaled only 30% of the distance traveled over the first four days. On the next day, he wasn't traveling at all. During the second week, he made 300 kilometers every day. How many kilometers in total did Tom make during his two-week-long trip?",
        "answer": 3140,
        "examples": [{'input': {'x1': 4, 'x2': 200, 'x3': 300}, 'output': 3140}],
        });
    fs.writeFileSync('json2/417.json', json);
}
doit();
