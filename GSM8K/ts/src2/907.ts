import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/907.json')) {
        console.log("Skipping 907")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Sarah has {{x1}} books and Joseph had twice the number of Sarah’s books, but he lost {{x2}} of them. How many books does Joseph currently have?', [], [{'input': {'x1': 9, 'x2': 2}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 907,
        "question": 'Sarah has 9 books and Joseph had twice the number of Sarah’s books, but he lost 2 of them. How many books does Joseph currently have?',
        "answer": 16,
        "examples": [{'input': {'x1': 9, 'x2': 2}, 'output': 16}],
        });
    fs.writeFileSync('json2/907.json', json);
}
doit();
