import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/343.json')) {
        console.log("Skipping 343")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("In his training as a professional athlete, Tyson runs {{x1}} meters every day. His coach, however, wants him to run 1/5 times more meters in a day. If he took the coach's advice and trained for a month, what is the total distance he covered in June?", [], [{'input': {'x1': 5000}, 'output': 180000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 343,
        "question": "In his training as a professional athlete, Tyson runs 5000 meters every day. His coach, however, wants him to run 1/5 times more meters in a day. If he took the coach's advice and trained for a month, what is the total distance he covered in June?",
        "answer": 180000,
        "examples": [{'input': {'x1': 5000}, 'output': 180000}],
        });
    fs.writeFileSync('json/343.json', json);
}
doit();
