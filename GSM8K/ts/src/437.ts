import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/437.json')) {
        console.log("Skipping 437")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Sitti and Juris bought {{x1}} and {{x2}} oranges, respectively. If both of them decide to share them equally with their {{x3}} other friends, how many oranges will everyone get?', [], [{'input': {'x1': 34, 'x2': 22, 'x3': 6}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 34, 'x2': 22, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 437,
        "question": 'Sitti and Juris bought 34 and 22 oranges, respectively. If both of them decide to share them equally with their 6 other friends, how many oranges will everyone get?',
        "answer": 7,
        "examples": [{'input': {'x1': 34, 'x2': 22, 'x3': 6}, 'output': 7}],
        });
    fs.writeFileSync('json/437.json', json);
}
doit();
