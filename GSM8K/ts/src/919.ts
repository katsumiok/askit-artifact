import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/919.json')) {
        console.log("Skipping 919")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('To raise money for their class fund, each of the {{x1}} students from one class sold lollipops that cost $0.8 per lollypop. On average, each student sold {{x2}} lollipops. If they bought the lollipops for $0.5 each, how much money was the class able to raise from the profit of selling lollipops?', [], [{'input': {'x1': 30, 'x2': 10}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 919,
        "question": 'To raise money for their class fund, each of the 30 students from one class sold lollipops that cost $0.8 per lollypop. On average, each student sold 10 lollipops. If they bought the lollipops for $0.5 each, how much money was the class able to raise from the profit of selling lollipops?',
        "answer": 90,
        "examples": [{'input': {'x1': 30, 'x2': 10}, 'output': 90}],
        });
    fs.writeFileSync('json/919.json', json);
}
doit();
