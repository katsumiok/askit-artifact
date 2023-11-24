import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/482.json')) {
        console.log("Skipping 482")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Keegan was running a car wash with his friend Tashay to raise money for a baseball camp. They needed to raise $200 for the two of them. By {{x1}} pm, Keegan had earned $83 and Tasha had earned $91. How much more did they need to earn to reach their goal?', [], [{'input': {'x1': 3}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 482,
        "question": 'Keegan was running a car wash with his friend Tashay to raise money for a baseball camp. They needed to raise $200 for the two of them. By 3 pm, Keegan had earned $83 and Tasha had earned $91. How much more did they need to earn to reach their goal?',
        "answer": 26,
        "examples": [{'input': {'x1': 3}, 'output': 26}],
        });
    fs.writeFileSync('json/482.json', json);
}
doit();
