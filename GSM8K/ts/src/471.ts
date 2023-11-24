import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/471.json')) {
        console.log("Skipping 471")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are {{x1}} students in Marissa’s class. Each student started the year with {{x2}} pencils. After two months, 1/5 of the total pencils in class were used. At the end of the year, only 1/3 of the remaining pencils were left. How many pencils were left?', [], [{'input': {'x1': 30, 'x2': 10}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 471,
        "question": 'There are 30 students in Marissa’s class. Each student started the year with 10 pencils. After two months, 1/5 of the total pencils in class were used. At the end of the year, only 1/3 of the remaining pencils were left. How many pencils were left?',
        "answer": 80,
        "examples": [{'input': {'x1': 30, 'x2': 10}, 'output': 80}],
        });
    fs.writeFileSync('json/471.json', json);
}
doit();
