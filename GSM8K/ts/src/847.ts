import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/847.json')) {
        console.log("Skipping 847")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Brenda invested $300 into a scheme that accumulates simple interest at the rate of three-quarters of the original amount per year. How much in total will she have after {{x1}} years?', [], [{'input': {'x1': 3}, 'output': 975}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 975;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 847,
        "question": 'Brenda invested $300 into a scheme that accumulates simple interest at the rate of three-quarters of the original amount per year. How much in total will she have after 3 years?',
        "answer": 975,
        "examples": [{'input': {'x1': 3}, 'output': 975}],
        });
    fs.writeFileSync('json/847.json', json);
}
doit();
