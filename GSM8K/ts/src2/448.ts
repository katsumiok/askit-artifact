import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/448.json')) {
        console.log("Skipping 448")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("A salesman bought a case of {{x1}} sneakers for $576. He sold {{x2}} of them for $20 at a flash sale on Monday, and the rest were sold to a department store for $25 each throughout the rest of the week. How much money, in dollars, was the salesman's profit?", [], [{'input': {'x1': 48, 'x2': 17}, 'output': 539}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 48, 'x2': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 539;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 448,
        "question": "A salesman bought a case of 48 sneakers for $576. He sold 17 of them for $20 at a flash sale on Monday, and the rest were sold to a department store for $25 each throughout the rest of the week. How much money, in dollars, was the salesman's profit?",
        "answer": 539,
        "examples": [{'input': {'x1': 48, 'x2': 17}, 'output': 539}],
        });
    fs.writeFileSync('json2/448.json', json);
}
doit();
