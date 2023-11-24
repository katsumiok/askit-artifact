import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/564.json')) {
        console.log("Skipping 564")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('In the first week, Judy read for {{x1}} minutes each night before going to sleep. In the second week, she read a total of {{x2}} pages. If she can read {{x3}} pages per 1.5 minutes, how many pages did she read in two weeks?', [], [{'input': {'x1': 15, 'x2': 100, 'x3': 2}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 100, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 564,
        "question": 'In the first week, Judy read for 15 minutes each night before going to sleep. In the second week, she read a total of 100 pages. If she can read 2 pages per 1.5 minutes, how many pages did she read in two weeks?',
        "answer": 240,
        "examples": [{'input': {'x1': 15, 'x2': 100, 'x3': 2}, 'output': 240}],
        });
    fs.writeFileSync('json/564.json', json);
}
doit();
