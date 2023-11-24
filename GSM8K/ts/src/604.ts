import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/604.json')) {
        console.log("Skipping 604")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Howard spends $8 dollars at the arcade on Monday. On Tuesday, he spends twice as much at the arcade as he did on Monday. On Wednesday, he spends {{x1}} times as much at the arcade as he spent on Tuesday. If he originally had $100, how much money does he have left?', [], [{'input': {'x1': 4}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 604,
        "question": 'Howard spends $8 dollars at the arcade on Monday. On Tuesday, he spends twice as much at the arcade as he did on Monday. On Wednesday, he spends 4 times as much at the arcade as he spent on Tuesday. If he originally had $100, how much money does he have left?',
        "answer": 12,
        "examples": [{'input': {'x1': 4}, 'output': 12}],
        });
    fs.writeFileSync('json/604.json', json);
}
doit();
