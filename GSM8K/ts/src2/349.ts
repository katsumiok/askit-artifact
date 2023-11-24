import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/349.json')) {
        console.log("Skipping 349")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Every month, Madeline has to buy food, treats, and medicine for her dog. Food costs $25 per week. Treats cost $20 per month. Medicine costs $100 per month. How much money does Madeline spend on her dog per year if there are {{x1}} weeks in a month?', [], [{'input': {'x1': 4}, 'output': 2640}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2640;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 349,
        "question": 'Every month, Madeline has to buy food, treats, and medicine for her dog. Food costs $25 per week. Treats cost $20 per month. Medicine costs $100 per month. How much money does Madeline spend on her dog per year if there are 4 weeks in a month?',
        "answer": 2640,
        "examples": [{'input': {'x1': 4}, 'output': 2640}],
        });
    fs.writeFileSync('json2/349.json', json);
}
doit();
