import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/28.json')) {
        console.log("Skipping 28")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Henry made two stops during his 60-mile bike trip. He first stopped after {{x1}} miles. His second stop was {{x2}} miles before the end of the trip. How many miles did he travel between his first and second stops?', [], [{'input': {'x1': 20, 'x2': 15}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 28,
        "question": 'Henry made two stops during his 60-mile bike trip. He first stopped after 20 miles. His second stop was 15 miles before the end of the trip. How many miles did he travel between his first and second stops?',
        "answer": 25,
        "examples": [{'input': {'x1': 20, 'x2': 15}, 'output': 25}],
        });
    fs.writeFileSync('json/28.json', json);
}
doit();
