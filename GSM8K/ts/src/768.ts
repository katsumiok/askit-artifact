import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/768.json')) {
        console.log("Skipping 768")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In one hour, Ezra read twice as many books as Ahmed. Ezra has read {{x1}} books this hour and decided to read {{x2}} more. How many books have they read altogether?', [], [{'input': {'x1': 300, 'x2': 150}, 'output': 675}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300, 'x2': 150});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 675;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 768,
        "question": 'In one hour, Ezra read twice as many books as Ahmed. Ezra has read 300 books this hour and decided to read 150 more. How many books have they read altogether?',
        "answer": 675,
        "examples": [{'input': {'x1': 300, 'x2': 150}, 'output': 675}],
        });
    fs.writeFileSync('json/768.json', json);
}
doit();
