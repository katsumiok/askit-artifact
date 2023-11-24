import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/738.json')) {
        console.log("Skipping 738")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Alice has {{x1}} more books than Steven. Clara has two times as many books as Steven. If Clara has {{x2}} books, how many more books does Clara have than Alice?', [], [{'input': {'x1': 6, 'x2': 20}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 738,
        "question": 'Alice has 6 more books than Steven. Clara has two times as many books as Steven. If Clara has 20 books, how many more books does Clara have than Alice?',
        "answer": 4,
        "examples": [{'input': {'x1': 6, 'x2': 20}, 'output': 4}],
        });
    fs.writeFileSync('json2/738.json', json);
}
doit();
