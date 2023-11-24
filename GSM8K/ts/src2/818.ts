import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/818.json')) {
        console.log("Skipping 818")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Joe has twice as many cars as Robert. He sells 20% of them and gives away twice as many cars as the number he sold to his mother. If Robert has {{x1}} cars, how many cars does joe remain with after selling and giving some to his mother?', [], [{'input': {'x1': 20}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 818,
        "question": 'Joe has twice as many cars as Robert. He sells 20% of them and gives away twice as many cars as the number he sold to his mother. If Robert has 20 cars, how many cars does joe remain with after selling and giving some to his mother?',
        "answer": 16,
        "examples": [{'input': {'x1': 20}, 'output': 16}],
        });
    fs.writeFileSync('json2/818.json', json);
}
doit();
