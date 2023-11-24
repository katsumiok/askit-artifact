import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/798.json')) {
        console.log("Skipping 798")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("When Billy was first hired, he was paid at a rate of $10 per hour.  After {{x1}} months, he was given a raise of $0.50 per hour.  On his first anniversary at work, he was given a raise of $1.00 per hour.  Sally just started working at a different business, and her starting salary is $0.50 more per hour than Billy's starting salary was.  If both Billy and Sally work {{x2}} hours, how much more money will Billy earn than Sally, in dollars?", [], [{'input': {'x1': 2, 'x2': 20}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 798,
        "question": "When Billy was first hired, he was paid at a rate of $10 per hour.  After 2 months, he was given a raise of $0.50 per hour.  On his first anniversary at work, he was given a raise of $1.00 per hour.  Sally just started working at a different business, and her starting salary is $0.50 more per hour than Billy's starting salary was.  If both Billy and Sally work 20 hours, how much more money will Billy earn than Sally, in dollars?",
        "answer": 20,
        "examples": [{'input': {'x1': 2, 'x2': 20}, 'output': 20}],
        });
    fs.writeFileSync('json/798.json', json);
}
doit();
