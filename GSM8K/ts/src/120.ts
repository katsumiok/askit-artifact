import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/120.json')) {
        console.log("Skipping 120")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Miguel uses {{x1}} pads of paper a week for his drawing. If there are {{x2}} sheets of paper on a pad of paper, how many sheets of paper does he use every month?', [], [{'input': {'x1': 2, 'x2': 30}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 30});
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
        "id": 120,
        "question": 'Miguel uses 2 pads of paper a week for his drawing. If there are 30 sheets of paper on a pad of paper, how many sheets of paper does he use every month?',
        "answer": 240,
        "examples": [{'input': {'x1': 2, 'x2': 30}, 'output': 240}],
        });
    fs.writeFileSync('json/120.json', json);
}
doit();
