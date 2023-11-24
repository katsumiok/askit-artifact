import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/673.json')) {
        console.log("Skipping 673")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Janey has {{x1}} more than twice the number of books that Sally has. If Janey has {{x2}} books, how many does Sally have?', [], [{'input': {'x1': 3, 'x2': 21}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 21});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 673,
        "question": 'Janey has 3 more than twice the number of books that Sally has. If Janey has 21 books, how many does Sally have?',
        "answer": 9,
        "examples": [{'input': {'x1': 3, 'x2': 21}, 'output': 9}],
        });
    fs.writeFileSync('json/673.json', json);
}
doit();
