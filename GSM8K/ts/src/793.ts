import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/793.json')) {
        console.log("Skipping 793")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jamie earns $20 per hour for {{x1}} hours of work each day. Should she need to work additional hours, she is paid a special hourly rate that is 150% of her regular hourly rate. Last Tuesday, she worked {{x2}} hours. How much was she paid, in dollars, for her work that day?', [], [{'input': {'x1': 8, 'x2': 11}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 11});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 793,
        "question": 'Jamie earns $20 per hour for 8 hours of work each day. Should she need to work additional hours, she is paid a special hourly rate that is 150% of her regular hourly rate. Last Tuesday, she worked 11 hours. How much was she paid, in dollars, for her work that day?',
        "answer": 250,
        "examples": [{'input': {'x1': 8, 'x2': 11}, 'output': 250}],
        });
    fs.writeFileSync('json/793.json', json);
}
doit();
