import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/301.json')) {
        console.log("Skipping 301")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A simple folding newspaper or tabloid can be made by folding a piece of paper vertically and unfolding. Then, say, page {{x1}} is printed on the left back, page {{x2}} is printed on the left front, and then, perhaps page {{x3}} is printed on the right back, and page {{x4}} is printed on the right front. How many pieces of paper would be used in a 32-page tabloid?', [], [{'input': {'x1': 1, 'x2': 2, 'x3': 32, 'x4': 31}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 32, 'x4': 31});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 301,
        "question": 'A simple folding newspaper or tabloid can be made by folding a piece of paper vertically and unfolding. Then, say, page 1 is printed on the left back, page 2 is printed on the left front, and then, perhaps page 32 is printed on the right back, and page 31 is printed on the right front. How many pieces of paper would be used in a 32-page tabloid?',
        "answer": 8,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 32, 'x4': 31}, 'output': 8}],
        });
    fs.writeFileSync('json/301.json', json);
}
doit();
