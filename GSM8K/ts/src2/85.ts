import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/85.json')) {
        console.log("Skipping 85")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Gene is sewing a quilt out of old souvenir t-shirts. He has one shirt from each vacation he has been on. Every shirt is its own quilt block. Each row is made of blocks from a different year of vacations. He goes on four vacations a year and has been vacationing since he was {{x1}} years old. He is now 34. How many quilt blocks does he have in total?', [], [{'input': {'x1': 23}, 'output': 44}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 23});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 44;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 85,
        "question": 'Gene is sewing a quilt out of old souvenir t-shirts. He has one shirt from each vacation he has been on. Every shirt is its own quilt block. Each row is made of blocks from a different year of vacations. He goes on four vacations a year and has been vacationing since he was 23 years old. He is now 34. How many quilt blocks does he have in total?',
        "answer": 44,
        "examples": [{'input': {'x1': 23}, 'output': 44}],
        });
    fs.writeFileSync('json2/85.json', json);
}
doit();
