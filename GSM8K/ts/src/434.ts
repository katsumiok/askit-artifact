import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/434.json')) {
        console.log("Skipping 434")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The vending machines sell chips for {{x1}} cents and candy bars for {{x2}} cents. George spent $5 and got {{x3}} bags of chips and had 1% of his money left. How many candy bars did he buy?', [], [{'input': {'x1': 40, 'x2': 75, 'x3': 3}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 75, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 434,
        "question": 'The vending machines sell chips for 40 cents and candy bars for 75 cents. George spent $5 and got 3 bags of chips and had 1% of his money left. How many candy bars did he buy?',
        "answer": 5,
        "examples": [{'input': {'x1': 40, 'x2': 75, 'x3': 3}, 'output': 5}],
        });
    fs.writeFileSync('json/434.json', json);
}
doit();
