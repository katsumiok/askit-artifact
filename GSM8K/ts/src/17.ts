import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/17.json')) {
        console.log("Skipping 17")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jill gets paid $20 per hour to teach and $30 to be a cheerleading coach. If she works {{x1}} weeks a year, {{x2}} hours a week as a teacher and {{x3}} hours a week as a coach, what's her annual salary?", [], [{'input': {'x1': 50, 'x2': 35, 'x3': 15}, 'output': 57500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 35, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 57500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 17,
        "question": "Jill gets paid $20 per hour to teach and $30 to be a cheerleading coach. If she works 50 weeks a year, 35 hours a week as a teacher and 15 hours a week as a coach, what's her annual salary?",
        "answer": 57500,
        "examples": [{'input': {'x1': 50, 'x2': 35, 'x3': 15}, 'output': 57500}],
        });
    fs.writeFileSync('json/17.json', json);
}
doit();
