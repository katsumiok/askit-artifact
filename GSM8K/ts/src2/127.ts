import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/127.json')) {
        console.log("Skipping 127")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('After transferring to a new school, Amy made {{x1}} more friends than Lily. If Lily made {{x2}} friends, how many friends do Lily and Amy have together?', [], [{'input': {'x1': 20, 'x2': 50}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 127,
        "question": 'After transferring to a new school, Amy made 20 more friends than Lily. If Lily made 50 friends, how many friends do Lily and Amy have together?',
        "answer": 120,
        "examples": [{'input': {'x1': 20, 'x2': 50}, 'output': 120}],
        });
    fs.writeFileSync('json2/127.json', json);
}
doit();
