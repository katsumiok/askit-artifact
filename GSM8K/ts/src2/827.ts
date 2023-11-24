import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/827.json')) {
        console.log("Skipping 827")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Milly needs to return a book she decided was really boring. The book weighs {{x1}} pounds, cost $32, and needs to be returned to a distribution center {{x2}} miles away. If the shipping company charges $0.35 per pound plus $0.08 per mile, and Amazon will only refund 75% of the book's purchase price, how much money will Milly lose?", [], [{'input': {'x1': 4, 'x2': 20}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 827,
        "question": "Milly needs to return a book she decided was really boring. The book weighs 4 pounds, cost $32, and needs to be returned to a distribution center 20 miles away. If the shipping company charges $0.35 per pound plus $0.08 per mile, and Amazon will only refund 75% of the book's purchase price, how much money will Milly lose?",
        "answer": 11,
        "examples": [{'input': {'x1': 4, 'x2': 20}, 'output': 11}],
        });
    fs.writeFileSync('json2/827.json', json);
}
doit();
