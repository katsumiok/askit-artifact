import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/258.json')) {
        console.log("Skipping 258")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Nancy is returning her overdue books to the library. She owes $0.50 cents each on {{x1}} books, plus a flat $2.00 fee for having at least one book that's over a week overdue. How much does she have to pay total?", [], [{'input': {'x1': 8}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 258,
        "question": "Nancy is returning her overdue books to the library. She owes $0.50 cents each on 8 books, plus a flat $2.00 fee for having at least one book that's over a week overdue. How much does she have to pay total?",
        "answer": 6,
        "examples": [{'input': {'x1': 8}, 'output': 6}],
        });
    fs.writeFileSync('json2/258.json', json);
}
doit();
