import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/453.json')) {
        console.log("Skipping 453")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jenna starts out with {{x1}} sapphires. She trades {{x2}} sapphires for two rubies. If sapphires are worth $800 and rubies are worth $1200, how much money are all her jewels worth?', [], [{'input': {'x1': 8, 'x2': 3}, 'output': 6400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 453,
        "question": 'Jenna starts out with 8 sapphires. She trades 3 sapphires for two rubies. If sapphires are worth $800 and rubies are worth $1200, how much money are all her jewels worth?',
        "answer": 6400,
        "examples": [{'input': {'x1': 8, 'x2': 3}, 'output': 6400}],
        });
    fs.writeFileSync('json2/453.json', json);
}
doit();
