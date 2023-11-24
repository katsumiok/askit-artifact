import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/401.json')) {
        console.log("Skipping 401")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A builder works for {{x1}} weeks every month and for {{x2}} days every week. If he gets paid $50 every day, how much does he earn if he works for a year?', [], [{'input': {'x1': 4, 'x2': 6}, 'output': 14400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 401,
        "question": 'A builder works for 4 weeks every month and for 6 days every week. If he gets paid $50 every day, how much does he earn if he works for a year?',
        "answer": 14400,
        "examples": [{'input': {'x1': 4, 'x2': 6}, 'output': 14400}],
        });
    fs.writeFileSync('json/401.json', json);
}
doit();
