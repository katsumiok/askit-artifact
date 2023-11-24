import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/69.json')) {
        console.log("Skipping 69")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Bailey starts with a certain amount of money. Then she receives a weekly allowance of $5 for {{x1}} weeks. At the end of the {{x2}} weeks, if she has a total of $100, how much money did Bailey start with?', [], [{'input': {'x1': 8, 'x2': 8}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 69,
        "question": 'Bailey starts with a certain amount of money. Then she receives a weekly allowance of $5 for 8 weeks. At the end of the 8 weeks, if she has a total of $100, how much money did Bailey start with?',
        "answer": 60,
        "examples": [{'input': {'x1': 8, 'x2': 8}, 'output': 60}],
        });
    fs.writeFileSync('json/69.json', json);
}
doit();
