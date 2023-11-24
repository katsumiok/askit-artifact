import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1219.json')) {
        console.log("Skipping 1219")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John is a carpenter. For his friend Ali, he manufactured {{x1}} wooden tables for $20 each and {{x2}} roof frames for $10 each. How much does Ali have to pay John?', [], [{'input': {'x1': 4, 'x2': 2}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1219,
        "question": 'John is a carpenter. For his friend Ali, he manufactured 4 wooden tables for $20 each and 2 roof frames for $10 each. How much does Ali have to pay John?',
        "answer": 100,
        "examples": [{'input': {'x1': 4, 'x2': 2}, 'output': 100}],
        });
    fs.writeFileSync('json2/1219.json', json);
}
doit();
