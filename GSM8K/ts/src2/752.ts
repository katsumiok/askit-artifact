import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/752.json')) {
        console.log("Skipping 752")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jenna has {{x1}} roommates. Each month the electricity bill is $100. How much will each roommate pay per year for electricity, if they divide the share equally?', [], [{'input': {'x1': 4}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
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
        "id": 752,
        "question": 'Jenna has 4 roommates. Each month the electricity bill is $100. How much will each roommate pay per year for electricity, if they divide the share equally?',
        "answer": 240,
        "examples": [{'input': {'x1': 4}, 'output': 240}],
        });
    fs.writeFileSync('json2/752.json', json);
}
doit();
