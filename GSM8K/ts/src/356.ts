import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/356.json')) {
        console.log("Skipping 356")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Dean's mother gave him $28 to go to the toy store. Dean bought {{x1}} toy cars and {{x2}} teddy bears. Each toy car cost $2 and each teddy bear cost $1. His mother then feels generous and decides to give him an extra $10. How much money does Dean have left?", [], [{'input': {'x1': 6, 'x2': 5}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 356,
        "question": "Dean's mother gave him $28 to go to the toy store. Dean bought 6 toy cars and 5 teddy bears. Each toy car cost $2 and each teddy bear cost $1. His mother then feels generous and decides to give him an extra $10. How much money does Dean have left?",
        "answer": 21,
        "examples": [{'input': {'x1': 6, 'x2': 5}, 'output': 21}],
        });
    fs.writeFileSync('json/356.json', json);
}
doit();
