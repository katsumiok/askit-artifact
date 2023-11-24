import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/282.json')) {
        console.log("Skipping 282")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Maddy is buying pizza for her cousin's soccer game. There are {{x1}} team members and {{x2}} coaches. Each team member brings {{x3}} guests. A pizza will serve {{x4}} people. If each pizza costs $15, how many dollars will Maddy spend?", [], [{'input': {'x1': 12, 'x2': 3, 'x3': 2, 'x4': 3}, 'output': 195}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 3, 'x3': 2, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 195;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 282,
        "question": "Maddy is buying pizza for her cousin's soccer game. There are 12 team members and 3 coaches. Each team member brings 2 guests. A pizza will serve 3 people. If each pizza costs $15, how many dollars will Maddy spend?",
        "answer": 195,
        "examples": [{'input': {'x1': 12, 'x2': 3, 'x3': 2, 'x4': 3}, 'output': 195}],
        });
    fs.writeFileSync('json/282.json', json);
}
doit();
