import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/278.json')) {
        console.log("Skipping 278")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mico and Marco wanted to get to know each other. They realized that the sum of their ages is 20. What will be the sum of their ages in {{x1}} years?', [], [{'input': {'x1': 10}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 278,
        "question": 'Mico and Marco wanted to get to know each other. They realized that the sum of their ages is 20. What will be the sum of their ages in 10 years?',
        "answer": 40,
        "examples": [{'input': {'x1': 10}, 'output': 40}],
        });
    fs.writeFileSync('json/278.json', json);
}
doit();
